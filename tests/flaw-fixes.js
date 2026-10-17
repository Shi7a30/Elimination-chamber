// The six flaws fixed on 17 Oct 2026: popups survive a language switch, duel doesn't stall after photo mode,
// endless gives one second chance per run, replaying a solved round pays nothing, Home asks before ending a game,
// and the photos load after the game starts.
const {chromium,devices}=require('playwright');
const {PAGE,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['iPhone 13']});const p=await ctx.newPage();await p.route('https://**',r=>r.abort());
const errs=[],bad=[];p.on('pageerror',e=>errs.push(e.message));const ok=(c,m)=>{if(!c)bad.push(m)};
const st=()=>p.evaluate(()=>({sheet:document.getElementById('sheet').classList.contains('show'),title:document.getElementById('st').textContent,btns:[...document.querySelectorAll('#sb .btn')].map(x=>x.textContent),over,mode,inGame:inGame(),coins,streak,eScore}));
const tapAnswer=()=>p.evaluate(()=>document.querySelector('.cell[data-i="'+corr+'"]').click());
const winRound=()=>p.evaluate(()=>{for(let i=0;i<items.length;i++)if(i!==corr&&out.indexOf(i)<0)document.querySelector('.cell[data-i="'+i+'"]').click()});
const toMenu=async()=>{await p.evaluate(()=>{GRP=null;menu()})};
await p.goto(PAGE);await p.waitForTimeout(400);
// photos are deferred and still arrive
ok(await p.$$eval('script[src^="photos/"]',e=>e.every(s=>s.defer)&&e.length===4),'photo scripts are not deferred');
ok(await p.evaluate(()=>Object.keys(window.PH||{}).length>1000&&PHok),'photos did not load');
// 1. duel: lose, switch language -> the popup is still there, in Arabic
await p.tap('.cat[data-c="d"]');await p.tap('.cat[data-dc=""]');await p.evaluate(()=>document.querySelector('.cell[data-i="'+(1-corr)+'"]').click());await p.waitForTimeout(1000);
await p.tap('#lang');await p.waitForTimeout(300);let s=await st();ok(s.sheet&&/خلصت/.test(s.title),'duel popup lost after language switch: '+JSON.stringify(s));
await p.tap('#lang');await p.waitForTimeout(200);s=await st();ok(s.sheet&&/Run over/.test(s.title),'duel popup not rebuilt in English');
// 2. duel: correct answer, photo mode on past the pause, then off -> moves on
await p.evaluate(()=>document.querySelector('#sb .btn.y').click());await p.waitForTimeout(200);
await tapAnswer();await p.tap('#cam');await p.waitForTimeout(1800);await p.tap('#cam');await p.waitForTimeout(300);
ok((await st()).over===false,'duel stuck after photo mode');
// 6. Home mid-duel asks first; Keep playing returns to the duel
await tapAnswer();await p.waitForTimeout(100);await p.tap('#home');await p.waitForTimeout(200);s=await st();ok(s.sheet&&/Leave/.test(s.title)&&s.inGame,'no leave question in duel');
await p.evaluate(()=>document.querySelector('#sb .btn.y').click());await p.waitForTimeout(1600);s=await st();ok(s.inGame&&!s.sheet&&s.over===false,'Keep playing did not resume the duel '+JSON.stringify(s));
await p.tap('#home');await p.waitForTimeout(200);await p.evaluate(()=>document.querySelector('#sb .btn:not(.y)').click());ok(!(await st()).inGame,'Leave did not go to the menu');
// 3. challenge: final results survive a language switch
await toMenu();await p.tap('.cat[data-c="mp"]');await p.tap('.cat[data-c="c"]');await p.tap('.cat[data-cc=""]');
for(let k=0;k<10;k++){await tapAnswer();await p.waitForTimeout(550);await p.evaluate(()=>document.querySelector('#sb .btn.y').click());await p.waitForTimeout(100)}
await p.waitForTimeout(300);await p.tap('#lang');await p.waitForTimeout(300);s=await st();ok(s.sheet&&s.btns.some(x=>/ابعت/.test(x)),'challenge results lost after language switch: '+JSON.stringify(s));
await p.tap('#lang');await p.waitForTimeout(100);
// 6. hot potato: Home asks first
await toMenu();await p.tap('.cat[data-c="mp"]');await p.tap('.cat[data-c="h"]');await p.tap('.cat[data-hc=""]');await p.tap('#home');await p.waitForTimeout(200);
s=await st();ok(s.sheet&&s.inGame&&s.mode==='hot','no leave question in hot potato');await p.evaluate(()=>document.querySelector('#sb .btn.y').click());ok((await st()).inGame,'Keep playing left hot potato');
// 5. endless: one second chance per run
await p.evaluate(()=>{coins=500;save()});await toMenu();await p.tap('.cat.hero');
await winRound();await p.waitForTimeout(700);await p.evaluate(()=>document.querySelector('#sb .btn.y').click());
await tapAnswer();await p.waitForTimeout(600);s=await st();ok(s.btns.some(x=>/Undo/.test(x)),'first endless loss offers no undo');
await p.evaluate(()=>[...document.querySelectorAll('#sb .btn')].find(x=>/Undo/.test(x.textContent)).click());s=await st();ok(s.over===false&&s.eScore===1,'undo did not continue the run');
await tapAnswer();await p.waitForTimeout(600);s=await st();ok(!s.btns.some(x=>/Undo/.test(x))&&await p.evaluate(()=>document.getElementById('undo').disabled),'second endless undo still allowed');
// 5. replaying a solved category round pays nothing
await toMenu();await p.evaluate(()=>{coins=50;streak=3;save()});await p.tap('.cat[data-c="cats"]');await p.tap('.cat[data-g="0"]');await p.tap('.cat.sc[data-s]');
await winRound();await p.waitForTimeout(700);s=await st();ok(s.coins===50+10+6&&s.streak===4,'first solve paid wrong: '+s.coins+'/'+s.streak);
await p.evaluate(()=>{ri=-1;nxt()});await winRound();await p.waitForTimeout(700);s=await st();ok(s.coins===66&&s.streak===4,'replay paid: '+s.coins+'/'+s.streak);
await b.close();finish('flaw fixes',[...bad,...errs])})();
