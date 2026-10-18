// Offline support for the installed app. Publishing stamps VERSION with the commit (see pages.yml),
// so every release is a new service worker and open apps can offer "New version ready".
const VERSION = 'shelhom-dev';
const FONTS = 'shelhom-fonts';
// Card photos are kept across versions: each file name is a hash of the picture, so a name never changes meaning.
const PHOTOS = 'shelhom-photos';
// The round files (kept up to date by tools/split_rounds.py).
const ROUNDS = ['rounds/01-egyptian-football.js', 'rounds/02-world-football.js', 'rounds/03-cinema.js', 'rounds/04-tv.js', 'rounds/05-music.js', 'rounds/06-pop-culture.js', 'rounds/07-geography.js', 'rounds/08-history.js', 'rounds/09-animals.js', 'rounds/10-games-tech.js', 'rounds/11-food-drinks.js', 'rounds/12-nostalgia.js'];
const FILES = [...ROUNDS, './', 'index.html', 'manifest.webmanifest', 'photos/index.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png', 'icons/icon-maskable-512.png', 'icons/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== FONTS && k !== PHOTOS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  // The Cairo font: keep the first copy we get.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') c.put(req, res.clone());
      return res;
    }))));
    return;
  }
  // Wikipedia and anything else off-site: straight to the network, the game handles failures.
  if (url.origin !== location.origin) return;
  // Card photos: from the phone if we have them, otherwise download once and keep.
  if (url.pathname.includes('/photos/img/')) {
    e.respondWith(caches.open(PHOTOS).then(c => c.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(res => {
      if (res.ok) c.put(req, res.clone());
      return res;
    }))));
    return;
  }
  // Our own files: try the network so new rounds show up, fall back to the cache when offline.
  e.respondWith(fetch(req).then(res => {
    // Sharp Duel photos (photos/hd/) are kept across versions like the card photos; the rest belongs to this version.
    const keep = url.pathname.includes('/photos/hd/') ? PHOTOS : VERSION;
    if (res.ok) { const copy = res.clone(); caches.open(keep).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, {ignoreSearch: true})
    .then(hit => hit || (req.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
