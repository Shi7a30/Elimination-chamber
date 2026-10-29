# Shelhom! — Playwright checks

Automated checks that open the game in a headless Chromium browser, play it, and report **PASS** or **FAIL**.

## Setup (once)

You need [Node.js](https://nodejs.org) 18 or newer. In the folder that holds `index.html`, `rounds/`, `photos/`, `tests/` and `package.json`, run:

```bash
npm install
npx playwright install chromium
```

## Run

```bash
npm test              # all checks (about 20 minutes)
npm run test:quick    # everything except the full play-through (about 5 minutes)
node tests/duel.js    # one check on its own
SHELHOM_SHARD=2/3 node tests/full-playthrough.js   # one third of the play-through
```

On GitHub the play-through is split into 3 parts that run at the same time on separate machines (`SHELHOM_SHARD`), next to one machine for the other checks, so a run takes about a third as long. Together the parts still play every round. In CI a failed check is run once more (`--retry`); if it passes the second time the run stays green but shows a yellow "flaky" warning.

## When the site does not update

`.github/workflows/pages.yml` publishes the site after every merge to `main`. If its tests or the publish fail, it opens a GitHub issue labelled `publish-failed` and assigns it to the repo owner; the next successful publish closes it. The Stats page shows "Version <n> · Last update: <date, time>" so you can see which version a phone is running. The version is the number of commits on `main`, so it goes up by one with every merge.

The tests open `../index.html` next to the `tests` folder. To test another copy, set `SHELHOM_PAGE`, e.g. `SHELHOM_PAGE=~/Desktop/other/index.html npm test`.

Screenshots (phone layouts, Arabic screens, duel pages…) are saved in `tests/screenshots/`.

## What each check covers

| File | What it checks |
|---|---|
| `data-check.js` | Every round has 9 cards, exactly one right answer and an Endless difficulty (`d:` 1, 2 or 3). The same item never has two different values in the endless-mode pools. No console errors. |
| `regions.js` | Egypt / World / Both show the right subcategories. Food & Drinks and Childhood & Nostalgia are Egypt-only. |
| `pwa.js` | The installable app: serves the folder over http, checks the manifest and icons, waits for the service worker, checks photos download one by one as rounds need them, saves all photos for offline, publishes a pretend new version to check the "New version ready" banner, then goes offline and reloads to confirm the game still starts and shows photos. |
| `mobile.js` | iPhone 13, Pixel 7 and iPhone SE: home, group page and game screen have no sideways scrolling, 9 tiles show, and tapping eliminates a card. With JavaScript off, a message shows. |
| `duel.js` | Duel (ده ولا ده) over 900 simulated runs: always 2 different cards, the right answer is correct, the region filter holds, and the kept card stays in place. Also plays through the UI in English and Arabic. |
| `duel-categories.js` | Duel limited to each subcategory and region only uses that subcategory's cards. Best runs are saved per category, and the duel page works in Arabic. |
| `duel-no-repeats.js` | In every region and subcategory, a duel run never shows the same pair twice and never marks a wrong answer as right. |
| `mixed-year-labels.js` | In mixed "what came first" questions each card says what its year means ("Film released"…), in both languages at 360/412 px wide. Normal rounds show no labels. |
| `same-photo.js` | 400 generated endless rounds never put two cards with the identical photo on the board, and the duel never pairs them. |
| `multiplayer.js` | Hot potato: adding players, names saved, turns go in order, knocking out the answer puts that player out, last one standing wins. Challenge links: 10 rounds, the shared link gives a friend the same rounds in the same card order, the result compares both scores, the friend can send theirs back, opening the score-back link shows "X got 9/10" and who won (not "X challenged you"), a broken link says so, and the invite works in Arabic on a small phone. |
| `random-order.js` | Category rounds come in a random order each visit, and no round repeats until every round in that category has been shown, even after leaving and reloading. |
| `endless-levels.js` | Endless starts easy and gets harder: scores 0-4 only give easy rounds, 10-14 medium, 20+ mostly hard; generated mixes only use cards up to that level and early ones have a clear answer; a new run starts easy again; hot potato still uses every level. |
| `flaw-fixes.js` | Popups survive a language switch (duel run over, challenge results), a duel moves on after photo mode closes, an undo keeps an Endless run going, replaying a solved round pays no coins or streak, Home asks before ending a game, and the built-in photos load after the game starts. Review fixes: how-to-play shows on the first game only, Skip warns before ending a 🔥 streak, knocked-out cards turn yellow, Arabic round counts use the right plural, and the Daily card's 🔥/🏆 stay above the dock on a short screen. |
| `undo.js` | Undo after a loss: no Undo button in the bar, the price doubles each time you save the same streak (30, 60, 120) and shows the coin icon, a saved round pays no coins, the price survives leaving and reloading, accepting a loss resets it to 30, too few coins hides Undo, Endless allows several undos per run, Arabic popup text. |
| `daily.js` | Daily round: two players get the same round and card order, one try a day (reload and tapping the done card don't restart it), win/lose/missed-day streak and best, leaving midway counts, no repeats until every round has had its day, every round is listed in `daily.js` and day 1 stays the same, Arabic wording, the dock highlight, and the top bar keeping coins left and sound/language right in both languages (also on iPhone SE). |
| `stats.js` | The dock has five buttons with Home raised in the centre, and the Stats page (أرقامي) shows coins, rounds solved, best streak and the Endless / Duel / Daily bests, stays open after switching to Arabic, shows the version line (version number and publish time in Cairo, or "Test copy"), and Back returns Home. |
| `edge-cases.js` | The phone back button goes to the previous page and asks before leaving a game; the update banner waits until you leave a game; a friend's challenge stays on Home until played (even after reopening); hot potato doesn't repeat a round until the group runs out and 8 names fit in one row; the seen-rounds order counts only your region; two cards with the same name never share a board or duel; setting the clock back doesn't reopen the Daily round; the undo price survives reopening; broken or full storage is handled; big coin numbers and 3 popup buttons fit a 320px phone. |
| `report.js` | Player reports: no flag or Stats row until a relay address is set; with one, the flag in a round opens the form with "Wrong answer" picked, sends the round's key, question and cards, shows "Sent, thanks!", holds a second report for 20 seconds, shows errors and "too many", closes with Cancel, Escape or the back button, works from the Stats page in Arabic, and fits an iPhone SE. |
| `report-relay.js` | The report relay (`relay/worker.mjs`) without Cloudflare or GitHub: only the live site may send, bots and huge or broken reports are dropped, the rate limits and daily cap hold, and the issue has fixed labels (never `approved`), no player text in its title, and everything the player wrote inside code blocks. |
| `full-playthrough.js` | Plays **every round** of every subcategory, alternating English and Arabic. Covers win, lose, undo, coin and streak math, flip and peek, Arabic digits, RTL, region filters, skip, built-in photos, uploading your own photo, saving after reload, endless mode (25 rounds, run over, undo, new run, best score) and working offline. Wikipedia is mocked, so it needs no internet. |

`lib.js` holds shared helpers (page location, screenshot folder, a test image, PASS/FAIL reporting). `run-all.js` runs them all and exits non-zero if any fail, so it can be used in CI.
