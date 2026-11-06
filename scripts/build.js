// Copies the static site (index.html + img/) into dist/ for hosts that expect a build output folder.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, 'dist');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const item of ['index.html', 'img', 'estimate']) {
  fs.cpSync(path.join(root, item), path.join(out, item), { recursive: true });
}

console.log('Built site to dist/');
