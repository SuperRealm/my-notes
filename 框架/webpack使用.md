## 需要有的配置环境

- node.js
- webpack

## 简单配置

搭建node环境 yum install node (也可以使用docker安装)

创建一个测试文件夹demo  mkdir demo

初始化项目 cd demo && npm init -y

安装依赖 `npm install webpack webpack-cli css-loader style-loader lodash --save-dev `

进入文件夹创建资源文件夹和输出文件夹 mkdir dist && mkdir src

cd src

vi index.js 将下面的内容输入到index.js文件中

```
import _ from 'lodash'
// 必须 ./style.css
import style from "./style.css"   // 这种情况是 css-loader 中options 中有内容 是模块化的css 否者是 import "./style.css"

function component() {
  // 这里主要做一个事 创建节点并且将导入的css类加入到节点中
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // 也可以使用style['red'] 来调用 
  // 当然 通过数组或者对象来调用red的时候 在下面的css-loader options需要有内容
  // 否则是 element.classList.add("red")
  element.classList.add(style.red)
  return element;
}

document.body.appendChild(component());
```

vi style.css 将红色的样式类加入到style.css文件中

```
.red {
    color: red;
}
```

cd ../dist

vi index.html 并将下面的信息输入到index.html文件中

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>起步</title>
</head>
<body>
<script src="apr.js"></script>
</body>
</html>
cd ../
创建webpack的配置文件 并将下面的信息输入到文件中 vi webpack.config.js

```
const path = require('path');
module.exports = {
    entry: './src/index.js',  // 表示webpack的入口
    output: {
        filename: 'apr.js',  // 表示webpack输出的文件名字叫这个 在本例中在index.html文件中以script的形式进行了引入
        path: path.resolve(__dirname, 'dist'),  // 表示输出到哪一个文件目录
    },
    module: {
        rules: [
            {
                test: /.css$/i,  // 它这里是使用正则来进行匹配所有后缀为css的文件
                use: [
                    {
                        loader: 'style-loader'  // 这里需要注意 style-loader 似乎是需要加入到 css-loader之前的 其主要的作用是将引入的css文件以style标签的形式引入本例的index.html文件中
                    },
                    {
                        loader: "css-loader",  
                        options: {
                            modules: true,       // 这里填true的作用是将所有的css类名进行哈希计算并转化 如果不希望进行转化 删掉options即可
                        },
                    }
                ],

            },
        ],
    },
};
```



在项目根目录执行 命令 npx webpack --config webpack.config.js 执行完成之后即可看到在dist文件夹中多了一个apr.js文件 这个就是打包之后的文件

## 特别需要注意的是 如果是以html模板的形式去执行js函数 可能不会被打包进入apr.js 例如 `<div onclick="textClick(this)">点击</div>` 那么即使你定义了testClick函数 也不会被打包进入apr.js