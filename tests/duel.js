const {chromium,devices}=require('playwright');
const {PAGE,shot,PNG,finish}=require('./lib');
(async()=>{const b=await chromium.launch();
const ctx=await b.newContext({...devices['iPhone 13'],defaultBrowserType:undefined});const p=await ctx.newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.route('https://**',r=>r.abort());
await p.goto(PAGE);
console.log('menu label',await p.textContent('.cat[data-c="d"]'));
await p.tap('.cat[data-c="d"]');await p.waitForTimeout(200);await p.tap('[data-dc=""]');await p.waitForTimeout(400);
const r=await p.evaluate(()=>{const bad=[],runs=[];for(const reg of["all","eg","w"]){REG=reg;for(let run=0;run<300;run++){dSrc=null;duelNext();let len=0,src=dSrc,champWins=0,rounds=0;
 for(let k=0;k<400;k++){const v=items.map(x=>x.d[1]);
  if(items.length!==2||v[0]===v[1]||items[0].d[0]===items[1].d[0])bad.push("pair");
  const c=cur.best==="min"?(v[0]<v[1]?0:1):(v[0]>v[1]?0:1);if(c!==corr)bad.push("corr");
  if(reg!=="all"&&items.some(x=>x.r.m!==reg))bad.push("region");
  const w=items[corr],prevSlot=corr;duelNext(w);rounds++;
  if(dSwap){runs.push(len);break}
  if(dSrc!==src)bad.push("src changed");
  if(items[prevSlot]!==w)bad.push("kept card moved");
  if(corr===prevSlot)champWins++;len++}}}
 REG="all";dSrc=null;duelNext();runs.sort((a,b)=>a-b);return{bad:[...new Set(bad)],n:runs.length,min:runs[0],med:runs[runs.length>>1],max:runs[runs.length-1]}});
console.log(r);
const q0=await p.textContent('#q2');let ok=true;
for(let k=0;k<4;k++){const c=await p.evaluate(()=>corr);const nm=await p.evaluate(()=>items[corr].d[0]);await p.tap(`.cell[data-i="${c}"]`);await p.waitForTimeout(1700);
 const st=await p.evaluate(()=>[items.map(x=>x.d[0]),dSwap]);if(!st[1]&&!st[0].includes(nm))ok=false;if(k==0)await p.screenshot({path:shot('e1.png')});}
console.log('question',q0,'->',await p.textContent('#q2'),'kept ok',ok,'score',await p.evaluate(()=>dScore));
const w=await p.evaluate(()=>1-corr);await p.tap(`.cell[data-i="${w}"]`);await p.waitForTimeout(1200);
console.log('sheet',await p.textContent('#sheet'));
await p.tap('#sb .btn.y');await p.waitForTimeout(400);console.log('after new run',await p.evaluate(()=>[dScore,over,mode]));
await p.tap('#home');await p.tap('#home');await p.tap('#lang');await p.waitForTimeout(200);console.log('ar label',await p.textContent('.cat[data-c="d"]'));
await p.tap('.cat[data-c="d"]');await p.tap('[data-dc=""]');await p.waitForTimeout(400);await p.screenshot({path:shot('e2.png')});
await p.evaluate(()=>{dSrc.b=dSrc.b;const k=items[0];dUsed=Object.fromEntries(dList(dSrc).map(x=>[dLK(dSrc)+"|"+x.d[0],1]));dList(dSrc).forEach(x=>dPairs[dPK(dLK(dSrc),x.d[0],k.d[0])]=1);corr=0;duelNext(k)});await p.waitForTimeout(200);
console.log('swap header',await p.textContent('#rn'));
const sw=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);console.log('overflow',sw,'errs',errs);
await b.close();finish('duel',[...r.bad,!ok&&'the kept card did not stay',sw&&'duel screen scrolls sideways',...errs])})();
