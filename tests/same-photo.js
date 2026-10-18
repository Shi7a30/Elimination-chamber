const {chromium}=require('playwright');
const {PAGE,shot,PNG,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(PAGE);await p.waitForTimeout(1500);
const r=await p.evaluate(()=>{let bad=0,n=0;REG="all";
 for(let i=0;i<400;i++){const m=mix();if(m){n++;if(dupPhoto(m.items))bad++}}
 // force a pool with known shared photos: Nilesat 101 / Nilesat 102 are both in the y pool and use the same picture
 const P=pool("y"),a=P.find(x=>x.d[0]==="Nilesat 101"),o=P.find(x=>x.d[0]==="Nilesat 102");
 return {n,bad,same:samePhoto(a,o),ok:dOk(o,a,{g:"y"}),hasPH:Object.keys(PH).length}});
console.log(r);await b.close();finish('same photo guard',[...errs,r.bad&&r.bad+' mixed rounds had two cards with the same photo',!r.same&&'the test pair no longer shares a photo; pick another pair',r.same&&r.ok&&'a duel can pair two cards with the same photo'])})();
