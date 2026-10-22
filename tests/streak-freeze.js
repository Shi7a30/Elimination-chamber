// Streak freeze: missed yesterday's Daily with a streak going -> the Daily card offers to save it for 100 coins, once a week.
const {chromium} = require('playwright');
const {PAGE, shot, finish} = require('./lib');
(async () => {
  const b = await chromium.launch(); const bad = [], errs = []; const ok = (c, m) => { if (!c) bad.push(m) };
  const page = async (w, lang) => {
    const ctx = await b.newContext({viewport: {width: w || 390, height: 844}, isMobile: true, hasTouch: true});
    const p = await ctx.newPage(); p.on('pageerror', e => errs.push(e.message)); await p.route('https://**', r => r.abort());
    await p.addInitScript(l => { localStorage.setItem('elim_how', '1'); localStorage.setItem('elim_lang', JSON.stringify(l)) }, lang || 'en');
    await p.goto(PAGE); await p.waitForTimeout(300); return p;
  };
  // set the Daily state relative to today: y = days ago you last won (and played)
  const set = (p, o) => p.evaluate(o => { const d = dayNo(); DY = {s: o.s, b: o.s, lw: d - o.won, d: d - (o.played || o.won), done: true, w: o.played ? false : true, fz: o.fz != null ? d - o.fz : undefined};
    if (o.played) DY.s = 0; coins = o.coins; save(); dySave(); menu() }, o);
  const bar = p => p.evaluate(() => !!document.querySelector('.dcard .fzbar'));

  let p = await page();
  await set(p, {s: 5, won: 2, coins: 300});
  ok(await bar(p), 'no freeze offer after missing yesterday');
  ok(await p.evaluate(() => document.querySelector('.dcard').tagName === 'DIV'), 'freeze card is still a button (a button inside a button)');
  await p.screenshot({path: shot('freeze-offer.png')});
  await p.tap('[data-fz]'); await p.waitForFunction(() => document.getElementById('sheet').classList.contains('show'));
  ok(/Save your streak/.test(await p.textContent('#st')) && /100 coins/.test(await p.textContent('#sp')), 'freeze popup text wrong');
  await p.tap('#sb .btn.y'); await p.waitForTimeout(400);
  let s = await p.evaluate(() => ({coins, st: dyStreak(), fz: DY.fz === dayNo(), bar: !!document.querySelector('.fzbar'), t: document.getElementById('st').textContent}));
  ok(s.coins === 200 && s.st === 5 && s.fz && !s.bar && /saved/i.test(s.t), 'saving the streak failed: ' + JSON.stringify(s));
  await p.tap('#sb .btn.y'); await p.waitForTimeout(300); // Play from the "saved" popup
  ok(await p.evaluate(() => mode === 'daily' && inGame()), 'Play after saving did not open the Daily');
  await p.evaluate(() => { for (let i = 0; i < items.length; i++) if (i !== corr && out.indexOf(i) < 0) document.querySelector('.cell[data-i="' + i + '"]').click() });
  await p.waitForTimeout(800);
  ok(await p.evaluate(() => DY.s === 6 && dyStreak() === 6), 'winning after a save did not carry the streak on');

  // once a week; not for a lost day, a 2-day gap, or no streak
  for (const [o, want, m] of [[{s: 5, won: 2, coins: 300, fz: 3}, false, 'offered twice in a week'], [{s: 5, won: 2, coins: 300, fz: 7}, true, 'not offered a week later'],
    [{s: 5, won: 2, played: 1, coins: 300}, false, 'offered after losing yesterday'], [{s: 5, won: 3, coins: 300}, false, 'offered after missing 2 days'], [{s: 0, won: 2, coins: 300}, false, 'offered with no streak']]) {
    await set(p, o); ok(await bar(p) === want, m);
  }
  // tapping the card itself (not the bar) still plays
  await set(p, {s: 5, won: 2, coins: 300}); await p.tap('.dcard .dt'); await p.waitForTimeout(300);
  ok(await p.evaluate(() => mode === 'daily' && inGame() && DY.s === 0), 'tapping the freeze card did not start the Daily');
  await p.context().close();

  // not enough coins: no save button; "let it go" hides the offer for today
  p = await page(320, 'ar');
  await set(p, {s: 9, won: 2, coins: 40});
  ok(await bar(p) && /فاتك امبارح/.test(await p.textContent('.fzbar')), 'no Arabic freeze offer');
  ok(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'freeze offer scrolls sideways at 320px');
  await p.screenshot({path: shot('freeze-offer-ar-320.png')});
  await p.tap('[data-fz]'); await p.waitForFunction(() => document.getElementById('sheet').classList.contains('show'));
  s = await p.evaluate(() => ({btns: [...document.querySelectorAll('#sb .btn')].map(x => x.textContent), txt: document.getElementById('sp').textContent}));
  ok(!s.btns.some(x => /انقذه/.test(x)) && /محتاج 100 كوينز/.test(s.txt.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))), 'save offered without enough coins: ' + JSON.stringify(s));
  await p.tap('#sb .btn:not(.y)'); await p.waitForTimeout(300);
  ok(!await bar(p) && await p.evaluate(() => coins === 40), '"let it go" did not hide the offer');
  await p.context().close();

  ok(!errs.length, 'page errors: ' + errs.join(' | '));
  await b.close(); finish('streak freeze', bad);
})();
