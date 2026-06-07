const extract = require('extract-zip');
const fs = require('fs');
const path = require('path');
const src = 'C:\\Users\\Dell\\AppData\\Local\\electron\\Cache\\020e126cad35e5d7c7aef970b1a4becbc8b14205b2f9a17c0427b97c2867ffe5\\electron-v37.10.3-win32-x64.zip';
const dest = path.resolve('node_modules', 'electron', 'dist');
(async () => {
  try {
    await extract(src, { dir: dest });
    fs.writeFileSync(path.join(dest, 'version'), 'v37.10.3');
    fs.writeFileSync(path.join('node_modules', 'electron', 'path.txt'), 'electron.exe');
    console.log('extracted');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
