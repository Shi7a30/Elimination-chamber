const {chromium}=require('playwright');
const {PAGE,shot,PNG,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const errs=[],problems=[];
for(const [lang,w] of [['en',360],['ar',360],['en',412]]){
const p=await b.newPage({viewport:{width:w,height:800},deviceScaleFactor:2});p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='warning'||m.type()==='error')errs.push(m.text())});
await p.goto(PAGE);await p.waitForTimeout(500);
await p.evaluate(l=>{if(L!==l){L=l;}REG="all";mode="end";eScore=0;
 var m;for(var i=0;i<200;i++){m=mix();if(m&&m.items[0].r.g==="y")break}
 cur=m;$("menu").style.display="none";$("game").style.display="";start()},lang);
await p.waitForTimeout(600);
const ov=await p.evaluate(()=>{const g=document.getElementById('grid').getBoundingClientRect();return [document.documentElement.scrollWidth>innerWidth, Math.round(g.bottom), innerHeight, [...document.querySelectorAll('.lab .dt')].length]});
console.log(lang,w,ov);if(ov[0])problems.push(lang+' '+w+': scrolls sideways');if(ov[3]!==9)problems.push(lang+' '+w+': '+ov[3]+' year labels instead of 9');
await p.screenshot({path:shot(`dt_${lang}_${w}.png`),fullPage:true});
// duel with y pool
await p.evaluate(()=>{mode="duel";DCAT=null;duelNext()});await p.waitForTimeout(400);
for(let k=0;k<30;k++){const g=await p.evaluate(()=>dSrc&&dSrc.g);if(g==="y")break;await p.evaluate(()=>{duelNext()});}
console.log('duel src',await p.evaluate(()=>dSrc&&dSrc.g), await p.evaluate(()=>[...document.querySelectorAll('.lab')].map(e=>e.innerText.replace(/\n/g,' / '))));
await p.screenshot({path:shot(`dtd_${lang}_${w}.png`)});
// a normal (non-mix) round shows no tag
await p.evaluate(()=>{mode="end";cur=mk(ALL.find(r=>r.g==="y"));start()});await p.waitForTimeout(300);
const plain=await p.evaluate(()=>document.querySelectorAll('.lab .dt').length);console.log('plain round tags',plain);if(plain)problems.push(lang+' '+w+': a normal round shows year labels');
await p.close()}
await b.close();finish('mixed year labels',[...problems,...errs])})();
