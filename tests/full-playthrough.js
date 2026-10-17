const {chromium}=require('playwright');
const {PAGE,shot,PNG,finish}=require('./lib');
const fail=[];const ok=(c,m)=>{if(!c){fail.push(m);console.log('FAIL',m)}};
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:375,height:740}});
const pg=await ctx.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()!=='log')errs.push(m.type()+': '+m.text())});
// Mock Wikipedia: titles query resolves some, marks others missing/disambig so search fallback is exercised.
let calls={titles:0,search:0};
await pg.route('https://en.wikipedia.org/**',async r=>{const u=new URL(r.request().url());const p=u.searchParams;
 const hdr={'access-control-allow-origin':'*','content-type':'application/json'};
 if(p.get('titles')){calls.titles++;const ts=p.get('titles').split('|');const pages=ts.map((t,i)=>i%3===0?{title:t,missing:true}:i%3===1?{title:t,pageprops:{disambiguation:''},thumbnail:{source:'https://upload.wikimedia.org/x.png'}}:{title:t,thumbnail:{source:'https://upload.wikimedia.org/'+encodeURIComponent(t)+'.png'}});
  return r.fulfill({headers:hdr,body:JSON.stringify({query:{pages}})})}
 calls.search++;return r.fulfill({headers:hdr,body:JSON.stringify({query:{pages:[{title:'S',thumbnail:{source:'https://upload.wikimedia.org/s.png'}}]}})})});
await pg.route('https://upload.wikimedia.org/**',r=>r.fulfill({body:PNG,contentType:'image/png'}));
await pg.route('https://fonts.**',r=>r.abort());
await pg.goto(PAGE);
const S=()=>pg.evaluate(()=>({coins,streak,best,over,ri,runOk,L}));
const ncat=await pg.evaluate(()=>CATS.length);
// Data sanity: each answer computed independently
const data=await pg.evaluate(()=>CATS.map(c=>({n:c.n,a:c.a,r:c.r.map(r=>({q:r.q,qa:r.qa,best:r.best,items:r.items}))})));
let rounds=0;for(const c of data){ok(c.a,'arabic cat name '+c.n);for(const r of c.r){rounds++;ok(r.items.length===9,'9 items '+r.q[1]);ok(r.qa&&r.qa.length===3,'ar question '+r.q[1]);
 const vals=r.items.map(i=>i[1]);const best=r.best==='min'?Math.min(...vals):Math.max(...vals);ok(vals.filter(v=>v===best).length===1,'unique answer '+r.q[1]);
 ok(new Set(r.items.map(i=>i[0])).size===9,'unique names '+r.q[1])}}
