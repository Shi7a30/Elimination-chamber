// Category rounds come in random order, and a round doesn't come back until every round in that category has been shown (even across visits and reloads).
const {chromium}=require('playwright');
const {PAGE,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const pg=await (await b.newContext({viewport:{width:390,height:844}})).newPage();
await pg.route('https://**',r=>r.abort());await pg.goto(PAGE);
const problems=[];
const id=await pg.evaluate(()=>{const ids=[...new Set(rounds().map(r=>r.s))];return ids.find(i=>subRounds(i).length>=20)});
const n=await pg.evaluate(id=>subRounds(id).length,id);
// open the category and play k rounds (skipping), returning the keys shown
const play=k=>pg.evaluate(([id,k])=>{GRP=null;mode="cat";SUB=subInfo(id);PL=subOrder(id);ri=0;runOk=0;newRound();const got=[cur.r.key];
 for(let i=1;i<k;i++){nxt();got.push(cur.r.key)}menu();return got},[id,k]);
const a=await play(n),b2=await play(n);
if(new Set(a).size!==n)problems.push('a full run repeated a round');
if(a.join()===b2.join())problems.push('two runs came in the same order');
const def=await pg.evaluate(id=>subRounds(id).map(r=>r.key).join(),id);
if(a.join()===def&&b2.join()===def)problems.push('order matches the built-in order');
// fresh bag: short visits, with a reload in the middle, never repeat until all n have been shown
await pg.evaluate(()=>localStorage.removeItem('elim_seen'));await pg.reload();
const seen=[];seen.push(...await play(5));seen.push(...await play(5));await pg.reload();seen.push(...await play(5));
while(seen.length<n)seen.push(...(await play(Math.min(5,n-seen.length))));
if(new Set(seen).size!==n)problems.push('a round repeated before the category was used up ('+(n-new Set(seen).size)+' repeats)');
// once used up, the next visit starts a new shuffled cycle with every round available
const next=await play(n);if(new Set(next).size!==n)problems.push('new cycle repeated a round');
console.log('category',id,'rounds',n);
await b.close();finish('random-order',problems)})();
