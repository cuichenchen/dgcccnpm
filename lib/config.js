'use strict';

const debug = require('debug')('dgcccnpm:config');
const path = require('path');
const fs = require('fs');
const cp = require('child_process');
const ini = require('ini');

let root;
if (process.platform === 'win32') {
  root = process.env.USERPROFILE || process.env.APPDATA || process.env.TMP || process.env.TEMP;
} else {
  root = process.env.HOME || process.env.TMPDIR || '/tmp';
}

let prefix = null;
try {
  prefix = cp.execSync('npm config get prefix').toString().trim();
} catch (err) {
  // ignore it
  debug('npm config cli error: %s', err);
}

let proxy = '';
const userconfig = path.join(root, '.dgcccnpmrc');
if (fs.existsSync(userconfig)) {
  let dgcccnpmrc;
  try {
    dgcccnpmrc = ini.parse(fs.readFileSync(userconfig, 'utf-8'));
  } catch (err) {
    console.warn('[dgcccnpm:config] [WARN] read %s ini format error', userconfig);
  }

  if (dgcccnpmrc && dgcccnpmrc.proxy) {
    proxy = dgcccnpmrc.proxy;
  }
}

module.exports = {
  dgcccnpmHost: 'https://npmmirror.com',
  dgcccnpmRegistry: 'https://registry.npmjs.org/',
  disturl: 'https://npmmirror.com/mirrors/node', // download dist tarball for node-gyp
  cache: path.join(root, '.dgcccnpm'), // cache folder name
  userconfig,
  proxy,
  prefix,
};
