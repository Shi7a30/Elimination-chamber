// Endless starts easy and gets harder as the score grows: rounds come from the level eLevel() picks for the score,
// generated mixes use only cards from rounds up to that level, and early mixes have a clear answer.
// Hot potato still plays every level. Category play is not touched (checked by random-order and full-playthrough).
const {chromium}=require('playwright');
const {PAGE,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const pg=await (await b.newContext({viewport:{width:390,height:844}})).newPage();
await pg.route('https://**',r=>r.abort());await pg.goto(PAGE);
const problems=[];
for(const reg of ['all','eg','w']){
 const r=await pg.evaluate(reg=>{REG=reg;eRecent=[];const out={};
  for(const s of [0,4,7,12,17,30]){const lv={1:0,2:0,3:0},bad=[];let mixes=0;
   for(let k=0;k<400;k++){const want=eLevel(s),m=endlessRound(null,want);
    if(m.r){lv[m.r.d]++;if(Math.abs(m.r.d-want)>0&&bad.length<3)bad.push('round level '+m.r.d+' for wanted '+want)}
    else{mixes++;const v=m.items.map(x=>x.d[1]).sort((x,y)=>m.best==='min'?x-y:y-x);
     if(m.items.some(x=>x.r.d>want))bad.push('mix used a level '+Math.max(...m.items.map(x=>x.r.d))+' card at level '+want);
     if(want===1&&v[1]-v[0]<6&&v[0]-v[1]<6)bad.push('easy mix answer too close: '+v[0]+' vs '+v[1])}}
   out[s]={lv,mixes,bad:bad.slice(0,3)}}
  return out},reg);
 for(const s in r){const {lv,mixes,bad}=r[s],n=lv[1]+lv[2]+lv[3];
  console.log(reg,'score',s,'easy',lv[1],'medium',lv[2],'hard',lv[3],'mixes',mixes);
  bad.forEach(x=>problems.push(reg+' score '+s+': '+x));
  if(s<5&&lv[1]!==n)problems.push(reg+' score '+s+': non-easy round at the start');
  if(s>=10&&s<15&&lv[2]!==n)problems.push(reg+' score '+s+': medium stretch had other levels');
  if(s>=20&&lv[3]<n*.6)problems.push(reg+' score '+s+': hard rounds too rare ('+lv[3]+'/'+n+')');
  if(mixes<100||mixes>300)problems.push(reg+' score '+s+': mixes '+mixes+'/400, expected about half')}}
// hot potato (one subcategory) still picks from every level
const hot=await pg.evaluate(()=>{REG='all';eRecent=[];const id='films',seen={};for(let k=0;k<200;k++)seen[endlessRound(id).r.d]=1;return Object.keys(seen).length});
if(hot<2)problems.push('hot potato only got one level');
// a real Endless run: score 0 shows an easy round, and a loss sends the run back to easy
const run=await pg.evaluate(()=>{REG='all';const lv=[];for(let k=0;k<30;k++){mode='end';eScore=0;newRound();if(cur.r)lv.push(cur.r.d)}return lv});
if(run.some(d=>d!==1))problems.push('new Endless run did not start easy: '+run.join(','));
await b.close();finish('endless-levels',problems)})();
