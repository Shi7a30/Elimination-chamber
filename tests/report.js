// Player reports in the game: hidden when no relay address is set; with one, the flag in a round and the row on the
// Stats page open the form, it sends the round's details, handles errors and "too many", works in Arabic and on a small phone,
// and closes with Cancel, the back button or after sending.
const {chromium, devices} = require('playwright');
const {PAGE, shot, finish} = require('./lib');
const URL = 'https://relay.test/report';
(async () => {
  const b = await chromium.launch(), bad = [], ok = (c, m) => { if (!c) bad.push(m) }, errs = [];
  const page = async (dev, withUrl) => {
    const c = await b.newContext({...devices[dev]}), p = await c.newPage();
    p.on('pageerror', e => errs.push(e.message));
    p.sent = []; p.status = 200;
    // '**/*' (a 'https://**' pattern does not catch these requests in Playwright 1.56)
    await p.route('**/*', r => { const u = r.request().url();
      if (u.startsWith('file:')) return r.continue();
      if (u !== URL) return r.abort();
      p.sent.push(JSON.parse(r.request().postData()));
      return r.fulfill({status: p.status, headers: {'Access-Control-Allow-Origin': '*'}, contentType: 'application/json', body: '{"ok":true}'});
    });
    if (withUrl) await p.addInitScript(u => { window.SHELHOM_REPORT_URL = u }, URL);
    await p.goto(PAGE); await p.waitForTimeout(500);
    return p;
  };
  const openCat = async p => { await p.evaluate(() => { GRP = null; menu() }); await p.tap('[data-nav="cats"]'); await p.tap('.cat[data-g="0"]'); await p.tap('.cat.sc[data-s]'); await p.waitForTimeout(200) };
  const form = p => p.evaluate(() => { const w = document.getElementById('rwrap'), s = w.querySelector('[data-rs]');
    return {open: w.classList.contains('show'), txt: w.innerText, on: (w.querySelector('.rcats .on') || {}).dataset?.rc || '', send: s ? !s.disabled : null, done: !!w.querySelector('#rsheet.done'), REP: !!REP} });

  // 1. No relay address: no flag, no Stats row
  let p = await page('iPhone 13', false);
  await openCat(p);
  ok(!(await p.isVisible('#rflag')), 'flag shows with no relay address');
  await p.evaluate(() => { GRP = 'st'; menu() });
  ok(!(await p.$('[data-rep]')), 'Stats report row shows with no relay address');
  await p.context().close();

  // 2. In a round
  p = await page('iPhone 13', true);
  await openCat(p);
  ok(await p.isVisible('#rflag'), 'flag missing in a round');
  await p.tap('#rflag'); await p.waitForTimeout(200);
  let f = await form(p);
  ok(f.open && /Report a problem/.test(f.txt) && /About this question/.test(f.txt), 'round form did not open: ' + f.txt);
  ok(f.on === 'answer' && f.send, '"Wrong answer" should be picked and sendable without text: ' + JSON.stringify(f));
  await p.tap('[data-rc="words"]'); f = await form(p);
  ok(f.on === 'words' && !f.send, 'wording report needs text before Send works');
  await p.waitForTimeout(1600);
  await p.fill('#rtx', 'The Arabic name is spelled wrong ```` @someone'); f = await form(p);
  ok(f.send, 'Send stays off after typing');
  await p.waitForTimeout(400); await p.screenshot({path: shot('report-round-en.png')});
  await p.tap('[data-rs]'); await p.waitForTimeout(400);
  f = await form(p);
  ok(f.done && /Sent, thanks!/.test(f.txt), 'no thank-you after sending: ' + f.txt);
  const s = p.sent[0] || {};
  const want = await p.evaluate(() => ({key: cur.r.key, n: items.length, L, BUILD}));
  ok(p.sent.length === 1 && s.cat === 'words' && /spelled wrong/.test(s.text) && s.lang === 'en' && s.build === want.BUILD && s.mode === 'cat', 'sent report wrong: ' + JSON.stringify(s));
  ok(s.ctx && s.ctx.key === want.key && s.ctx.items.length === want.n && s.ctx.shown.length > 5 && s.hp === '' && s.ms >= 1500, 'round details missing: ' + JSON.stringify(s.ctx));
  await p.tap('#rwrap [data-rx]'); f = await form(p);
  ok(!f.open && !f.REP, 'form did not close');
  ok(await p.evaluate(() => !document.getElementById('game').inert), 'game still blocked after closing the form');
  // a second report straight away is held back on the phone
  await p.tap('#rflag'); await p.waitForTimeout(200); await p.tap('[data-rs]'); await p.waitForTimeout(300);
  f = await form(p);
  ok(p.sent.length === 1 && /Too many reports/.test(f.txt) && f.open, 'second report within 20 s should wait: ' + f.txt);
  // the back button closes the form and stays in the game
  await p.evaluate(() => history.back()); await p.waitForTimeout(300);
  f = await form(p);
  ok(!f.open && (await p.evaluate(() => inGame())), 'back button should close the form and keep the game');
  // relay errors
  await p.evaluate(() => localStorage.removeItem('shelhom-rep-last'));
  p.status = 500; await p.tap('#rflag'); await p.waitForTimeout(200); await p.tap('[data-rs]'); await p.waitForTimeout(400);
  f = await form(p);
  ok(/Couldn't send/.test(f.txt) && f.open && f.send, 'server error not shown: ' + f.txt);
  p.status = 429; await p.tap('[data-rs]'); await p.waitForTimeout(400); f = await form(p);
  ok(/Too many reports/.test(f.txt), '429 not shown as "too many": ' + f.txt);
  await p.keyboard.press('Escape'); f = await form(p);
  ok(!f.open, 'Escape does not close the form');

  // 3. Stats page, in Arabic
  await p.evaluate(() => { localStorage.removeItem('shelhom-rep-last'); GRP = null; menu() });
  p.status = 200; p.sent = [];
  await p.click('#lang'); await p.tap('[data-nav="st"]'); await p.waitForTimeout(200);
  ok(/بلّغ عن مشكلة/.test(await p.textContent('[data-rep]')), 'Arabic Stats row missing');
  await p.tap('[data-rep]'); await p.waitForTimeout(200);
  f = await form(p);
  ok(f.open && f.on === '' && !f.send && /قولنا على أي حاجة/.test(f.txt) && /إلغاء/.test(f.txt), 'Arabic general form wrong: ' + f.txt);
  await p.tap('[data-rc="other"]'); await p.waitForTimeout(1500); await p.fill('#rtx', 'فكرة: ضيفوا أسئلة عن الأكل');
  await p.waitForTimeout(400); await p.screenshot({path: shot('report-stats-ar.png')});
  await p.tap('[data-rs]'); await p.waitForTimeout(400); f = await form(p);
  ok(p.sent.length === 1 && p.sent[0].ctx === null && p.sent[0].lang === 'ar' && p.sent[0].cat === 'other' && /وصلت/.test(f.txt), 'Arabic general report wrong: ' + JSON.stringify(p.sent[0]) + f.txt);
  await p.context().close();

  // 4. Small phone: the form fits and the 9 cards still fit with the flag in the row above them
  p = await page('iPhone SE', true);
  await openCat(p);
  const fit = await p.evaluate(() => { const g = document.getElementById('grid').getBoundingClientRect(); return {bottom: g.bottom, h: innerHeight, sw: document.documentElement.scrollWidth, w: innerWidth} });
  ok(fit.sw <= fit.w, 'sideways scroll on iPhone SE with the flag');
  await p.tap('#rflag'); await p.waitForTimeout(200);
  const box = await p.evaluate(() => { const r = document.getElementById('rsheet').getBoundingClientRect(), s = document.querySelector('#rsheet [data-rs]').getBoundingClientRect(); return {top: r.top, sb: s.bottom, h: innerHeight} });
  ok(box.top >= 0 && box.sb <= box.h, 'form does not fit on iPhone SE: ' + JSON.stringify(box));
  await p.screenshot({path: shot('report-se.png')});
  await b.close(); finish('report', bad.concat(errs));
})();
