// Runs every check one after another and prints a summary. Usage: node tests/run-all.js [--quick]
// --quick skips the full play-through (about 5 minutes).
const {spawnSync} = require('child_process'), path = require('path');
const ALL = ['data-check', 'regions', 'mobile', 'pwa', 'duel', 'duel-categories', 'duel-no-repeats', 'mixed-year-labels', 'same-photo', 'sound', 'multiplayer', 'flaw-fixes', 'undo', 'random-order', 'daily', 'stats', 'endless-levels', 'full-playthrough'];
const list = process.argv.includes('--quick') ? ALL.filter(t => t !== 'full-playthrough') : ALL;
const failed = [];
for (const t of list) {
  console.log('\n=== ' + t);
  const r = spawnSync(process.execPath, [path.join(__dirname, t + '.js')], {stdio: 'inherit'});
  if (r.status !== 0) failed.push(t);
}
console.log('\n' + (failed.length ? 'FAILED: ' + failed.join(', ') : 'ALL ' + list.length + ' CHECKS PASSED'));
process.exitCode = failed.length ? 1 : 0;
