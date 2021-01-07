#!/usr/bin/env node

const package = require('../package.json')
const commandHelp = require('../index');


commandHelp.program({name: package.name.replace(/@.+\//, ''), version: package.version})
.option(['-v', '--version'], {action: 'version'})
.option(['-p', '--port'], {metavar: 'port', help: 'specify server port'})
.option(['-a', '--address'], {metavar: 'address', help: 'specify server host'})
.option(['-u', '--proxy-url'], {metavar: 'url', help: 'request through upstream proxy'})
.option(['-f', '--force-host'], {metavar: 'host', help: 'force the netease server ip'})
.option(['-o', '--match-order'], {metavar: 'source', nargs: '+', help: 'set priority of sources'})
.option(['-t', '--token'], {metavar: 'token', help: 'set up proxy authentication'})
.option(['-e', '--endpoint'], {metavar: 'url', help: 'replace virtual endpoint with public host'})
.option(['-s', '--strict'], {action: 'store_true', help: 'enable proxy limitation'})
.option(['-h', '--help'], {action: 'help'})
.parse(process.argv);


/**
1.查询支持的参数列表
node ./test.js --help
2.查询脚本版本号
node ./test.js -v
 */




