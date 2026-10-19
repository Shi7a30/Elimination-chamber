// Daily round + new home layout: same round for everyone each day, one try a day, its own streak and best,
// the dock, and the top bar keeping coins on the left and sound/language on the right in both languages.
const {chromium,devices}=require('playwright');
const {PAGE,shot,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const P=[];const ok=(c,m)=>{if(!c)P.push(m)};
const open=async(l,store)=>{const c=await b.newContext({...devices['iPhone 13']});const p=await c.newPage();p.errs=[];p.on('pageerror',e=>p.errs.push(e.message));
 await p.route('https://**',r=>r.abort());await p.addInitScript(([l,s])=>{if(!sessionStorage.getItem('init')){sessionStorage.setItem('init',1);localStorage.setItem('elim_lang',JSON.stringify(l));if(s)localStorage.setItem('elim_daily',JSON.stringify(s))}},[l,store||null]);
 await p.goto(PAGE);await p.waitForTimeout(400);p.ctx=c;return p};
const st=p=>p.evaluate(()=>({mode,DY:JSON.parse(JSON.stringify(DY)),coins,over,scr:document.body.dataset.scr,card:(document.querySelector('.dcard')||{}).textContent||'',
 dock:getComputedStyle(document.getElementById('dock')).display,on:(document.querySelector('#dock .on')||{}).dataset?.nav}));

// two players on the same day get the same round with the cards in the same order
const a=await open('en'),c2=await open('ar');
ok(/Daily round/.test((await st(a)).card),'daily card missing on Home');
await a.tap('.dcard');await c2.tap('.dcard');
const ia=await a.evaluate(()=>[cur.r.key,items.map(x=>x.d[0])]),ib=await c2.evaluate(()=>[cur.r.key,items.map(x=>x.d[0])]);
ok(JSON.stringify(ia)===JSON.stringify(ib),'two players got different daily rounds or card orders');
let s=await st(a);ok(s.mode==='daily'&&s.dock==='none','daily round did not start, or the dock shows in the game');
ok(await a.evaluate(()=>getComputedStyle(document.getElementById('undo')).display==='none'),'Undo shows in the daily round');
// win it: coins +10, streak 1, the card turns into "Done for today" with one square per tap and a Share button
const c0=s.coins;await a.evaluate(()=>{for(let i=0;i<items.length;i++)if(i!==corr)document.querySelector('.cell[data-i="'+i+'"]').click()});await a.waitForTimeout(900);
s=await st(a);ok(s.over==='win'&&s.coins===c0+10&&s.DY.s===1&&s.DY.b===1&&s.DY.w,'win not recorded: '+JSON.stringify(s.DY));
ok(await a.evaluate(()=>/Share/.test(document.getElementById('sb').textContent)),'no Share button after the daily round');
await a.evaluate(()=>menu());await a.waitForTimeout(300);s=await st(a);
ok(/Done for today/.test(s.card)&&await a.$('.dcard [data-dshare]'),'card did not change to Done for today');
ok(await a.$$eval('.dcard .dg i',e=>e.length)===s.DY.r.length&&s.DY.r.length>1,'result squares wrong');
await a.screenshot({path:shot('daily_done.png')});
// one try a day: tapping the done card or reloading doesn't start it again
await a.tap('.dcard');await a.waitForTimeout(200);ok((await st(a)).scr==='home','done card started a new round');
await a.reload();await a.waitForTimeout(400);ok(/Done for today/.test((await st(a)).card),'done state lost after reload');

// Arabic: wording, lose resets the streak but keeps the best
const d=await c2.evaluate(()=>dayNo());
await c2.evaluate(()=>menu());const ar=await open('ar',{d:d-1,done:true,w:true,s:3,lw:d-1,b:5,r:[1,1]});
s=await st(ar);ok(/سؤال اليوم/.test(s.card)&&/هو هو/.test(s.card),'Arabic daily card wording');
ok(await ar.evaluate(()=>[...document.querySelectorAll('.dcard .chip')].map(e=>e.textContent).join(','))==='3,5','streak/best chips should show 3,5');
await ar.tap('.dcard');await ar.evaluate(()=>document.querySelector('.cell[data-i="'+corr+'"]').click());await ar.waitForTimeout(700);
s=await st(ar);ok(s.over==='lose'&&s.DY.s===0&&s.DY.b===5,'lose should reset streak and keep best: '+JSON.stringify(s.DY));
await ar.evaluate(()=>menu());ok(/جاوبت النهارده/.test((await st(ar)).card),'Arabic done text');await ar.screenshot({path:shot('daily_ar.png')});
// a missed day resets the streak shown on the card
const old=await open('en',{d:d-3,done:true,w:true,s:4,lw:d-3,b:4,r:[1]});
ok(await old.evaluate(()=>document.querySelector('.dcard .chip').textContent)==='0','streak should be 0 after a missed day');
// leaving midway asks first, and counts as played
await old.tap('.dcard');await old.evaluate(()=>{const i=corr?0:1;document.querySelector('.cell[data-i="'+i+'"]').click()});await old.tap('#home');await old.waitForTimeout(200);
ok(await old.evaluate(()=>/Leave/.test(document.getElementById('st').textContent)),'no leave question in the daily round');
await old.evaluate(()=>document.querySelector('#sb .btn:not(.y)').click());await old.waitForTimeout(200);
s=await st(old);ok(/Done for today/.test(s.card)&&s.DY.s===0,'leaving midway should count as played');

// the daily order never repeats a round until every round has had its day
ok(await a.evaluate(()=>{const k=new Set();for(let i=1;i<=ALL.length;i++)k.add(dailyRound(i).key);return k.size===ALL.length&&dailyRound(1)===dailyRound(ALL.length+1)}),'daily rounds repeat too early');
// the schedule is written down in daily.js: every round has a day (run node tools/daily_schedule.js after adding rounds), and day 1 never changes
ok(await a.evaluate(()=>ALL.filter(r=>DAILY.indexOf(hk(r.key))<0).map(r=>r.key)).then(m=>m.length===0||console.log('not in daily.js:',m)||false),'rounds missing from daily.js: run node tools/daily_schedule.js');
ok(await a.evaluate(()=>/EUROPA LEAGUE/.test(dailyRound(1).key)),'day 1 changed: '+await a.evaluate(()=>dailyRound(1).key));

// dock: highlights the page, works in both languages
await a.tap('[data-nav="cats"]');ok((await st(a)).on==='cats','dock highlight on Categories');
await a.tap('[data-nav="home"]');ok((await st(a)).on==='home'&&(await st(a)).scr==='home','dock Home');
// top bar: coins on the left, sound/language on the right, in English and Arabic
for(const p of [a,ar]){const r=await p.evaluate(()=>{const c=document.getElementById('cpill').getBoundingClientRect(),t=document.querySelector('.tools').getBoundingClientRect(),w=document.getElementById('claw').getBoundingClientRect();
 return{order:c.right<w.left&&w.right<t.left,inside:t.right<=innerWidth}});ok(r.order&&r.inside,'top bar order wrong: '+JSON.stringify(r))}
const se=await b.newContext({...devices['iPhone SE']});const q=await se.newPage();await q.route('https://**',r=>r.abort());await q.goto(PAGE);await q.waitForTimeout(300);
ok(await q.evaluate(()=>{const c=document.getElementById('claw').getBoundingClientRect(),t=document.querySelector('.tools').getBoundingClientRect(),k=document.getElementById('cpill').getBoundingClientRect();return c.right<=t.left+2&&k.right<=c.left+2}),'small phone: claw overlaps the buttons');
for(const p of [a,c2,ar,old])ok(!p.errs.length,'page errors: '+p.errs.join('; '));
await b.close();finish('daily round',P)})();
