# Shelhom! — Playwright checks

Automated checks that open the game in a headless Chromium browser, play it, and report **PASS** or **FAIL**.

## Setup (once)

You need [Node.js](https://nodejs.org) 18 or newer. In the folder that holds `index.html`, `photos/`, `tests/` and `package.json`, run:

```bash
npm install
npx playwright install chromium
```

## Run

```bash
npm test              # all 10 checks (about 6 minutes)
npm run test:quick    # everything except the full play-through (about 1 minute)
node tests/duel.js    # one check on its own
```

The tests open `../index.html` next to the `tests` folder. To test another copy, set `SHELHOM_PAGE`, e.g. `SHELHOM_PAGE=~/Desktop/other/index.html npm test`.

Screenshots (phone layouts, Arabic screens, duel pages…) are saved in `tests/screenshots/`.

## What each check covers

| File | What it checks |
|---|---|
| `data-check.js` | Every round has 9 cards and exactly one right answer. The same item never has two different values in the endless-mode pools. No console errors. |
| `regions.js` | Egypt / World / Both show the right subcategories. Food & Drinks and Childhood & Nostalgia are Egypt-only. |
| `pwa.js` | The installable app: serves the folder over http, checks the manifest and icons, waits for the service worker, then goes offline and reloads to confirm the game still starts with its built-in photos. |
| `mobile.js` | iPhone 13, Pixel 7 and iPhone SE: home, group page and game screen have no sideways scrolling, 9 tiles show, and tapping eliminates a card. With JavaScript off, a message shows. |
| `duel.js` | Duel (ده ولا ده) over 900 simulated runs: always 2 different cards, the right answer is correct, the region filter holds, and the kept card stays in place. Also plays through the UI in English and Arabic. |
| `duel-categories.js` | Duel limited to each subcategory and region only uses that subcategory's cards. Best runs are saved per category, and the duel page works in Arabic. |
| `duel-no-repeats.js` | In every region and subcategory, a duel run never shows the same pair twice and never marks a wrong answer as right. |
| `mixed-year-labels.js` | In mixed "what came first" questions each card says what its year means ("Film released"…), in both languages at 360/412 px wide. Normal rounds show no labels. |
| `same-photo.js` | 400 generated endless rounds never put two cards with the identical photo on the board, and the duel never pairs them. |
| `full-playthrough.js` | Plays **every round** of every subcategory, alternating English and Arabic. Covers win, lose, undo, coin and streak math, flip and peek, Arabic digits, RTL, region filters, skip, built-in photos, uploading your own photo, saving after reload, endless mode (25 rounds, run over, undo, new run, best score) and working offline. Wikipedia is mocked, so it needs no internet. |

`lib.js` holds shared helpers (page location, screenshot folder, a test image, PASS/FAIL reporting). `run-all.js` runs them all and exits non-zero if any fail, so it can be used in CI.
