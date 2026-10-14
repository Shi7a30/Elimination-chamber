# Shelhom! (شيلهم)

A bilingual trivia elimination game: one page (`index.html`) plus built-in photos (`photos/`).

## Install on a phone

Open the published site, then:
- **Android (Chrome):** menu ⋮ → *Install app* (or *Add to Home screen*).
- **iPhone (Safari):** Share → *Add to Home Screen*.

After the first visit it works offline. `sw.js` caches the page, photos and font; `manifest.webmanifest` and `icons/` give it its name and icon.

## Publishing

Every push to `main` runs the tests and, if they pass, publishes the game to GitHub Pages (`.github/workflows/pages.yml`).

## Tests

`npm test` — see [tests/README.md](tests/README.md).

## Photos

Card photos come from Wikipedia/Wikimedia via `tools/fetch_photos.py` (run by the photos GitHub Action) and are embedded into `photos/p1–p4.js` by `tools/embed_photos.py`.

Picking rules:
- Movies, TV series, cartoons and plays: use the poster or an iconic scene, not a photo of the star.
- Songs: use the album or single cover (or the poster of the film the song is from) before a photo of the singer.
- Two different cards should never share the same picture.
