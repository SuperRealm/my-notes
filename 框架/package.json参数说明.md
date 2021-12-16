# [Package.json参数简要说明]

## [生成方式]

- 自己创建 并加入一些参数
- 使用 `npm init` 创建

常见的参数

```bash
name - 根目录文件夹的名字 包名 要想发布的话 
version - 版本号
description - 关于整个项目的描述 方便在 npm search 的时候使用
homepage - 包的主页
author - 作者 里面可能会包含 name email url啥的
dependencies - 生成所需要的环境依赖 请不要将测试或过渡性的依赖放在dependencies
devDependencies - 开发环境依赖 如果有人要使用你的模块，那么他们可能不需要你开发使用的外部测试或者文档框架。在这种情况下，就放这
repository - 仓库的地址 里面可能有类型和地址 type url
main - 定义了文件的入口 如果你包的名字叫foo，然后用户require("foo")，main配置的模块的exports对象会被返回。
```

其他参数

```bash
script - 由脚本命令组成的hash对象，他们在包不同的生命周期中被执行。key是生命周期事件，value是要运行的命令。
bugs - 反馈bug的连接 email啥的
config - 来配置用于包脚本中的跨版本参数。
```