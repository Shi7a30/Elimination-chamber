// Edge cases from the 21 Oct 2026 deep test: phone back button, update banner in a game, challenge invite kept on Home,
// hot potato not repeating rounds, region-aware "seen" decks, same-name cards, Daily clock tricks, undo price after
// reopening, broken or full storage, big coin numbers and the narrow-phone popup.
const {chromium}=require('playwright');
const {PAGE,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const bad=[],errs=[];const ok=(c,m)=>{if(!c)bad.push(m)};
const page=async(o)=>{o=o||{};const ctx=await b.newContext({viewport:o.vp||{width:390,height:844},isMobile:true,hasTouch:true});const p=await ctx.newPage();
 await p.route('https://**',r=>r.abort());p.on('pageerror',e=>errs.push(e.message));
 await p.addInitScript(ls=>{if(sessionStorage.getItem('s'))return;sessionStorage.setItem('s',1);localStorage.setItem('elim_how','1');for(const k in ls)localStorage.setItem(k,ls[k])},o.ls||{});
 await p.goto(PAGE+(o.q||''));await p.waitForTimeout(300);return p};
const win=p=>p.evaluate(()=>{for(let i=0;i<items.length;i++)if(i!==corr&&out.indexOf(i)<0)document.querySelector('.cell[data-i="'+i+'"]').click()});

// 1. back button: group page -> categories -> home; in a game it asks before leaving
let p=await page();
await p.evaluate(()=>document.querySelector('[data-nav="cats"]').click());await p.evaluate(()=>document.querySelector('.cat[data-g="0"]').click());
await p.goBack();await p.waitForTimeout(200);ok(await p.evaluate(()=>GRP==="cats"&&document.body.dataset.scr==="menu"),'back from a group did not go to Categories');
await p.goBack();await p.waitForTimeout(200);ok(await p.evaluate(()=>document.body.dataset.scr==="home"),'back from Categories did not go Home');
await p.evaluate(()=>document.querySelector('.cat.hero').click());await p.evaluate(()=>{for(let i=0,k=0;k<2;i++)if(i!==corr){document.querySelector('.cell[data-i="'+i+'"]').click();k++}});
await p.goBack();await p.waitForTimeout(300);let s=await p.evaluate(()=>({game:inGame(),q:document.getElementById('st').textContent,sh:document.getElementById('sheet').classList.contains('show')}));
ok(s.game&&s.sh&&/Leave/.test(s.q),'back in a game did not ask first: '+JSON.stringify(s));
await p.goBack();await p.waitForTimeout(300);ok(await p.evaluate(()=>inGame()&&!document.getElementById('sheet').classList.contains('show')&&out.length===2),'second back did not keep playing');
// 2. update banner hidden in a game, shown on Home
await p.evaluate(()=>updShow());await p.waitForTimeout(100);ok(await p.evaluate(()=>getComputedStyle(document.getElementById('upd')).display==='none'),'update banner shows during a game');
await p.evaluate(()=>{GRP=null;menu()});ok(await p.evaluate(()=>getComputedStyle(document.getElementById('upd')).display!=='none'),'update banner hidden on Home');
await p.context().close();

// 3. challenge invite: kept on Home after tapping the dock and after reopening; gone once played
p=await page();const hs=await p.evaluate(()=>ALL.slice(0,3).map(r=>hk(r.key)).join('.'));await p.context().close();
p=await page({q:'?ch=k9.'+hs+'&s=2&n=Omar',vp:{width:320,height:568}});
ok(await p.evaluate(()=>{const b=document.querySelector('[data-cplay]').getBoundingClientRect(),h=document.querySelector('#dock [data-nav="home"]').getBoundingClientRect();return b.bottom<=h.top}),'Play button under the dock on a 320px phone');
await p.evaluate(()=>document.querySelector('[data-nav="st"]').click());await p.evaluate(()=>document.querySelector('[data-nav="home"]').click());
ok(await p.evaluate(()=>/Omar challenged you/.test((document.querySelector('[data-cr]')||{}).textContent||'')),'no challenge button on Home after leaving the invite');
await p.reload();await p.waitForTimeout(300);ok(await p.evaluate(()=>!!document.querySelector('[data-cr]')),'challenge button gone after reopening');
await p.evaluate(()=>document.querySelector('[data-cr]').click());ok(await p.evaluate(()=>!!document.querySelector('[data-cplay]')),'challenge button does not open the invite');
await p.evaluate(()=>document.querySelector('[data-cplay]').click());await p.waitForTimeout(200);await p.evaluate(()=>{GRP=null;menu()});
ok(await p.evaluate(()=>!document.querySelector('[data-cr]')&&!JSON.parse(localStorage.getItem('elim_chpend'))),'challenge button still there after playing');
await p.context().close();

// 4. hot potato never repeats a round until the group runs out; 8 names stay in one row
p=await page({ls:{elim_region:'"eg"',elim_players:JSON.stringify(['Ahmed','Sara','Omar','Nour','Mona','Karim','Youssef','Hana'])},vp:{width:375,height:667}});
s=await p.evaluate(()=>{const o={};for(const id of ['animals','eats','brands','geo']){eRecent=[];const n=subRounds(id).length,seen=new Set();for(let k=0;k<n;k++)seen.add(endlessRound(id).r);o[id]=[n,seen.size]}return o});
for(const k in s)ok(s[k][0]===s[k][1],'hot potato repeated a round in '+k+': '+s[k]);
await p.evaluate(()=>hotStart('animals'));await p.waitForTimeout(300);
s=await p.evaluate(()=>({rows:Math.round(document.getElementById('pl').getBoundingClientRect().height),grid:Math.round(document.querySelector('.cell[data-i="5"]').getBoundingClientRect().bottom),H:innerHeight,sw:document.documentElement.scrollWidth}));
ok(s.rows<50&&s.sw<=375,'8 player names take more than one row: '+JSON.stringify(s));
await p.context().close();

// 5. seen-rounds deck counts only the region you're in
p=await page();
s=await p.evaluate(()=>{const id='singers';SEEN={};REG='w';const w=subOrder(id);for(let i=0;i<5;i++)markSeen(w[i]);REG='eg';const n=subRounds(id).length,got=new Set();for(let k=0;k<n;k++){const r=subOrder(id)[0];got.add(r.key);markSeen(r)}REG='w';const left=subOrder(id).slice(0,subRounds(id).length-5).every(r=>w.slice(0,5).indexOf(r)<0);return{n,uniq:got.size,left}});
ok(s.n===s.uniq,'Egypt deck repeated early after World rounds: '+JSON.stringify(s));ok(s.left,'World rounds already seen lost after the Egypt deck reset');
// 6. same-name cards never share a mixed board or a duel pair
s=await p.evaluate(()=>{let bad=0;for(const lv of [1,2,3])for(let k=0;k<300;k++){const m=mix(lv);if(m&&dupName(m.items))bad++}return bad});ok(s===0,'mixed board with two cards of the same name');
ok(await p.evaluate(()=>{const a={d:["Mohamed Sobhi",1948,"محمد صبحي"]},x={d:["Mohamed Sobhy",1999,"محمد صبحي"]};dSrc={g:"p",b:"min"};return!dOk(x,a,dSrc)}),'duel can pair two cards with the same name');
await p.context().close();

// 7. Daily: setting the clock back doesn't reopen it
p=await page();await p.clock.setFixedTime(new Date('2026-10-22T12:00:00Z'));await p.reload();await p.waitForTimeout(200);
await p.evaluate(()=>dailyGo());await win(p);await p.waitForTimeout(700);await p.evaluate(()=>menu());const c1=await p.evaluate(()=>coins);
await p.clock.setFixedTime(new Date('2026-10-20T12:00:00Z'));await p.reload();await p.waitForTimeout(200);
s=await p.evaluate(()=>({played:dyPlayed(),c:coins}));await p.evaluate(()=>dailyGo());ok(s.played&&await p.evaluate(()=>mode!=="daily"),'Daily reopened after setting the clock back');
await p.context().close();

// 8. undo price: stays after reopening with no streak; resets if the app closed on the lost popup
p=await page({ls:{elim_coins:'1000'}});
await p.evaluate(()=>{prog={};var id='players';SUB=subInfo(id);PL=subOrder(id);ri=0;runOk=0;mode='cat';newRound()});
await p.evaluate(()=>document.querySelector('.cell[data-i="'+corr+'"]').click());await p.waitForTimeout(600);await p.evaluate(()=>undo());await win(p);await p.waitForTimeout(700);
await p.reload();await p.waitForTimeout(200);ok(await p.evaluate(()=>uCost())===60,'undo price went back to 30 after reopening');
await p.evaluate(()=>{var id='players';SUB=subInfo(id);PL=subOrder(id);ri=0;runOk=0;mode='cat';newRound()});await p.evaluate(()=>document.querySelector('.cell[data-i="'+corr+'"]').click());await p.waitForTimeout(300);
await p.reload();await p.waitForTimeout(200);ok(await p.evaluate(()=>uCost())===30,'closing on the lost popup kept the higher undo price');
await p.context().close();

// 9. broken saves load as empty and progress saves again; full storage warns once
p=await page({ls:{elim_prog:'[]',elim_endless:'{"all":"abc"}',elim_img:'"x"',elim_daily:'"x"',elim_chdone:'[]'}});
await p.evaluate(()=>{var id='players';SUB=subInfo(id);PL=subOrder(id);ri=0;runOk=0;mode='cat';newRound()});await win(p);await p.waitForTimeout(700);
ok(await p.evaluate(()=>Object.keys(JSON.parse(localStorage.getItem('elim_prog'))).length===1&&eBest.all===0),'broken save did not recover');
const alerts=[];p.on('dialog',d=>{alerts.push(d.message());d.dismiss()});
await p.evaluate(()=>{const set=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(k!=='x')throw new DOMException('full','QuotaExceededError')}});
await p.evaluate(()=>{save();save()});await p.waitForTimeout(200);ok(alerts.length===1&&/out of space/.test(alerts[0]),'full storage warning wrong: '+JSON.stringify(alerts));
await p.context().close();

// 10. a million coins fit the top bar; 3 popup buttons on 320px wrap instead of squeezing
p=await page({ls:{elim_coins:'12345678',elim_lang:'"ar"'},vp:{width:320,height:568}});
s=await p.evaluate(()=>({txt:document.getElementById('coins').textContent,sw:document.documentElement.scrollWidth}));ok(s.txt==='12.3M'&&s.sw<=320,'big coins overflow: '+JSON.stringify(s));
await p.evaluate(()=>{mode='end';eScore=0;newRound()});await p.evaluate(()=>{for(let i=0,k=0;k<2;i++)if(i!==corr){document.querySelector('.cell[data-i="'+i+'"]').click();k++}document.querySelector('.cell[data-i="'+corr+'"]').click()});await p.waitForTimeout(900);
s=await p.evaluate(()=>[...document.querySelectorAll('#sb .btn')].map(b=>Math.round(b.getBoundingClientRect().height)));ok(s.length===3&&Math.max(...s)<70,'narrow popup buttons too tall: '+s);
await p.context().close();

ok(!errs.length,'page errors: '+errs.join(' | '));
await b.close();finish('edge cases',bad)})();
