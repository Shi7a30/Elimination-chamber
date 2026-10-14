const {chromium,devices}=require('playwright');
const {PAGE,shot,PNG,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const problems=[];
for(const d of ['iPhone 13','Pixel 7','iPhone SE']){const ctx=await b.newContext({...devices[d],defaultBrowserType:undefined});const p=await ctx.newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.route('https://**',r=>r.abort());
await p.goto(PAGE);
const cats=await p.$$eval('.cat',e=>e.length);const hw=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);await p.tap('.cat[data-g="1"]');await p.waitForTimeout(200);const gw=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);await p.screenshot({path:'g_'+d.replace(/ /g,'')+'.png'});await p.tap('.cat.sc[data-s]');await p.waitForTimeout(300);
const tiles=await p.$$eval('.cell',e=>e.length);await p.tap('.cell[data-i="0"]');await p.waitForTimeout(700);
const sw=await p.evaluate(()=>document.documentElement.scrollWidth),w=await p.evaluate(()=>innerWidth);
await p.screenshot({path:'m_'+d.replace(/ /g,'')+'.png'});
const o=await p.evaluate(()=>out.length);console.log(d,{cats,tiles,out:o,overflow:sw>w,homeOver:hw,groupOver:gw,errs});
problems.push(...errs.map(e=>d+': '+e),sw>w&&d+': game screen scrolls sideways',hw&&d+': home scrolls sideways',gw&&d+': group page scrolls sideways',tiles!==9&&d+': '+tiles+' tiles',o!==1&&d+': tapping a tile did not eliminate it');await ctx.close()}
// JS disabled: fallback message shows
const c2=await b.newContext({javaScriptEnabled:false});const p2=await c2.newPage();await p2.goto(PAGE);const nojs=(await p2.textContent('#menu'));console.log('nojs:',nojs.slice(0,60));if(!/viewer|JavaScript|Loading/.test(nojs))problems.push('no message when JavaScript is off');
await b.close();finish('mobile layout',problems)})();
