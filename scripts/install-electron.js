const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const electronPath = path.join(projectRoot, 'node_modules', 'electron');
const distPath = path.join(electronPath, 'dist');
const pathTxt = path.join(electronPath, 'path.txt');
const runtimeName = process.platform === 'win32' ? 'electron.exe' : 'electron';
const runtimePath = path.join(distPath, runtimeName);

function exists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

if (process.env.NODE_ENV === 'production') {
  process.exit(0);
}

if (!exists(electronPath)) {
  console.log('Electron package not installed. Skipping Electron postinstall helper.');
  process.exit(0);
}

if (exists(pathTxt) && exists(runtimePath)) {
  console.log('Electron runtime already installed.');
  process.exit(0);
}

console.log('Electron runtime missing. Running Electron install script...');

const installScript = path.join(electronPath, 'install.js');
const result = childProcess.spawnSync(process.execPath, [installScript], {
  cwd: electronPath,
  stdio: 'inherit',
});

if (result.error) {
  console.error('Electron install script failed:', result.error);
  process.exit(1);
}

if (result.status !== 0) {
  console.error('Electron install script exited with status:', result.status);
  process.exit(result.status);
}

console.log('Electron runtime installation completed successfully.');
