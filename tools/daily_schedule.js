// Keeps daily.js, the Daily round schedule, up to date: one round per day, written down once so adding rounds never moves a day.
// Run it after adding or renaming rounds:  node tools/daily_schedule.js
// It only ever adds rounds to the end of the list (in a fixed shuffled order), so every day already in the list stays the same.
// A renamed round gets a new entry at the end; its old day falls back to a fixed stand-in round (see dailyRound in index.html).
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');

// load the rounds the same way index.html does
const ctx = {console};
vm.createContext(ctx);
const page = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
vm.runInContext(page.match(/function Rd\([\s\S]*?var CATS=\[\];/)[0], ctx);
for (const f of page.match(/src="rounds\/[^"]+\.js"/g).map(s => s.slice(5, -1)))
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx);

// round keys and hashes, as in index.html
const KEYS = {}, ALL = [];
ctx.CATS.forEach(c => c.r.forEach(r => {
  r.key = c.n + '|' + r.q[1]; if (KEYS[r.key]) r.key += '|' + r.q[0]; KEYS[r.key] = 1; ALL.push(r);
}));
function hk(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
function rng(a) { return function () { a = a + 0x6D2B79F5 | 0; let x = Math.imul(a ^ a >>> 15, 1 | a); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; }; }
function shuffle(a, R) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const byKey = (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;

const FILE = path.join(ROOT, 'daily.js');
let list = [];
if (fs.existsSync(FILE)) list = fs.readFileSync(FILE, 'utf8').match(/"([^"]*)"/)[1].split(' ').filter(Boolean);
const have = new Set(list);
// the first list is the order the game used before the schedule was written down, so no day changes
const fresh = shuffle(ALL.filter(r => !have.has(hk(r.key))).sort(byKey), rng(20261019 + list.length));
list = list.concat(fresh.map(r => hk(r.key)));

fs.writeFileSync(FILE,
  '// The Daily round schedule: day 1 (19 Oct 2026) plays the first round, day 2 the second, and so on, then it starts over.\n' +
  '// Each entry is a round\'s short id. Made by tools/daily_schedule.js; it only ever adds to the end, so no day already listed changes.\n' +
  'var DAILY="' + list.join(' ') + '".split(" ");\n');
console.log(list.length + ' days in the schedule, ' + fresh.length + ' added');
