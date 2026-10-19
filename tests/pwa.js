// The installable app: serves the folder over http, checks the manifest and icons, waits for the
// service worker, then goes offline and reloads to make sure the game still starts. Also checks that photos
// download one by one and can all be saved for offline play, and that a new version shows the update banner.
const {chromium}=require('playwright');
const {PAGE,shot,finish}=require('./lib');
const http=require('http'),fs=require('fs'),path=require('path'),{fileURLToPath}=require('url');
const ROOT=path.dirname(fileURLToPath(PAGE));
const TYPES={'.html':'text/html','.js':'text/javascript','.png':'image/png','.svg':'image/svg+xml','.webmanifest':'application/manifest+json','.webp':'image/webp'};
const OVR={},hits={};// OVR: replace a file's contents; hits: how often each file was asked for
const srv=http.createServer((q,r)=>{const u=decodeURIComponent(q.url.split('?')[0]);hits[u]=(hits[u]||0)+1;
 if(OVR[u]){r.writeHead(200,{'content-type':'text/javascript'});return r.end(OVR[u])}
 let f=path.join(ROOT,u);if(f.endsWith('/'))f=path.join(f,'index.html');
 if(!f.startsWith(ROOT)||!fs.existsSync(f)){r.writeHead(404);return r.end()}r.writeHead(200,{'content-type':TYPES[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r)});
(async()=>{await new Promise(ok=>srv.listen(0,'127.0.0.1',ok));const base='http://127.0.0.1:'+srv.address().port+'/';
const problems=[],b=await chromium.launch(),ctx=await b.newContext({viewport:{width:390,height:844}}),p=await ctx.newPage();
p.on('pageerror',e=>problems.push('page error: '+e.message));
await ctx.route(/wikipedia|wikimedia|wikidata/,r=>r.abort());
await p.goto(base);
// manifest and icons
const m=await p.evaluate(async()=>{const l=document.querySelector('link[rel=manifest]');if(!l)return null;const j=await (await fetch(l.href)).json();
 j.iconStatus=await Promise.all(j.icons.map(async i=>(await fetch(new URL(i.src,l.href))).status));return j});
if(!m)problems.push('no manifest link');else{
 if(m.display!=='standalone')problems.push('manifest display is '+m.display);
 for(const s of ['192x192','512x512'])if(!m.icons.some(i=>i.sizes===s))problems.push('manifest has no '+s+' icon');
 m.iconStatus.forEach((st,i)=>{if(st!==200)problems.push('icon '+m.icons[i].src+' returned '+st)})}
if(!await p.$('link[rel=apple-touch-icon]'))problems.push('no apple-touch-icon');
// service worker ready and controlling the page
const sw=await p.evaluate(()=>Promise.race([navigator.serviceWorker.ready.then(r=>!!r.active),new Promise(ok=>setTimeout(()=>ok(false),15000))]));
if(!sw)problems.push('service worker never became active');
await p.waitForTimeout(300);if(await p.$('#upd'))problems.push('update banner showed on the first visit');
await p.reload();await p.waitForTimeout(500);
// photos come one by one: opening the game downloads none of them
const photoHits=()=>Object.keys(hits).filter(k=>k.startsWith('/photos/img/')).length;
if(photoHits())problems.push('home screen downloaded '+photoHits()+' photos');
if(hits['/photos/p1.js'])problems.push('old all-in-one photo file still requested');
// playing a category downloads its photos, and they show on the cards
await p.click('[data-nav="cats"]');await p.click('[data-g="0"]');await p.click('.cat.sc');await p.waitForTimeout(1500);
const shown=await p.evaluate(()=>[].filter.call(document.querySelectorAll('.cell .tile img'),i=>i.complete&&i.naturalWidth>0).length);
console.log('photos shown',shown,'downloaded',photoHits());
if(shown<7)problems.push('only '+shown+' photos showed in the first round');
if(photoHits()<9||photoHits()>400)problems.push(photoHits()+' photos downloaded for one category');
// "Save all photos for offline" fetches every photo once and then says it's done
await p.evaluate(()=>{GRP=null;menu()});
const btn=await p.$('[data-off]');
if(!btn)problems.push('no "save photos for offline" button');else{
 await btn.click();
 const done=await p.waitForFunction(()=>!OFF.busy,null,{timeout:120000}).then(()=>true,()=>false);
 const st=await p.evaluate(()=>({txt:document.querySelector('[data-off]').textContent,n:phUrls().length,saved:ld('elim_off',0)}));
 console.log('save offline',st,'downloaded',photoHits());
 if(!done||st.saved!==st.n)problems.push('saving photos for offline did not finish: '+JSON.stringify(st));
 if(photoHits()!==st.n)problems.push('photo files downloaded '+photoHits()+' times, expected '+st.n);
 if(!/saved/i.test(st.txt))problems.push('button does not say photos are saved: '+st.txt)}
// a new version: the open app shows the update banner, and tapping it reloads into the new version
OVR['/sw.js']=fs.readFileSync(path.join(ROOT,'sw.js'),'utf8').replace(/'shelhom-[^']*'/,"'shelhom-test2'");
await p.evaluate(()=>navigator.serviceWorker.getRegistration().then(r=>r.update()));
const upd=await p.waitForSelector('#upd.show',{timeout:15000}).then(()=>true,()=>false);
if(!upd)problems.push('no update banner after a new version');else{
 await p.screenshot({path:shot('pwa_update_banner.png')});
 const nav=p.waitForNavigation({timeout:10000}).then(()=>true,()=>false);await p.click('#upd button');
 if(!await nav)problems.push('update button did not reload');await p.waitForTimeout(500);
 if(await p.$('#upd'))problems.push('banner still showing after the update')}
// offline: the game still loads with its photos
await ctx.setOffline(true);try{await p.reload()}catch(e){problems.push('game does not load offline');await b.close();srv.close();return finish('installable app',problems)}
await p.waitForTimeout(800);
const off=await p.evaluate(async()=>{const u=phUrls(),pick=[u[0],u[Math.floor(u.length/2)],u[u.length-1]];
 const got=await Promise.all(pick.map(x=>fetch(x).then(r=>r.ok,()=>false)));
 return{cats:document.querySelectorAll('.cat').length,photos:Object.keys(window.PH||{}).length,ctl:!!navigator.serviceWorker.controller,saved:got.every(Boolean)}});
console.log('offline',off);
if(!off.ctl)problems.push('page is not controlled by the service worker');
if(!off.cats)problems.push('home screen is empty offline');
if(off.photos<1000)problems.push('built-in photos missing offline ('+off.photos+')');
if(!off.saved)problems.push('saved photos not available offline');
// a round played offline shows its photos
await p.click('.cat.hero');await p.waitForTimeout(1200);
const offImgs=await p.evaluate(()=>[].filter.call(document.querySelectorAll('.cell .tile img'),i=>i.complete&&i.naturalWidth>0).length);
console.log('offline round photos',offImgs);if(offImgs<5)problems.push('only '+offImgs+' photos in an offline round');
await p.screenshot({path:shot('pwa_offline.png')});
await b.close();srv.close();finish('installable app',problems)})();
