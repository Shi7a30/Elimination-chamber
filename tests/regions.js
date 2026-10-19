const {chromium}=require('playwright');
const {PAGE,shot,PNG,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const pg=await (await b.newContext({viewport:{width:390,height:844}})).newPage();
await pg.route('https://**',r=>r.abort());await pg.goto(PAGE);
const seen={},problems=[];for(const r of ['eg','w','all']){await pg.click(`[data-reg="${r}"]`);await pg.click('[data-nav="cats"]');await pg.waitForTimeout(300);
 const t=await pg.evaluate(()=>[...document.querySelectorAll('.cat.sc')].filter(e=>e.offsetParent).map(e=>e.textContent.trim().slice(0,22)).join(','));
 console.log(r,':',t);seen[r]=t;await pg.click('[data-back]')}
// Nostalgia is Egypt-only; Food & Drinks has Egyptian and international rounds, so it shows everywhere
if(/NOSTALGI/i.test(seen.w))problems.push('Egypt-only group shows in World');if(![seen.eg,seen.w,seen.all].every(x=>/FOOD/i.test(x)))problems.push('Food & Drinks missing from a region');
await b.close();finish('regions',problems)})();
