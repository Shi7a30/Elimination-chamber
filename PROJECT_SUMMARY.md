# Shelhom! (شيلهم) — Project Summary

A bilingual (English / Egyptian Arabic) trivia elimination game with photo cards, built as a single web page. It started as an artifact named "Eliminate", was imported into GitHub, and is now published from the `main` branch.

- **Repo:** `shi7a30/elimination-chamber`, branch `main` (every merge runs the tests, then publishes)
- **Live:** https://shi7a30.github.io/Elimination-chamber/ (installable on phones, works offline)
- **Status:** fully playable in the browser (desktop and phone). All content, photos, progress saving, sound and both languages work offline after the first load.
- **Updated:** 19 Oct 2026. Sections 1 to 5 describe the game as it is now; section 7 is the history.

---

## 1. The core game

Each round shows a question and **9 photo cards**, for example "OLDEST MOVIE STAR" or "MOST LEAGUE TITLES". Exactly one card is the right answer, the youngest/oldest/most/least depending on the question. The player has to **eliminate all the other cards one at a time** and keep only the right one.

- If you eliminate the right answer, **you lose** the round.
- If you get down to one card and it's the right answer, **you win**.
- Eliminated cards **flip over to show their value**, such as a birth year or number of titles, so you learn as you go. Tap a flipped card to flip it back.
- When a round ends, every card shows its value.
- The rule *"each round has exactly one best answer"* is checked automatically when the game loads, so there are no ties.

### Economy and progress
| Thing | Value |
|---|---|
| Starting coins | 50 |
| Win a round | +10 coins, plus a streak bonus of 2 × streak (max +10) |
| Undo the last elimination | costs 30 coins. You can undo after a loss to save your streak |
| Skip a round | free (category mode), but it ends your 🔥 streak, and the game asks first when the streak is 2 or more |
| Streak 🔥 and best 🏆 | shown on the Play card (and the daily round has its own) |
| Daily round | one round a day, the same for everyone (changes at midnight Cairo time), one try, own streak and best, shareable result squares. The order is written down in `daily.js` and new rounds only go on the end, so adding rounds never changes a day |
| Per-round progress | "x/y solved" per subcategory, ★ COMPLETE when all are solved |

Everything is saved in the browser's `localStorage`: coins, streaks, best scores, progress, language, your own photos and cached Wikipedia photos.

---

## 2. Play modes

