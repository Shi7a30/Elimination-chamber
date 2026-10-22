// Rest of the 21 Oct 2026 audit: Daily share link opens the Daily, popups for screen readers, small text sizes,
// reworded rounds keep their progress key, and the install prompt (2nd visit, once, iPhone how-to).
const {chromium, devices} = require('playwright');
const fs = require('fs'), path = require('path');
const {PAGE, finish} = require('./lib');
(async () => {
  const b = await chromium.launch(); const bad = [], errs = []; const ok = (c, m) => { if (!c) bad.push(m) };
  const page = async (o) => {
    o = o || {};
    const ctx = await b.newContext(o.dev || {viewport: {width: 390, height: 844}, isMobile: true, hasTouch: true});
    const p = await ctx.newPage(); p.on('pageerror', e => errs.push(e.message));
    if (o.https) {
      // serve the game from a pretend https site, so the install prompt is allowed
      const root = path.join(__dirname, '..');
      await p.route('https://**', r => {
        const u = new URL(r.request().url());
        if (u.hostname !== 'shelhom.test') return r.abort();
        const f = path.join(root, decodeURIComponent(u.pathname === '/' ? '/index.html' : u.pathname));
        if (!f.startsWith(root) || !fs.existsSync(f)) return r.fulfill({status: 404, body: ''});
        const ext = path.extname(f), types = {'.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.webp': 'image/webp', '.png': 'image/png', '.webmanifest': 'application/manifest+json'};
        r.fulfill({status: 200, contentType: types[ext] || 'application/octet-stream', body: fs.readFileSync(f)});
      });
    } else await p.route('https://**', r => r.abort());
    await p.addInitScript(ls => { if (sessionStorage.getItem('s')) return; sessionStorage.setItem('s', 1); localStorage.setItem('elim_how', '1'); for (const k in ls) localStorage.setItem(k, ls[k]) }, o.ls || {});
    await p.goto((o.https ? 'https://shelhom.test/' : PAGE) + (o.q || '')); await p.waitForTimeout(300); return p;
  };

  // 1. a shared Daily link opens today's round; the share text has the result in words and the ?daily link
  let p = await page({q: '?daily'});
  ok(await p.evaluate(() => mode === 'daily' && inGame() && !/daily/.test(location.search)), 'a ?daily link did not open the Daily');
  await p.evaluate(() => { for (let i = 0; i < items.length; i++) if (i !== corr && out.indexOf(i) < 0) document.querySelector('.cell[data-i="' + i + '"]').click() });
  await p.waitForTimeout(800);
  const msg = await p.evaluate(() => { let m = ''; navigator.share = o => { m = o.text; return Promise.resolve() }; dyShare(); return m });
  ok(/✅ WON/.test(msg) && /\?daily$/.test(msg), 'Daily share text wrong: ' + JSON.stringify(msg));
  await p.context().close();
  // 2. popups: focus goes to the first button, the dock behind is out of reach but the cards can still be flipped; text is at least 11px
  p = await page({ls: {elim_coins: '500'}});
  await p.evaluate(() => { var id = 'players'; SUB = subInfo(id); PL = subOrder(id); ri = 0; runOk = 0; mode = 'cat'; newRound() });
  ok(await p.evaluate(() => parseFloat(getComputedStyle(document.querySelector('.cell .lab .ln') ? document.querySelector('.cell .lab') : document.body).fontSize) >= 11), 'card label text too small');
  await p.evaluate(() => document.querySelector('.cell[data-i="' + corr + '"]').click());
  await p.waitForFunction(() => document.getElementById('sheet').classList.contains('show'));
  let s = await p.evaluate(() => ({inert: document.getElementById('dock').inert && !document.getElementById('game').inert, focus: document.activeElement && document.activeElement.closest('#sb') !== null, label: document.getElementById('sheet').getAttribute('aria-labelledby'), small: parseFloat(getComputedStyle(document.querySelector('.cell .back small')).fontSize)}));
  ok(s.inert && s.focus && s.label === 'st', 'popup not set up for screen readers: ' + JSON.stringify(s));
  ok(s.small >= 11, 'flipped card label smaller than 11px: ' + s.small);
  await p.evaluate(() => menu());
  ok(await p.evaluate(() => !document.getElementById('menu').inert && !document.getElementById('game').inert), 'page stays out of reach after the popup closed');
  // 3. a reworded round keeps its old key, so progress, Daily days and challenge links still find it
  s = await p.evaluate(() => { const r = ALL.find(x => x.was); return r && {key: r.key, was: r.was, hash: BYH[hk(r.was)] === r} });
  ok(s && s.key === s.was && s.hash, 'reworded round lost its old key: ' + JSON.stringify(s));
  await p.context().close();

  // 4. install prompt: not on the first visit; on the 2nd an iPhone gets the how-to once
  p = await page({https: true, dev: devices['iPhone 13']});
  await p.waitForTimeout(1800); ok(await p.evaluate(() => !document.getElementById('inst')), 'install prompt on the first visit');
  await p.reload(); await p.waitForTimeout(1800);
  s = await p.evaluate(() => { const e = document.getElementById('inst'); return e && {txt: e.textContent, show: e.classList.contains('show')} });
  ok(s && s.show && /Add to Home Screen/.test(s.txt), 'no iPhone install how-to on the 2nd visit: ' + JSON.stringify(s));
  await p.tap('#inst .go'); await p.reload(); await p.waitForTimeout(1800);
  ok(await p.evaluate(() => !document.getElementById('inst') && JSON.parse(localStorage.getItem('elim_inst')) === 1), 'install prompt came back after OK');
  await p.context().close();

  ok(!errs.length, 'page errors: ' + errs.join(' | '));
  await b.close(); finish('audit rest', bad);
})();
