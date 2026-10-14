const {chromium}=require('playwright');
const {PAGE,shot,PNG,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.route('https://**',r=>r.abort());await p.goto(PAGE);
const r=await p.evaluate(()=>{const out={};const subs=[null];GROUPS.forEach(g=>g.s.forEach(x=>subs.push(x[0])));
 window.render=function(){};window.loadPhotos=function(){};
 for(const reg of ["all","eg","w"])for(const sc of subs){REG=reg;DCAT=sc;mode="duel";if(!dRounds().length)continue;
  let rep=0,wrong=0,resetAt=[],qRepeatAt=[],runs=0;
  for(let run=0;run<15;run++){dSrc=null;duelNext();const seen={},left={};let prev=null,reset=false;runs++;
   for(let t=0;t<400;t++){const lk=dLK(dSrc),pk=dPK(lk,items[0].d[0],items[1].d[0]),sk=lk+"|"+dSrc.b;
    if(!Object.keys(dPairs).length||(Object.keys(dPairs).length===1&&t>0&&Object.keys(seen).length>1)){} 
    if(seen[pk]&&!reset){rep++}
    seen[pk]=1;
    if(sk!==prev){if(left[sk]&&!qRepeatAt[run])qRepeatAt[run]=t;if(prev)left[prev]=1;prev=sk}
    const v=items.map(x=>x.d[1]);if((dSrc.b==="min")!==(v[corr]<v[1-corr]))wrong++;
    const before=Object.keys(dPairs).length;duelNext(items[corr]);
    if(Object.keys(dPairs).length===1&&before>1){reset=true;resetAt.push(t)}}}
  const q=qRepeatAt.filter(x=>x),med=a=>a.length?a.sort((x,y)=>x-y)[a.length>>1]:"-";
  out[reg+"|"+(sc||"*")]={rep,wrong,qRepeatMed:med(q),resets:resetAt.length,resetMed:med(resetAt)}}
 return out});
console.table(r);await b.close();const problems=[...errs];for(const k in r){if(r[k].rep)problems.push(k+': '+r[k].rep+' repeated pairs');if(r[k].wrong)problems.push(k+': '+r[k].wrong+' wrong answers')}finish('duel no repeats',problems)})();