console.log('categories',ncat,'rounds',rounds);
// Play every subcategory (region BOTH) in both languages: win odd rounds, lose+undo+win even
let roundNo=0;const SG=await pg.evaluate(()=>{const o=[];GROUPS.forEach((g,i)=>g.s.forEach(s=>{if(ALL.some(r=>r.s===s[0]))o.push([i,s[0]])}));return o});const subs=SG.map(x=>x[1]);
// subcategories live on group pages, and groups on the Categories page: get there, then open the sub's group
const openSub=async c=>{if(!await pg.$(`.cat.sc[data-s="${subs[c]}"]`)){if(await pg.$('[data-back]')&&!await pg.$('.cat[data-g]'))await pg.click('[data-back]');if(!await pg.$('.cat[data-g]'))await pg.click('.cat[data-c="cats"]');await pg.click(`.cat[data-g="${SG[c][0]}"]`)}await pg.click(`.cat.sc[data-s="${subs[c]}"]`)};console.log('subs',subs.length);
for(let c=0;c<subs.length;c++){
 const lang=c%2?'ar':'en';const cur=await pg.evaluate(()=>L);if(cur!==lang)await pg.click('#lang');
 await openSub(c);
 const nr=await pg.evaluate(()=>PL.length);
 for(let r=0;r<nr;r++){roundNo++;const st0=await S();ok(st0.ri===r,'round index');
  const corr=await pg.evaluate(()=>corr);
  const q2=await pg.textContent('#q2');ok(q2===(await pg.evaluate(l=>(l==='ar'?cur.qa:cur.q)[1],lang)),'question text '+q2);
  if(roundNo%2===0&&st0.coins>=30){ // lose then undo
   await pg.click(`.cell[data-i="${corr}"]`);let s=await S();ok(s.over==='lose'&&s.streak===0,'lose state');
   await pg.waitForTimeout(500);ok(await pg.isVisible('#sheet.show'),'lose sheet');
   const shown=await pg.$$eval('.cell.flip',e=>e.length);ok(shown===1,'only answer flipped on loss, got '+shown);
   await pg.click('#sb .btn:not(.y)');s=await S();ok(s.over===false&&s.streak===st0.streak&&s.coins===st0.coins-30,'undo restores '+JSON.stringify(s));}
  const before=await S();
  for(let i=0;i<9;i++){if(i===corr)continue;await pg.click(`.cell[data-i="${i}"]`)}
  const s=await S();ok(s.over==='win','win '+subs[c]+' r'+r);
  ok(s.coins===before.coins+10+Math.min(before.streak,5)*2,'coin math');ok(s.streak===before.streak+1,'streak++');
  const labs=await pg.$$eval('.back',e=>e.map(x=>x.textContent));ok(labs.every(l=>!/undefined|NaN|null/.test(l)&&l.length>2),'backs ok '+labs.join(','));
  ok(await pg.$$eval('.back small',e=>e.every(x=>x.textContent.length)),'value label '+subs[c]);
  ok(await pg.$$eval('.cell.flip',e=>e.length)===9,'all flipped after win');
  if(lang==='ar')ok(labs.every(l=>!/[0-9]/.test(l)),'arabic digits '+labs.join(','));
  if(roundNo===3){await pg.click('.cell.out');ok(await pg.$$eval('.cell.peek',e=>e.length)===1,'peek flips back');await pg.click('.cell.peek');ok(await pg.$$eval('.cell.flip',e=>e.length)===9,'unpeek')}
  await pg.waitForTimeout(650);await pg.click('#sb .btn.y');
 }
 await pg.waitForTimeout(100);const txt=await pg.textContent('#sheet');ok(txt.length>5,'summary');
 if(c===1){await pg.click('#lang');ok((await pg.textContent('#sheet'))!==txt&&await pg.isVisible('#sb .btn'),'lang toggle on summary keeps the summary, translated');await pg.click('#lang');await pg.click('#sb .btn.y')}
 else if(c===2){await pg.click('#sb .btn:not(.y)');ok((await S()).ri===0,'replay');await pg.click('#home')} else await pg.click('#sb .btn.y');
}
ok(roundNo===rounds,'played every round: '+roundNo+'/'+rounds);
// regions
for(const [rg,exp] of [['eg',r=>r.m==='eg'],['w',r=>r.m==='w']]){while(await pg.$('[data-back]'))await pg.click('[data-back]');await pg.click(`[data-reg="${rg}"]`);
 await pg.click('.cat[data-c="cats"]');const ids=[];for(let gi=0;gi<SG[SG.length-1][0]+1;gi++){const gc=await pg.$(`.cat[data-g="${gi}"]`);if(!gc)continue;await gc.click();ids.push(...await pg.$$eval('.cat.sc',e=>e.map(x=>x.dataset.s)));await pg.click('[data-back]')}
 const okSubs=await pg.evaluate(([rg,ids])=>ids.every(id=>subRounds(id).length&&subRounds(id).every(r=>r.m===rg))&&ALL.filter(r=>r.m===rg).every(r=>ids.indexOf(r.s)>-1),[rg,ids]);
 ok(okSubs,'region '+rg+' subs '+ids.join(','));
 ok(await pg.evaluate(()=>{for(let k=0;k<500;k++){const m=endlessRound();const rs=m.r?[m.r]:m.items.map(x=>x.r);if(!rs.every(inReg))return false}return true}),'endless respects region '+rg);
 await pg.screenshot({path:shot('menu_'+rg+'.png'),fullPage:true})}
