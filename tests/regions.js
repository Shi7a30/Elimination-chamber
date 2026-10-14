const {chromium}=require('playwright');
const {PAGE,shot,PNG,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const pg=await (await b.newContext({viewport:{width:390,height:844}})).newPage();
await pg.route('https://**',r=>r.abort());await pg.goto(PAGE);
const seen={},problems=[];for(const r of ['eg','w','all']){await pg.click(`[data-reg="${r}"]`);await pg.waitForTimeout(300);
 const t=await pg.evaluate(()=>[...document.querySelectorAll('.cat.sc')].filter(e=>e.offsetParent).map(e=>e.textContent.trim().slice(0,22)).join(','));
 console.log(r,':',t);seen[r]=t}
if(/FOOD|NOSTALGI/.test(seen.w))problems.push('Egypt-only groups show in World');if(!/FOOD/.test(seen.eg)||!/FOOD/.test(seen.all))problems.push('Food & Drinks missing from Egypt or Both');
await b.close();finish('regions',problems)})();
