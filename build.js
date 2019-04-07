const { promisify } = require('util');
const unlink = promisify(require('fs').unlink);
const AdmZip = require('adm-zip');
const { name, version } = require('./package.json');

const assets = {
  folders: [
    'dist',
    'icons',
  ],
  files: [
    'manifest.json'
  ]
};

const output = `${name}-${version}.zip`;

async function main() {
  try {
    await unlink(output);
  } catch(e) {}

  const zip = new AdmZip();
  assets.folders.forEach(f => zip.addLocalFolder(f, f))
  assets.files.forEach(f => zip.addLocalFile(f))
  zip.writeZip(output);

  console.log(`File: ${output}`);
}

main();