0. **Home screen:** a Play card (mixed rounds, 🔥 streak and 🏆 best), the **Daily round** card (سؤال اليوم), and a bottom dock with Duel, Categories and Multiplayer. First-time players get a short "how to play" popup.
1. **Category mode:** pick a group, then a subcategory, and play its rounds in a shuffled order (each device keeps its own deck so rounds don't repeat until all are played).
2. **♾ Endless:** mixed rounds from every category until you miss. Half the time it plays a normal round. The other half it **generates a mixed question** from two pools:
   - `p` = people by birth year (oldest/youngest across actors, players, singers…)
   - `y` = things by year (films, songs, series, clubs founded…). In mixed year questions, each card says what its year means, e.g. "Film released" or "Club founded".
   - Best score is saved per region.
3. **🆚 Duel (ده ولا ده / "This or That"):** two cards, pick the right one. The winner stays and faces a new card until you miss.
   - You can play "Everything" or choose one subcategory first.
   - The same pair is never shown twice in a run, and fresh cards and questions come first.
   - Half the new challengers beat the kept card, so always tapping the same side doesn't work.
   - Best run is saved per region and per subcategory.
4. **Multiplayer:**
   - **Hot potato (البطاطس سخنة خالص):** 2 to 8 players pass one phone; whoever knocks out the answer is out.
   - **Challenge:** play 10 rounds and send a link; friends get the same rounds and see your score. Their reply link shows who won. No server: the rounds and score are in the link.

### Region filter (applies to everything)
- **Egypt 🇪🇬:** Egyptian rounds only
- **World 🌍:** international rounds only
- **Both:** everything

Food & Drinks and Childhood & Nostalgia are Egyptian-only, so they only show in Egypt and Both.

### Languages
- English and **Egyptian Arabic** (colloquial, not formal Arabic) with full RTL layout and the Cairo font.
- Every round, label and item name has both languages. The toggle button shows "ع" / "EN".

### Other features
- **📷 Photo mode:** tap 📷 in a round, then any tile, to use your own photo for it (saved on the device).
- Sound effects, haptics, confetti and floating "+coins" text. Reduced-motion is respected.
- Startup errors and "can't run here" hints are shown on the page instead of a blank screen.

---

## 3. Content

**364 hand-written rounds, 3,276 cards, 2,604 different items**: 200 Egyptian rounds and 164 international ones, at least 20 per group. Plus endless mode generates unlimited mixed questions.

### Menu structure (7 groups → subcategories)

The table below is the original 140-round layout; the groups and subcategories are the same today, with more rounds in each.

| Group | Subcategories | Egypt rounds | World rounds |
|---|---|---|---|
| ⚽ FOOTBALL (الكورة) | Players · Clubs & Trophies | 8 + 6 | 5 + 6 |
| 🎬 MOVIES & TV (سينما وتليفزيون) | Stars · Films · TV Shows | 5 + 4 + 3 | 5 + 3 + 4 |
| 🎤 MUSIC & POP (مزيكا وتريند) | Singers · Songs · Celebs & Cartoons | 3 + 3 + 2 | 5 + 2 + 5 |
| 🧠 KNOWLEDGE (معلومات عامة) | Geography · History · Animals | 8 + 8 + 3 | 9 + 7 + 11 |
| 🎮 GAMES & TECH (ألعاب وتكنولوجيا) | Games & Consoles · Brands & Apps | 0 + 3 | 3 + 2 |
| 🍲 FOOD & DRINKS (أكل وشرب) — Egypt only | Brands & Snacks · Restaurants & Cafés | 4 + 4 | — |
| 📼 CHILDHOOD & NOSTALGIA (ذكريات الطفولة) — Egypt only | TV, Radio & Cartoons · Things From Back Then | 5 + 4 | — |

### Question types used
- **Year / age:** oldest/youngest, first/latest released, first aired, founded
- **Who has more:** league titles, Oscars, goals, Ballon d'Ors, followers, sales
- **Size and comparisons:** who is taller, biggest country or island, longest river, fastest or heaviest animal
- Values can have prefixes/suffixes and fixed decimals, e.g. island areas in thousands of km².

### Content rules followed so far
- Facts were **fact-checked in two passes**. Disputed values (e.g. uncertain birth years) were removed or reverted, and outdated numbers updated.
- Egyptian content is kept separate from international content. African football counts as international.
- Every round must have a single clear winner.

---

## 4. Photos

Every card shows a photo. It comes from the first source that has one:
1. Your own photo (📷)
2. The **built-in set**: one small WebP file per photo in `photos/img/` (about 2,400 files, ~10 MB in all), listed by card name in `photos/index.js`. A photo downloads only when a card needs it, and the phone keeps it. The home screen has a "Save all photos for playing offline" button that downloads the rest.
3. A live Wikipedia lookup when online
4. If there's nothing, a **letter tile**

### Photo picking rules (also in README)
- **Movies, TV series, cartoons and plays:** use the poster or an iconic scene, not a photo of the star.
- **Songs:** use the album/single cover, or the poster of the film the song is from, before a photo of the singer.
- **Brands and apps:** use the logo.
- Logos and flags are fitted on a light gray square. Photos are square-cropped with faces kept near the top.
- **No two cards share the same picture.** The game also has a runtime guard that never puts two cards with an identical photo on the same board or in the same duel pair.
- Wrong matches are blanked to a letter tile rather than showing something misleading. Examples: a beer bottle for a restaurant, or a football club logo for a farm brand.

### Photo pipeline (tools/)
- `tools/photo-list.json` has one entry per item: `name, title (Wikipedia), hint, ar, ar_hint, logo, skip, url, review, q`.
- `tools/fetch_photos.py` runs in a **GitHub Action** (`.github/workflows/photos.yml`), because Wikipedia isn't reachable from every dev environment.
  - It looks up English Wikipedia, Arabic Wikipedia, Wikidata image/logo/poster, other Wikipedias' lead images (which often use posters/covers), Commons search, and extra search phrases (`q`).
  - It saves 200×200 JPEG data to `tools/photos.json` and writes a report saying which source each photo came from.
  - Items marked `review` get up to 16 candidates in `photo-candidates.json` so a person can pick the right one and save it as `url`.
- `tools/embed_photos.py` converts everything to WebP and writes `photos/img/<hash>.webp` plus `photos/index.js`. Files are named by a hash of the picture, so two cards with the same picture share one file and a changed photo gets a new name.

### Known gaps
- 56 items still use letter tiles (plus a few cards that would repeat a picture on the same board). They are mostly Egyptian brands, radio stations, and a few shows: Bakkar, Sabe' Gar, Yehia w Kenooz, Ismailia Rayeh Gai, Sayedati El Gameela, Ezzay.
- Some Egyptian songs and series still show the singer or star, because no cover or poster exists on Wikipedia:
  - Songs: Khatfoony, Ya Msafer Wahdak, Alf Leila wa Leila, Habibi Dah, Garh Tany, Naweeha, Ya El Midan, Number One, El Bakht
  - Series: Lan Aish fi Gilbab Abi, Gaafar El Omda
  - Plays: Bodyguard
- A real app should license or source these images properly. Wikipedia "fair use" posters and covers are fine for a personal project but not for a commercial app store release.

---

## 5. Technical architecture (current)

- **Page:** `index.html` holds the HTML, CSS and vanilla JavaScript (no framework, no build step).
- **Rounds:** one file per category in `rounds/` (`01-egyptian-football.js` …), each doing `CATS.push({...})`. index.html loads them in number order. To add a category, add a file and run `python3 tools/split_rounds.py`, which refreshes the script tags in index.html and the offline file list in `sw.js`.
- **Photo files:** `photos/index.js` sets `window.PH` (card name → `photos/img/<hash>.webp`).
- **Updates:** publishing stamps `sw.js` with the commit, so an open app learns about a new version and shows a "New version ready · Update" banner.
- **Round format:**
  ```js
  Rd([en question], [ar question], "min"|"max", items, options)
  // item: [English name, value, Arabic name?, Wikipedia title?]
  // options: h (search hint), pre/suf ([en,ar] text around value), dp (decimals),
  //          k ([en,ar] value label on flipped card), g ("p"|"y" endless mix pool),
  //          dt ([en,ar] what the year means), s (subcategory id), m ("eg"|"w")
  ```
- **Menu:** the `GROUPS` array (group emoji, English/Arabic names, subcategories with id, emoji and names).
- **Text:** a `TX` object with `en` and `ar` strings, including functions for plurals and numbers. Arabic numbers are formatted for Arabic.
- **Daily schedule:** `daily.js` lists one round id per day from 19 Oct 2026. After adding or renaming rounds, run `node tools/daily_schedule.js`; it only appends, and a test fails if a round is missing from it.
- **Persistence:** `localStorage` keys `elim_coins, elim_streak, elim_best, elim_endless, elim_duel, elim_prog, elim_seen, elim_img, elim_wiki, elim_lang, elim_region, elim_mute, elim_daily, elim_how, elim_name, elim_players, elim_chdone, elim_off`.
- **Testing:** Playwright checks in `tests/` (`npm test`, all run in CI before publishing; see `tests/README.md`) cover:
  - full play-throughs of every round (in both languages and all regions)
  - mobile layout and overflow
  - duel rules: no repeated pairs, category picks
  - "mixed year" labels and the duplicate-photo guard
  - a check that no Wikipedia calls are needed when the built-in photos are present
- **Publishing:** the page, `rounds/` and `photos/` are published to GitHub Pages on every merge to main.

---

## 6. Turning it into a full app — suggested next steps

1. **Pick the app shell:**
   - **PWA:** fastest, since the game is already a web page. Add a manifest, service worker and icons, and it installs on phones.
   - **Capacitor / Expo:** wrap it for the iOS and Android stores.
   - **React Native / Flutter rewrite:** best native feel, more work.
2. **Split the code:**
   - Move round data out of `index.html` into JSON, one file per group or region.
   - Break the JS into modules: game engine, modes, UI, i18n, storage, audio.
   - Add a build step (Vite).
3. **Content backend (optional):** a CMS or Supabase/Firebase table for rounds and items, so new rounds ship without an app update. The admin side should enforce the fact-check and one-winner rules.
4. **Images:**
   - Host photos on a CDN (one file per item) instead of data URIs.
   - Replace fair-use posters, covers and logos with licensed or original artwork before a store release.
5. **Accounts and social:** sign in, cloud save, leaderboards for Endless and Duel, daily challenge, share-a-result card, and a 2-player pass-and-play duel.
6. **Monetization ideas:** coins already exist. Possible uses are rewarded ads for coins/undos, paid category packs, and removing ads.
7. **More content:** fill the Egypt Games & Consoles subcategory (0 rounds), add more Egyptian song/series rounds, and new question types (who is older, who scored more, which came first).
8. **Quality:**
   - Move the Playwright checks into the repo with CI.
   - Add analytics on which rounds are too easy or too hard.
   - Add accessibility labels for cards.

---

## 7. History (high level)

- **Start:** imported "Eliminate"; bug fixes, effects and progress tracking; Egyptian Arabic; Wikipedia photos; first fact-check; renamed to **Shelhom (شيلهم)**; endless mode; flip-to-reveal cards.
- **Menu and modes:** Egypt / World / Both menu with groups and subcategories; 15 Egyptian rounds; second fact-check; **Duel (ده ولا ده)** mode; 32 new rounds.
- **Duel and Knowledge:** duel category picker and no-repeat pairs; 29 Knowledge rounds (geography, history, animals); photos switched to WebP in separate files (8.5 MB page down to about 135 KB); mixed-year labels.
- **Food, nostalgia and comparisons:** Food & Drinks and Childhood & Nostalgia (Egypt-only, 17 rounds); "who has more / who is taller / who won more Oscars" rounds; 4 Egyptian football "who has more" rounds.
- **v25:** fixed duplicate and missing photos; added the runtime guard against two identical photos on one board.
- **v26:** posters, scenes and album covers for movies, TV shows, cartoons, plays and songs instead of star photos.
- **On GitHub (Oct 2026):** tests in CI and GitHub Pages; installable offline app; Hot potato and Challenge links; two UI polish rounds and a full redesign (frosted glass, Rubik and Baloo Bhaijaan 2 fonts, claw-and-grid icon); 20+ rounds per group (364 now); shuffled round order; photos as separate files and rounds split per category; Egyptian Franco titles and Arabic wording fixes; the Daily round and new home screen with a bottom dock; a full review and its fixes (fixed daily schedule, how-to-play popup, Arabic plurals, clearer leave/skip warnings, yellow knocked-out cards back).
