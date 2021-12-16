1.webpack创建文件

1.1.创建文件webpackDemo

1.2.初始化文件配置信息npm init -y

1.3.cnpm i -D webpack@3

1.4.新建webpack.config.js

1.5.配置webpack.config.js

```js
module.exports = {
    entry: './index.js',
    output: {
    	filename:'./test.js'
    }
}
```

2.ES6和Babel转码（ES5）

2.1cnpm i -D babel-core

2.2cnpm i -D babel-preset-env babel-preset-stage-0；

2.3TC39 将提案分为以下几个阶段:
Stage 0 - 稻草人: 只是一个想法，可能是 babel 插件。
Stage 1 - 提案: 初步尝试。
Stage 2 - 初稿: 完成初步规范。
Stage 3 - 候选: 完成规范和浏览器初步实现。
Stage 4 - 完成: 将被添加到下一年度发布。

2.4node babelTest.js

控制台输出(function () () )

ES6箭头函数转换成ES5



3.webpack+Bable构建ES6开发平台

3.1webpack.config.js

```js
module.exports = {
	entry:'./index.js',
	output:'./test.js',
	module:{
	rules: [
		{
			test:/\.js$/,
			use:'babel-loader'
		}
	]
	}
}
```

3.2.1使用 Babel 提供的方法：

通过 Babel 目录下的 .babelrc 配置文件完成配置（直接创建 .babelrc 文件可能会有命名规范的问题，可以通过 VS Code、Sublime 等编辑器创建该文件）。这里的 .babelrc 就类似于 webpack.config.js 的作用，只是 .babelrc 文件是在 babel-loader 执行的过程中使用的。
.babelrc

3.2.2使用 webpack 提供的方法：

在 webpack.config.js 的 module.rules 规则中，我们还可以通过使用 loader 语法配置 Babel 的 presets：
webpack.config.js

4.开发环境--本地搭建服务器

开发环境、测试环境、生产环境

1. 在开发环境需要的是提高开发效率，所以会需要错误跟踪调试、自动编译、热替换（HMR）、代理（proxy）和本地数据 Mock 等等；
2. 测试环境需要的是模拟线上环境，所以一般是克隆一份生产环境的配置，并利用一些测试工具运行测试用例；
3. 生产环境需要将代码提交到线上，是直接面向用户的，这就要求我们打包的代码有更小的体积、更快的加载速度，所以打包的重点是代码压缩、拆分、合并等优化操作。

4.1webpack --watch

webpack 启动了一个监听服务。

但是每次需要刷新页面

4.2webpack-dev-server

解决手动刷新页面的问题

1. 通过 cnpm 安装模块：cnpm i --save-dev webpack-dev-server@2。（webpack-dev-server@3.1.0 只支持 webpack v4）

2. 修改 webpack.config.js：安装 webpack-dev-server 以后，我们需要在 webpack.config.js 中通过 [devServer](https://link.segmentfault.com/?url=https%3A%2F%2Fdoc.webpack-china.org%2Fconfiguration%2Fdev-server%2F) 配置服务启动的环境。修改 webpack.config.js 文件

3. 1）将 output.filename 修改为 './dist/test.js'；（2）新增 devServer，并配置资源路径为输出文件的位置 './dist'；

   当前目录执行服务启动命令：webpack-dev-server

4. 界面显示Cannot GET/，因为webpack-dev-server会默认打开资源目录./dist下面的index.html文件，但是只配置了output输出文件为./dist/test.js，在dist目录下生成index.html文件，使用HtmlWebpackPlugin创建html文件

   安装：cnpm i -D html-webpack-plugin

   启用：

   ```js
   plugins:[
   	new HtmlWebpackPlugin()
   ]
   ```

   重启webpack-dev-server

5. ```js
   module.exports = {
   	entry:'./index.js',
       output: {
           filename:'./dist/test.js'
       },
       module: {
           rules:[
               {
                   test:/\.js$/,
                   use:'babel-loader'
               }
           ]
       },
       //配置webpack-dev-server
       devServer: {
           contentBase:'./dist'
       },
       plugins:[
           new HtmlWebpackPlugin()，
           new WebpackBrowserPlugin({
           	url:'http://localhost',
           	port:8080
           })
       ]
   }
   ```

   

   5.webpack-dev-server优化

   5.1自动打开浏览器（npm test、npm stop、npm restart）

   "start":"webpack-dev-server --open"

   npm start

   5.2使用node.js结合webpack-dev-server

   node.js API新建一个webpack-dev-server服务器

   新建一个server.js

   ```
   const webpackDevServer = require('webpack-dev-server');
   const webpack = require('webpack');
   
   const config = require('./webpack.config.js');
   const compiler = webpack(config)
   
   const server = new webpackDevServer(compiler,{});
   server.listen(8080,'localhost',() => {
   	console.log('dev server listeren on port 8080');
   });
   ```

   "start":"node server.js"

   5.3启动之后的问题

   服务器启动后浏览器不会自动打开

   解决方案：引入webpack-browser-plugin

   cnpm i --save-dev webpack-browser-plugin

   ```js
   plugins:[
           new HtmlWebpackPlugin()，
           new WebpackBrowserPlugin({
           	url:'http://localhost',
           	port:8080
           })
       ]
   ```

   npm start

   修改index.js之后会重新编译，但是浏览器不会刷新

   解决方案：webpack-config.js中entry中添加webpack-dev-server/client?http://localhost:8080

6. webpack-dev-middleware

第三种本地启动服务的方式是使用webpack-dev-middleware

webpack-dev-middleware 是 webpack-dev-server 内部使用的一个容器可以把 webpack 处理后的文件传递给一个服务器。我们可以通过 express 配合使用 webpack-dev-middleware 来搭建本地服务。

1. 安装 express、webpack-dev-middleware：cnpm i --save-dev express webpack-dev-middleware@2；（webpack-dev-middleware@3.1.0 只支持 webpack v4）

2. 新建 server.js 文件，用来配置 express 服务器：

   ```
   const express = require('express')
   const webpack = require('webpack')
   const webpackDevMiddleware = require('webpack-dev-middleware')
   
   const app = express()
   const webpackConfig = require('./wepack.config.js')
   /*将webpack-dev-middleware配置到express中*/
   app.use(webpackDevMiddleware(webpack(webpackConfig),{}))
   /*监听3000端口*/
   app.listen(3000,() => {
   	console.log('server listen on port 3000\n')
   })
   ```

   

3. 修改 package.json scripts，增加 npm run server 命令：

   "server":"node server.js"

4. 执行 npm run server 启动 express 服务器；

5. 打开浏览器输入网址 [http://localhost](https://link.segmentfault.com/?url=http%3A%2F%2Flocalhost):3000，程序运行正常；

6. 修改 index.js；

   ```
   var w = 'world'
   var h = `hello ${w}`
   settimeout(() => {
   	alert(h)
   },1000);
   ```

   

7. express 服务器自动编译，但是浏览器不会自动刷新，手动刷新浏览器，更新成功：