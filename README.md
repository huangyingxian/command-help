# Command-help

Nodejs command help module

## 项目介绍
类似一些软件提供的命令行帮助文档，如 node -h | --help. python --version 等。本项目提供node 执行脚本时的一个命令帮助工具

## 特性分析
1. dest：要添加到由parse_options（）返回的对象的属性的名称
如果使用者未传入 dest ,cli.option(flags, addition = {}) 时，dest 默认取 flags 数组最后一个命令驼峰后的结果
2. cli.option(flags, addition = {}) 之后的结构体
```js
// 1.基本操作
{
    "action": "help",
    "dest": "help",
    "help": "output usage information",
    "flags": [
        "-h",
        "--help"
    ],
    "positional": false
}
// 2.常用单个参数
{
    "metavar": "address",
    "help": "specify server host",
    "dest": "address",
    "flags": [
        "-a",
        "--address"
    ],
    "positional": false
}
// 2. 使用了 nargs 参数
{
    "metavar": "source",
    "nargs": "+",
    "help": "set priority of sources",
    "dest": "matchOrder",
    "flags": [
        "-o",
        "--match-order"
    ],
    "positional": false
}
```



## 特性

- 1.查询支持的参数列表
```js
node .\test\test.js --help
```

- 2.查询脚本版本号
```js
node .\test\test.js -v
```

