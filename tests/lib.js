// Shared bits for the Playwright checks: where the game page is, where screenshots go, a test image, and pass/fail reporting.
const fs = require('fs'), path = require('path'), {pathToFileURL} = require('url');

// The game page: tests/../index.html, or set SHELHOM_PAGE to another copy.
const PAGE = pathToFileURL(path.resolve(process.env.SHELHOM_PAGE || path.join(__dirname, '..', 'index.html'))).href;

const SHOTS = path.join(__dirname, 'screenshots');
fs.mkdirSync(SHOTS, {recursive: true});
const shot = name => path.join(SHOTS, name);

// a small red square, used as a stand-in photo
const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAAL0lEQVR4nO3NMQ0AAAgDsCmZfynIwgQJT5P+zbQvIhaLxWKxWCwWi8VisVgsFt9ZEe9ZW8NE4AYAAAAASUVORK5CYII=', 'base64');

// Print PASS or the list of problems, and set the exit code so run-all.js can tell.
function finish(name, problems) {
  problems = problems.filter(Boolean);
  if (problems.length) {
    console.log('FAIL ' + name + ':\n  ' + problems.join('\n  '));
    process.exitCode = 1;
  } else console.log('PASS ' + name);
}

module.exports = {PAGE, shot, PNG, finish};
