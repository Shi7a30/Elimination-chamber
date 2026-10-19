# Shelhom! (شيلهم)

A bilingual trivia elimination game: one page (`index.html`), the rounds (`rounds/`, one file per category) and built-in photos (`photos/`).

## Install on a phone

Open the published site, then:
- **Android (Chrome):** menu ⋮ → *Install app* (or *Add to Home screen*).
- **iPhone (Safari):** Share → *Add to Home Screen*.

After the first visit it works offline. `sw.js` caches the page, rounds, font and every photo you've seen (the home screen's "Save all photos" button downloads the rest); `manifest.webmanifest` and `icons/` give it its name and icon.

## Publishing

Every push to `main` runs the tests and, if they pass, publishes the game to GitHub Pages (`.github/workflows/pages.yml`).

## Tests

`npm test` — see [tests/README.md](tests/README.md).

## Rounds and the Daily round

Rounds live in `rounds/`, one file per category. After adding or renaming rounds, run `node tools/daily_schedule.js`: it adds the new rounds to the end of the Daily round schedule in `daily.js`, so no day that's already scheduled changes. The tests fail if a round is missing from it.

## Photos

Card photos come from Wikipedia/Wikimedia via `tools/fetch_photos.py` (run by the photos GitHub Action) and are written out as one file per photo in `photos/img/` (plus the `photos/index.js` list) by `tools/embed_photos.py`. Photos download only when a card needs them.

Picking rules:
- Movies, TV series, cartoons and plays: use the poster or an iconic scene, not a photo of the star.
- Songs: use the album or single cover (or the poster of the film the song is from) before a photo of the singer.
- Two different cards should never share the same picture.
