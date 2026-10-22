// Runs every check one after another and prints a summary.
// Usage: node tests/run-all.js [--quick | --play] [--retry]
//   --quick  everything except the full play-through (about 5 minutes)
//   --play   only the full play-through (set SHELHOM_SHARD=1/3 to play one part of it)
//   --retry  run a failed check once more; a pass on the second try still passes but is reported as flaky
const {spawnSync} = require('child_process'), path = require('path');
const ALL = ['data-check', 'regions', 'mobile', 'pwa', 'duel', 'duel-categories', 'duel-no-repeats', 'mixed-year-labels', 'same-photo', 'sound', 'multiplayer', 'flaw-fixes', 'undo', 'random-order', 'daily', 'stats', 'endless-levels', 'edge-cases', 'audit-rest', 'full-playthrough'];
const arg = a => process.argv.includes(a);
const list = arg('--quick') ? ALL.filter(t => t !== 'full-playthrough') : arg('--play') ? ['full-playthrough'] : ALL;
const run = t => spawnSync(process.execPath, [path.join(__dirname, t + '.js')], {stdio: 'inherit'}).status === 0;
const failed = [], flaky = [];
for (const t of list) {
  console.log('\n=== ' + t);
  if (run(t)) continue;
  if (arg('--retry')) { console.log('\n=== ' + t + ' (second try)'); if (run(t)) { flaky.push(t); continue } }
  failed.push(t);
}
// In GitHub Actions a flaky check shows as a yellow warning on the run page.
for (const t of flaky) console.log((process.env.GITHUB_ACTIONS ? '::warning::' : 'WARNING: ') + t + ' failed once and passed on the second try (flaky)');
console.log('\n' + (failed.length ? 'FAILED: ' + failed.join(', ') : 'ALL ' + list.length + ' CHECKS PASSED'));
process.exitCode = failed.length ? 1 : 0;
