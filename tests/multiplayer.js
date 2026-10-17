// Multiplayer: hot potato (pass the phone) and challenge links (same rounds for a friend).
const {chromium,devices}=require('playwright');
const {PAGE,shot,finish}=require('./lib');
(async()=>{const b=await chromium.launch(),bad=[],errs=[];
const ctx=await b.newContext({...devices['iPhone SE'],defaultBrowserType:undefined});
const open=async url=>{const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));await p.route('https://**',r=>r.abort());
 await p.addInitScript(()=>{window.__shared=[];Object.defineProperty(navigator,'share',{value:o=>{window.__shared.push(o.text);return Promise.resolve()},configurable:true})});
 await p.goto(url);return p};
const wide=p=>p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);

// --- home shows the section in both languages
let p=await open(PAGE);
if(!/multiplayer/i.test(await p.textContent('#menu')))bad.push('no multiplayer heading');
await p.tap('#lang');if(!(await p.textContent('#menu')).includes('مع صحابك'))bad.push('no arabic multiplayer heading');await p.tap('#lang');

// --- hot potato: 3 players, names saved, turns rotate, the one who knocks out the answer is out, last one wins
await p.tap('.cat[data-c="mp"]');await p.tap('.cat[data-c="h"]');await p.tap('[data-padd]');
if(await p.locator('[data-pi]').count()!==3)bad.push('add player failed');
for(const [i,nm] of [['0','Shiha'],['1','Omar'],['2','Mona']])await p.fill(`[data-pi="${i}"]`,nm);
await p.screenshot({path:shot('hot-setup.png')});if(await wide(p))bad.push('hot page scrolls sideways');
await p.tap('[data-hc=""]');await p.waitForTimeout(300);
const names=[];let winner=null;
for(let step=0;step<200&&!winner;step++){
 const s=await p.evaluate(()=>({turn:hPl[hTurn].n,corr,out:out.slice(),n:items.length,over,now:document.querySelector('#pl .now')&&document.querySelector('#pl .now').textContent}));
 if(s.over){const t=await p.textContent('#st');if(/wins!/i.test(t)){winner=t;break}await p.tap('#sb .btn.y');await p.waitForTimeout(250);continue}
 if(s.now!==s.turn)bad.push('turn chip wrong');names.push(s.turn);
 // mostly safe picks, sometimes the answer
 const free=[...Array(s.n).keys()].filter(i=>i!==s.corr&&!s.out.includes(i));
 const pick=step%5===4||!free.length?s.corr:free[0];
 await p.tap(`.cell[data-i="${pick}"]`);await p.waitForTimeout(80);
 const after=await p.evaluate(()=>[hPl.filter(x=>x.out).map(x=>x.n),over]);
 if(pick===s.corr&&!after[0].includes(s.turn))bad.push('knocking out the answer did not put the player out');
 if(step===0)await p.screenshot({path:shot('hot-game.png')});
 await p.waitForTimeout(500)}
if(!winner)bad.push('hot potato never finished');
if(names[0]!=='Shiha'||names[1]!=='Omar'||names[2]!=='Mona')bad.push('turn order wrong: '+names.slice(0,3));
const st=await p.evaluate(()=>[alive().length,coins,streak,mode]);if(st[0]!==1)bad.push('more than one player left at the end');
console.log('hot potato',winner,'turns',names.length,'state',st);
await p.screenshot({path:shot('hot-win.png')});
await p.tap('#sb .btn:not(.y)');await p.waitForTimeout(200); // MENU goes back to the hot potato page
if(await p.inputValue('[data-pi="1"]')!=='Omar')bad.push('player names not saved');

// --- challenge: play 10 rounds, send the link
await p.tap('[data-back]');await p.tap('.cat[data-c="c"]');await p.fill('[data-me]','Shiha');
await p.tap('[data-cc=""]');await p.waitForTimeout(300);
const play=async(pg,winMask)=>{const keys=[];for(let r=0;r<10;r++){
 const s=await pg.evaluate(()=>({k:cur.r.key,order:items.map(x=>x.d[0]),corr,n:items.length,i:CH.i}));keys.push([s.k,s.order.join('|')]);
 if(s.i!==r)bad.push('challenge round index off');
 if(await pg.isVisible('#undo'))bad.push('undo shows in a challenge');
 if(winMask[r]){for(let i=0;i<s.n;i++)if(i!==s.corr){await pg.tap(`.cell[data-i="${i}"]`);await pg.waitForTimeout(40)}}
 else await pg.tap(`.cell[data-i="${s.corr}"]`);
 await pg.waitForTimeout(700);await pg.tap('#sb .btn.y');await pg.waitForTimeout(250)}return keys};
const k1=await play(p,[1,1,0,1,1,1,0,1,1,1]);
console.log('sender sheet',await p.textContent('#sheet'));
if(!/challenge done/i.test(await p.textContent('#st')))bad.push('no challenge done sheet');
await p.tap('#sb .btn.y');await p.waitForTimeout(200);
const shared=await p.evaluate(()=>window.__shared[0]||'');console.log('shared',shared);
const url=(shared.match(/\S+\?ch=\S+/)||[])[0];if(!url)bad.push('no link shared');
if(!shared.includes('8/10'))bad.push('shared text missing score');

// --- the friend opens the link: same rounds, same card order, result compares scores
const q=await open(url);
if(await q.evaluate(()=>location.search))bad.push('link not cleaned from address bar');
const inv=await q.textContent('#menu');console.log('invite',inv.replace(/\s+/g,' ').slice(0,160));
if(!inv.includes('Shiha challenged you')||!inv.includes('8/10'))bad.push('invite text wrong');
await q.screenshot({path:shot('chal-invite.png')});if(await wide(q))bad.push('invite scrolls sideways');
await q.fill('[data-me]','Omar');await q.tap('[data-cplay]');await q.waitForTimeout(300);
const k2=await play(q,[1,1,1,1,1,1,1,1,1,0]);
if(JSON.stringify(k1)!==JSON.stringify(k2))bad.push('friend got different rounds or card order');
const res=await q.textContent('#sheet');console.log('friend sheet',res);
if(!/you win/i.test(res)||!res.includes('Shiha 8/10'))bad.push('result sheet wrong');
await q.tap('#sb .btn.y');const back=await q.evaluate(()=>window.__shared[0]||'');
if(!back.includes('9/10')||!back.includes('n=Omar'))bad.push('send-back link wrong: '+back);

// --- a broken link says so; Arabic invite renders
const r=await open(PAGE+'?ch=zz.nope.nada&s=3&n=X');
if(!(await r.textContent('#menu')).includes("doesn't work"))bad.push('bad link not reported');
const a=await open(url);await a.tap('#lang');const ai=await a.textContent('#menu');
if(!ai.includes('بيتحداك'))bad.push('arabic invite missing');await a.screenshot({path:shot('chal-invite-ar.png')});
if(await wide(a))bad.push('arabic invite scrolls sideways');

await b.close();finish('multiplayer',[...bad,...errs])})();
