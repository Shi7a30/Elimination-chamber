// The installable app: serves the folder over http, checks the manifest and icons, waits for the
// service worker, then goes offline and reloads to make sure the game still starts.
const {chromium}=require('playwright');
const {PAGE,shot,finish}=require('./lib');
const http=require('http'),fs=require('fs'),path=require('path'),{fileURLToPath}=require('url');
const ROOT=path.dirname(fileURLToPath(PAGE));
const TYPES={'.html':'text/html','.js':'text/javascript','.png':'image/png','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
const srv=http.createServer((q,r)=>{let f=path.join(ROOT,decodeURIComponent(q.url.split('?')[0]));if(f.endsWith('/'))f=path.join(f,'index.html');
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
await p.reload();await p.waitForTimeout(500);
// offline: the game still loads with its photos
await ctx.setOffline(true);try{await p.reload()}catch(e){problems.push('game does not load offline');await b.close();srv.close();return finish('installable app',problems)}
await p.waitForTimeout(800);
const off=await p.evaluate(()=>({cats:document.querySelectorAll('.cat').length,photos:Object.keys(window.PH||{}).length,ctl:!!navigator.serviceWorker.controller}));
console.log('offline',off);
if(!off.ctl)problems.push('page is not controlled by the service worker');
if(!off.cats)problems.push('home screen is empty offline');
if(off.photos<1000)problems.push('built-in photos missing offline ('+off.photos+')');
await p.screenshot({path:shot('pwa_offline.png')});
await b.close();srv.close();finish('installable app',problems)})();
