'use strict';

const config = require('./config');

module.exports = function outputHelp(argv) {
  const helpInfo = 'Usage: dgnpm [option] <command>\n' +
  'Help: http://dgnpmjs.org/help/dgnpm\n\n' +
  '  Extend command\n' +
  '    web                            open dgnpm web (ex.: dgnpm web)\n' +
  '    check [ingoreupdate]           check project dependencies, add ignoreupdate will not check modules\' latest version(ex.: dgnpm check, dgnpm check -i)\n' +
  '    doc [moduleName]               open document page (ex.: dgnpm doc egg)\n' +
  '    sync [moduleName]              sync module from source npm (ex.: dgnpm sync egg)\n' +
  '    user [username]                open user profile page (ex.: dgnpm user fengmk2)\n' +
  '\n' +
  '  npm command use --registry=' + (argv.registry || config.dgnpmRegistry) + '\n' +
  '    where <command> is one of:\n' +
  '    add-user, adduser, apihelp, author, bin, bugs, c, cache,\n' +
  '    completion, config, ddp, dedupe, deprecate, docs, edit,\n' +
  '    explore, faq, find, find-dupes, get, help, help-search,\n' +
  '    home, i, info, init, install, isntall, la, link, list, ll,\n' +
  '    ln, login, ls, outdated, owner, pack, prefix, prune,\n' +
  '    publish, r, rb, rebuild, remove, restart, rm, root,\n' +
  '    run-script, s, se, search, set, show, shrinkwrap, star,\n' +
  '    start, stop, submodule, tag, test, tst, un, uninstall,\n' +
  '    unlink, unpublish, unstar, up, update, v, version, view,\n' +
  '    whoami\n' +

  '      npm <cmd> -h     quick help on <cmd>\n' +
  '      npm -l           display full usage info\n' +
  '      npm faq          commonly asked questions\n' +
  '      npm help <term>  search for help on <term>\n' +
  '      npm help npm     involved overview\n\n' +

  '      Specify configs in the ini-formatted file:\n' +
  '          ' + (argv.userconfig || config.userconfig) + '\n' +
  '      or on the command line via: npm <command> --key value\n' +
  '      Config info can be viewed via: npm help config';
  console.log(helpInfo);
  process.exit(0);
};
