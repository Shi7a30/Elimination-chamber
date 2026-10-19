// Undo after a loss: the price doubles each time you save the same streak (30, 60, 120...), goes back to 30
// once a loss is accepted, survives leaving the game, and a saved round pays no coins. No Undo button in the bar.
const {chromium,devices}=require('playwright');
const {PAGE,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({...devices['iPhone 13']});const p=await ctx.newPage();await p.route('https://**',r=>r.abort());
const errs=[],bad=[];p.on('pageerror',e=>errs.push(e.message));const ok=(c,m)=>{if(!c)bad.push(m)};
const st=()=>p.evaluate(()=>({sheet:document.getElementById('sheet').classList.contains('show'),txt:document.getElementById('sp').textContent,btns:[...document.querySelectorAll('#sb .btn')].map(x=>x.textContent),coinIcon:!!document.querySelector('#sb .btn .coin'),over,coins,streak,uLv,eScore,cost:uCost()}));
const lose=async()=>{await p.evaluate(()=>{for(let i=0,k=0;i<items.length&&k<2;i++)if(i!==corr){document.querySelector('.cell[data-i="'+i+'"]').click();k++}document.querySelector('.cell[data-i="'+corr+'"]').click()});await p.waitForTimeout(600)};
const win=()=>p.evaluate(()=>{for(let i=0;i<items.length;i++)if(i!==corr&&out.indexOf(i)<0)document.querySelector('.cell[data-i="'+i+'"]').click()});
const tapUndo=()=>p.evaluate(()=>[...document.querySelectorAll('#sb .btn')].find(x=>/Undo/.test(x.textContent)).click());
const next=async()=>{await p.waitForTimeout(700);await p.evaluate(()=>document.querySelector('#sb .btn.y').click());await p.waitForTimeout(200)};
const openCat=async()=>{await p.evaluate(()=>{GRP=null;menu()});await p.tap('[data-nav="cats"]');await p.tap('.cat[data-g="0"]');await p.tap('.cat.sc[data-s]')};
await p.goto(PAGE);await p.waitForTimeout(400);
await p.evaluate(()=>{coins=1000;streak=6;prog={};uLv=0;save()});await openCat();
ok(await p.evaluate(()=>!document.getElementById('undo')),'Undo button still in the bar');
// mid-round there's nothing to undo
await p.evaluate(()=>{var i=corr?0:1;document.querySelector('.cell[data-i="'+i+'"]').click()});ok(!(await p.evaluate(()=>canUndo())),'undo allowed before a loss');
// loss 1: costs 30, says the next costs 60, coin icon on the button
await lose();let s=await st();ok(s.btns.some(x=>/Undo · 30/.test(x))&&s.coinIcon&&/Next undo costs 60/.test(s.txt),'first undo popup wrong: '+JSON.stringify(s));
await tapUndo();s=await st();ok(s.coins===970&&s.streak===6&&s.over===false&&s.uLv===1,'first undo wrong: '+JSON.stringify(s));
await win();await p.waitForTimeout(700);s=await st();ok(s.coins===970&&s.streak===6&&/no coins/.test(s.txt)&&/🔥\u2060?6 streak/.test(s.txt),'saved round paid or text wrong: '+JSON.stringify(s));
await next();
// a normal win doesn't lower the price; loss 2 costs 60
await win();await p.waitForTimeout(700);s=await st();ok(s.coins===970+10+10&&s.streak===7,'normal win pay wrong: '+JSON.stringify(s));await next();
await lose();s=await st();ok(s.btns.some(x=>/Undo · 60/.test(x)),'second undo is not 60: '+JSON.stringify(s.btns));await tapUndo();s=await st();ok(s.coins===930,'second undo did not cost 60');
await win();await next();
// leaving and coming back keeps the price (and it survives a reload)
await p.evaluate(()=>{GRP=null;menu()});await p.reload();await p.waitForTimeout(400);ok(await p.evaluate(()=>uCost())===120,'price reset by leaving/reloading');
await openCat();await lose();s=await st();ok(s.btns.some(x=>/Undo · 120/.test(x))&&/240/.test(s.txt),'third undo is not 120: '+JSON.stringify(s));
// Arabic popup
await p.tap('#lang');await p.waitForTimeout(200);s=await st();ok(s.btns.some(x=>/رجوع · 120/.test(x))&&s.coinIcon&&/الرجوع الجاي هيبقى بـ\s240/.test(s.txt),'arabic popup wrong: '+JSON.stringify(s));await p.tap('#lang');await p.waitForTimeout(200);
// accepting the loss resets the price
await p.evaluate(()=>document.querySelector('#sb .btn.y').click());s=await st();ok(s.uLv===0&&s.cost===30&&s.streak===0,'price not reset after Move on: '+JSON.stringify(s));
// not enough coins: no Undo, says what it costs
await p.evaluate(()=>{coins=20;save()});await lose();s=await st();ok(!s.btns.some(x=>/Undo/.test(x))&&/You need 30 coins/.test(s.txt),'poor popup wrong: '+JSON.stringify(s));
await p.evaluate(()=>{GRP=null;menu()});
// Endless: several undos in one run, doubling; a new run starts back at 30
await p.evaluate(()=>{coins=500;streak=0;uLv=0;save()});await p.tap('.cat.hero');await win();await next();
await lose();await tapUndo();await win();await next();s=await st();ok(s.coins===500+10-30&&s.eScore===2,'endless first save wrong: '+JSON.stringify(s));
await lose();s=await st();ok(s.btns.some(x=>/Undo · 60/.test(x)),'endless second undo missing: '+JSON.stringify(s.btns));await tapUndo();s=await st();ok(s.over===false&&s.coins===420,'endless second undo did not work');
await win();await next();await lose();await p.evaluate(()=>document.querySelector('#sb .btn.y').click());s=await st();ok(s.eScore===0&&s.uLv===0,'new run did not reset the price');
ok(!errs.length,'page errors: '+errs.join(' | '));
await b.close();finish('undo',[...bad]);
})();