while(await pg.$('[data-back]'))await pg.click('[data-back]');await pg.click('[data-reg="all"]');
// skip resets streak
await openSub(0);let s1=await S();ok(s1.streak>0,'streak>0 before skip');await pg.click('#skip');ok((await S()).streak===0,'skip resets streak');
// photos: wait for mocked loading, check images in tiles
await pg.waitForTimeout(500);const imgs=await pg.$$eval('.tile img',e=>e.filter(i=>i.complete&&i.naturalWidth>0).length);ok(imgs===9,'images shown: '+imgs);ok(await pg.evaluate(()=>Object.keys(PH).length)>200,'built-in photos');
console.log('wiki calls',calls);
// user photo upload
await pg.click('#cam');ok(await pg.evaluate(()=>edit),'photo mode');
const [fc]=await Promise.all([pg.waitForEvent('filechooser'),pg.click('.cell[data-i="0"]')]);await fc.setFiles({name:'photo.png',mimeType:'image/png',buffer:PNG});await pg.waitForTimeout(300);
const nm0=await pg.evaluate(()=>items[0].d[0]);ok(await pg.evaluate(n=>!!IM[n],nm0),'user photo saved');await pg.click('#cam');
// rtl + screenshot
if((await S()).L!=='ar')await pg.click('#lang');ok(await pg.evaluate(()=>document.documentElement.dir)==='rtl','rtl');
await pg.screenshot({path:shot('game_ar.png')});await pg.click('#home');await pg.screenshot({path:shot('menu_ar.png'),fullPage:true});
// persistence
const pre=await S();await pg.reload();await pg.waitForTimeout(200);const post=await S();ok(pre.coins===post.coins&&pre.best===post.best&&post.L==='ar','persist '+JSON.stringify([pre,post]));
ok(await pg.evaluate(()=>Object.keys(prog).length)===rounds,'all rounds solved recorded');
// endless mode
ok(await pg.evaluate(()=>{for(let k=0;k<3000;k++){const m=mix();const v=m.items.map(x=>x.d[1]);const e=m.best==='min'?Math.min(...v):Math.max(...v);
 if(m.items.length!==9||v.filter(x=>x===e).length!==1||new Set(m.items.map(x=>x.d[0])).size!==9)return false}return true}),'mix rounds valid');
await pg.click('.cat[data-c="e"]');ok(await pg.evaluate(()=>mode)==='end','endless mode');let mixes=0;
await pg.evaluate(()=>{coins=500});
for(let k=0;k<25;k++){const st=await pg.evaluate(()=>({corr,e:eScore,mix:!cur.r,q:cur.q[1]}));if(st.mix)mixes++;ok(st.e===k,'score '+st.e+' vs '+k);
 ok(!(await pg.isVisible('#skip')),'no skip in endless');
 for(let i=0;i<9;i++){if(i===st.corr)continue;await pg.click(`.cell[data-i="${i}"]`)}ok(await pg.evaluate(()=>over)==='win','endless win');
 if(k===4){await pg.click('#lang');ok(await pg.textContent('#rn')!=='', 'lang in endless')}
 if(k===6)await pg.screenshot({path:shot('endless_win.png')});
 await pg.waitForTimeout(650);if(k===4){ok(await pg.isVisible('#skip'),'next shown after win');await pg.click('#skip')}else await pg.click('#sb .btn.y')}
console.log('mix rounds in 25:',mixes);ok(mixes>3&&mixes<22,'mix ratio');
ok(await pg.evaluate(()=>eBest.all)===25,'endless best');
let c0=await pg.evaluate(()=>corr);await pg.click(`.cell[data-i="${(c0+1)%9}"]`);await pg.click(`.cell[data-i="${c0}"]`);await pg.waitForTimeout(500);
await pg.screenshot({path:shot('endless_lose.png')});
ok(/25|٢٥/.test(await pg.textContent('#sp')),'run over shows score');
await pg.click('#sb .btn:not(.y)');ok(await pg.evaluate(()=>over===false&&eScore===25),'undo continues run');
await pg.click(`.cell[data-i="${c0}"]`);await pg.waitForTimeout(500);await pg.click('#sb .btn.y');ok(await pg.evaluate(()=>eScore===0&&over===false),'new run');
await pg.reload();await pg.waitForTimeout(200);ok(await pg.evaluate(()=>eBest.all)===25,'endless best saved');
// offline: wikipedia unreachable must not error
await pg.unroute('https://en.wikipedia.org/**');await pg.route('https://en.wikipedia.org/**',r=>r.abort());
await pg.evaluate(()=>{localStorage.removeItem('elim_wiki')});await pg.reload();await openSub(subs.indexOf('geo'));await pg.waitForTimeout(400);
await pg.click('#lang');await pg.screenshot({path:shot('game_en_offline.png')});
console.log('errors',errs.filter(e=>!/ERR_FAILED|net::|Failed to load resource/.test(e)));
await b.close();finish('full play-through',fail)})();
