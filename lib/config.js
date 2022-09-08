'use strict';

const debug = require('debug')('dgnpm:config');
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
const userconfig = path.join(root, '.dgnpmrc');
if (fs.existsSync(userconfig)) {
  let dgnpmrc;
  try {
    dgnpmrc = ini.parse(fs.readFileSync(userconfig, 'utf-8'));
  } catch (err) {
    console.warn('[dgnpm:config] [WARN] read %s ini format error', userconfig);
  }

  if (dgnpmrc && dgnpmrc.proxy) {
    proxy = dgnpmrc.proxy;
  }
}
module.exports = {
  dgnpmHost: 'http://192.168.100.101:4873/',
  dgnpmRegistry: 'http://192.168.100.101:4873/',
  disturl: 'http://192.168.100.101:4873/', // download dist tarball for node-gyp
  cache: path.join(root, '.dgnpm'), // cache folder name
  userconfig,
  proxy,
  prefix,
};
