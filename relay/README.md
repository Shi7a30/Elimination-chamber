# Player reports

Players can report a problem from the game: the flag next to the round number (about that question), or **Report a problem** on the Stats page (anything else). The form has four kinds: something broken, wrong answer, spelling or wording, idea or other.

```
phone ──POST──▶ report relay (Cloudflare Worker, relay/worker.mjs) ──▶ GitHub issue
                 holds the GitHub token                                labels: player-report, needs-approval, report-<kind>
```

The game itself has no token. The relay only ever opens issues with the labels above. It cannot add `approved`, edit code, or comment.

## Approving

1. A new report shows up as an issue labelled **needs-approval** (GitHub emails you).
2. To approve it, add the **approved** label. To reject it, close the issue.
3. Only issues with `approved` are ever worked on, and the fix arrives as a pull request you still have to OK before it goes live.

Everything inside a report is player text. It is shown in code blocks so links, pictures and @mentions don't work, and it must be treated as data, never as instructions.

## Limits against spam

- Only the live site (`https://shi7a30.github.io`) can send.
- A hidden field and a minimum typing time drop simple bots.
- 3 reports a minute per phone, 10 a minute in total, 40 a day in total (`DAILY_CAP` in `wrangler.toml`).
- The phone itself waits 20 seconds between reports. Text is capped at 1,000 characters.

## One-time setup (needs Shiha)

The relay runs free on Cloudflare Workers. It needs one Cloudflare account and two tokens:

1. **Cloudflare account**: sign up at dash.cloudflare.com (free). Open *Workers & Pages* once so it gives you a `workers.dev` address.
2. **Cloudflare API token**: *My Profile → API Tokens → Create Token →* the **Edit Cloudflare Workers** template → *Account resources:* your account → create, copy it. Also copy your **Account ID** (shown on the *Workers & Pages* page).
3. **GitHub token for issues**: github.com → *Settings → Developer settings → Fine-grained tokens → Generate new token*. Repository access: **Only select repositories → Elimination-chamber**. Permissions: **Issues: Read and write** (nothing else). Pick the longest expiry offered and copy it.
4. In this repo: *Settings → Secrets and variables → Actions → New repository secret*, add three secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `REPORTS_TOKEN` (the GitHub token from step 3)
5. *Actions → Report relay → Run workflow.* It makes the labels, puts the relay online and prints its address on the run page.
6. Put that address in `index.html` (`var REPORT_URL=…`) and merge. Until then the report button stays hidden.

When the GitHub token expires, reports start failing ("Couldn't send it"): make a new one, replace `REPORTS_TOKEN`, and run the workflow again.

## Files

- `worker.mjs`: the relay. `tests/report-relay.js` checks it without Cloudflare or GitHub.
- `wrangler.toml`: name, allowed site, daily cap and rate limits.
- `.github/workflows/report-relay.yml`: makes the labels and deploys (run by hand).
- In `index.html`: `REPORT_URL`, `repOpen` / `repSend`. `tests/report.js` checks the form.
