const {chromium,devices}=require('playwright');
const {PAGE,shot,PNG,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['iPhone SE']});const p=await ctx.newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='warning'||m.type()==='error')errs.push(m.text())});await p.route('https://**',r=>r.abort());
await p.goto(PAGE);
await p.tap('.cat[data-c="d"]');await p.waitForTimeout(200);
const cards=await p.$$eval('[data-dc]',e=>e.map(x=>x.dataset.dc));console.log('duel page cards',cards.length,cards.join(','));
await p.screenshot({path:shot('dpage.png'),fullPage:true});
const over=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);console.log('overflow',over);const problems=[over&&'duel page scrolls sideways'];
// every subcategory, every region: 40 duel turns each, every pair from that subcategory, answer stays consistent
for(const reg of ['all','eg','w']){
 const res=await p.evaluate(reg=>{REG=reg;const out={};for(const g of GROUPS)for(const s of g.s){if(!subRounds(s[0]).length)continue;
  DCAT=s[0];mode='duel';dScore=0;dSrc=null;duelNext();let bad=0,turns=0;const allowed=new Set(subRounds(s[0]).flatMap(r=>r.items.map(i=>i[0])));
  for(let k=0;k<40;k++){turns++;if(!items.every(x=>allowed.has(x.d[0])&&x.r.s===s[0]&&inReg(x.r)))bad++;
   const c=corr,o=1-c;const v=[items[c].d[1],items[o].d[1]];if(dSrc.b==='min'?v[0]>=v[1]:v[0]<=v[1])bad++;
   duelNext(items[c])}
  out[s[0]]=bad;}return out},reg);
 console.log(reg,JSON.stringify(res));for(const k in res)if(res[k])problems.push(reg+' '+k+': '+res[k]+' bad turns');}
await p.evaluate(()=>{REG='all';DCAT=null;GRP=null;menu()});
// play via UI: open singers, win one, lose, check best saved per category and menu returns to duel page
await p.tap('.cat[data-c="d"]');await p.tap('[data-dc="singers"]');await p.waitForTimeout(300);
console.log('header',await p.textContent('#rn'));
let c=await p.evaluate(()=>corr);await p.tap(`.cell[data-i="${c}"]`);await p.waitForTimeout(1700);
c=await p.evaluate(()=>corr);await p.tap(`.cell[data-i="${1-c}"]`);await p.waitForTimeout(900);
console.log('best',JSON.stringify(await p.evaluate(()=>dBest)));
await p.click('#sb .btn:not(.y)');await p.waitForTimeout(200);
console.log('back on duel page',await p.$$eval('[data-dc]',e=>e.length)>0, await p.textContent('[data-dc="singers"]'));
await p.screenshot({path:shot('dpage2.png')});
await p.tap('[data-back]');console.log('home',await p.$$eval('[data-c]',e=>e.length));
await p.click('#lang');await p.tap('.cat[data-c="d"]');await p.screenshot({path:shot('dpage_ar.png'),fullPage:true});
await p.tap('[data-dc=""]');await p.waitForTimeout(200);console.log('ar header',await p.textContent('#rn'));
await b.close();finish('duel categories',[...problems,...errs])})();
