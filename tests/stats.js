// The dock has five buttons with Home in the middle, and Stats shows the saved numbers in both languages.
const {chromium, devices} = require('playwright');
const {PAGE, shot, finish} = require('./lib');
(async () => {
  const b = await chromium.launch(), bad = [], ok = (c, m) => { if (!c) bad.push(m) };
  const c = await b.newContext({...devices['iPhone 13']}), p = await c.newPage(), errs = [];
  p.on('pageerror', e => errs.push(e.message)); await p.route('https://**', r => r.abort());
  await p.addInitScript(() => { if (!localStorage.getItem('elim_coins')) { localStorage.setItem('elim_coins', '777'); localStorage.setItem('elim_best', '12');
    localStorage.setItem('elim_endless', JSON.stringify({all: 36, eg: 9})); localStorage.setItem('elim_duel', JSON.stringify({w: 7})); localStorage.setItem('elim_daily', JSON.stringify({b: 5})) } });
  await p.goto(PAGE); await p.waitForTimeout(800);
  const navs = () => p.$$eval('#dock [data-nav]', a => a.map(x => x.dataset.nav));
  const order = await navs();
  ok(JSON.stringify(order) === '["d","cats","home","mp","st"]', 'dock order is Duel, Categories, Home, Multiplayer, Stats: ' + order);
  // Home is the middle button and sits in the centre of the dock
  const mid = await p.evaluate(() => { const d = document.getElementById('dock').getBoundingClientRect(), h = document.querySelector('#dock [data-nav=home] .ic').getBoundingClientRect();
    return Math.abs((h.left + h.width / 2) - (d.left + d.width / 2)) });
  ok(mid < 2, 'Home is centred in the dock (off by ' + mid + 'px)');
  await p.evaluate(() => { prog[ALL[0].key] = 1; save() });
  await p.tap('[data-nav="st"]'); await p.waitForTimeout(200);
  const st = await p.evaluate(() => ({on: document.querySelector('#dock .on').dataset.nav, txt: document.getElementById('menu').innerText, total: ALL.length}));
  ok(st.on === 'st', 'Stats is highlighted in the dock');
  ok(st.txt.includes('777') && st.txt.includes('1/' + st.total) && st.txt.includes('12'), 'Stats shows coins, rounds solved and best streak');
  ok(st.txt.includes('36') && st.txt.includes('9') && st.txt.includes('7') && st.txt.includes('5'), 'Stats shows Endless, Duel and Daily bests');
  await p.click('#lang'); await p.waitForTimeout(200);
  const ar = await p.evaluate(() => ({h: document.querySelector('.ghead h2').textContent, on: document.querySelector('#dock .on').dataset.nav, lbl: document.querySelector('#dock [data-nav=st]').textContent}));
  ok(ar.h === 'أرقامي' && ar.lbl === 'أرقامي' && ar.on === 'st', 'Arabic Stats page stays open after switching language');
  await p.screenshot({path: shot('stats_ar.png'), fullPage: true});
  await p.tap('[data-back]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => document.body.dataset.scr === 'home' && document.querySelector('#dock .on').dataset.nav === 'home'), 'Back from Stats goes Home');
  await b.close(); finish('stats', bad.concat(errs));
})();
