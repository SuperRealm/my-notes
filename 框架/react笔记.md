

# 1React介绍

## 1.ReactJS 特性简介

React 原本是 Facebook自己内部使用的开发工具。自从 2013 年开源后周边的生态系更是蓬勃发展。ReactJS的出现让前端开发有许多革新性的思维出现，其中有几个重要特性值得我们去探讨：

1. 基于组件（Component）化思考
2. 用 JSX 进行宣告式（Declarative）UI 设计
3. 使用 Virtual DOM
4. Component PropType 防呆机制
5. Component 就像个状态机（State Machine），而且也有生命周期（Life Cycle）
6. 一律重绘（Always Redraw）和单向资料流（Unidirectional Data Flow）
7. 在 JavaScript 里写 CSS：Inline Style

## 2.基于组件化思考

​        在 React 的世界中最基本的单元为组件（Component），每个组件也可以包含一个以上的子组件，并依照需求组装成一个组合式的（Composable）组件，因此具有封装（encapsulation）、关注点分离 (Separation of Concerns)、复用 (Reuse) 、组合 (Compose) 等特性。

​        组件化一直是网页前端开发的圣杯，许多开发者最希望的就是可以最大化重复使用（reuse）过去所写的程式码，不要重复造轮子（DRY）。在 React 中组件是一切的基础，让开发应用程式就好像在堆积木一样。然而对于过去习惯模版式（template）开发的前端工程师来说，短时间要转换成组件化思考模式并不容易，尤其过去我们往往习惯于将 HTML、CSS 和 JavaScript 分离，现在却要把它们都封装在一起。



# 2react开发环境

## 1.webpack_babel_react环境

1.环境安装步骤

1.1安装node.js。去nodejs官网下载：<http://nodejs.cn/download/> 

1.2.安装cnpm。在命令窗口中使用以下命令

npm install -g cnpm --registry=https://registry.npm.taobao.org 

2.HelloWord项目

3.编译 cnpm run build

4.本地打开网页测试

## 2.React 脚手架环境

2.1环境搭建

```js
1安装node.js。去nodejs官网下载：<http://nodejs.cn/download/> 
2.安装cnpm。在命令窗口中使用以下命令
npm install -g cnpm --registry=https://registry.npm.taobao.org 
3.安装create-react-app
cnpm install -g create-react-app
```

2.2创建项目并启动项目

```js
1.命令自动创建项目， 项目的名字为my-app,可以任意
create-react-app my-app
2.命令窗口中进入项目目录
cd my-app
3.启动项目
cnpm start
```

## 3.yarn环境

只要在上面基础上多加一步 "cnpm install yarn -g"之后，就可以使用yarn了。

使用yarn实计上就是使用"yarn start"代替"cnpm start", 并使用"yarn add <模块>"代码"cnpm install  --save  <模块>"

3.1 环境搭建

```js
1安装node.js。去nodejs官网下载：<http://nodejs.cn/download/> 
2.安装cnpm。在命令窗口中使用以下命令
npm install -g cnpm --registry=https://registry.npm.taobao.org 
3.安装create-react-app
cnpm install -g create-react-app
4.cnpm install yarn -g
```

3.2 创建项目并启动项目

```js
1.命令自动创建项目， 项目的名字为my-app,可以任意
create-react-app my-app
2.命令窗口中进入项目目录
cd my-app
3.启动项目
yarn start
```

3.3 yarn的特点

- 速度超快。Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。
- 超级安全。在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
- 超级可靠。使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

## 4.产品打包

1.编译项目
	在package.json里添加 "homepage":"./"
	命令  npm run build
	这会在项目根目录下产生一个build文件目录，该文件目录即其目录下的所有内容就是最终产品，本地可以直接打开的
2.把编译之后的项目托管到node.js服务器上去  

   把build复制到egg项目的public目录, 启动egg项目后，使用下面网址就可以访问到react做的项目

   http://localhost:7001/public/build/index.html

## 5.目录结构

1.package.json

​        管理下载的依赖包,在项目中经常用到的是"react"库，“react-dom” ，最重要的命令是“start”启动项目，"bulid"的作用就是将项目打包。 

2.public文件夹

（1）index.html

​         项目的入口文件，可以引用第三方类库，还可以引入csdn。root是项目的总容器，所有的内容存储在这个容器中。

（2）manifest.json

​        当web页面被用于Android主页面使用时的配置文件 。

3.src文件

（1）index.js

​       存放的是这个项目的核心内容，也就是我们的主要工作区域。其中，index.js文件是和index.html进行关联的文件的唯一接口 

（2）App.js

App类是继承react提供的component ，需要使用render进行渲染 ，return的内容是 jsx 。在这个文件中，只能用一个div容器，如果在div的同级目录添加别的内容，便会报错。 

(3) App.js

## 6.自动生成的项目的项目代码介绍

index.html中内容

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
	  注 : 这里的favicon必须是16*16或者32*32的，必须是8位色或者24位色的，
      		格式必须是png或者ico或者gif。
    <meta name="viewport" content="width=device-width, initial-scale=1" />
	 注: 可视区哉的宽度为设备总宽度，缩放取值1.0则页面按实际尺寸显示，无任何缩放
    <meta name="theme-color" content="#ff0000" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
	 注 :实际上是适配安卓版Chrome状态栏的主题色声明
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
	  注 :这个是实现PWA的配置文件，可以在桌面生成图标，方便下次访问，也可以在断网的情况下继续浏览之前浏览的内容
    <title>React App</title>
  </head>
```

中果是做网页开发，上面head中的内容建议第2和第3个meta



index.js中的内容

其中

import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

也是为了PWA，可省，但是不提昌



# 3组件渲染

## 1.渲染最简单的组件

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<button>点我</button>, document.getElementById('root'));

serviceWorker.unregister();
```

## 2.渲染es5做出的组件

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function getUl() {
  return (
   <ul>
	  <li>苏格拉底</li>
	  <li>老子</li>
	  <li>修莫</li>
	  <li>亚里士多德</li>
   </ul>
  );
}

ReactDOM.render(getUl(), document.getElementById('root'));

serviceWorker.unregister();
```

函数 return同行 后面要有东西才能空行, 我们常常使用一个前括号把要返回的组件括起来.

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function GetUl() {
  return <ul>
	  <li>苏格拉底</li>
	  <li>老子</li>
	  <li>修莫</li>
	  <li>亚里士多德</li>
   </ul>;
}

ReactDOM.render(GetUl(), document.getElementById('root'));

serviceWorker.unregister();
```

被渲染的组件最外层只能是1个元素， 最外层想要有多个元素怎么解决,？使用<> </>当作最外层

```js
function getUl() {
  return(
	<>
		<ul>
			<li>苏格拉底</li>
			<li>老子</li>
			<li>修莫</li>
			<li>亚里士多德</li>
		</ul>
		<div>
			审是
		</div>
	</>
  );
}
```

另外一般都不会在向ReactDOM.render(GetUl(), document.getElementById('root'));中一样去调用GetUl();

而是直接写成ReactDOM.render(<GetUl />, document.getElementById('root'));就可以了，但是要注意，这时，该函数必须是大写开头

## 3.做出es6格式做出的组件

组件名必须大写开头

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class Widget extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <h1> 我是第二个组件 </h1>
		<h1> 我是第二个组件 </h1>
		<h1> 我是第二个组件 </h1>
      </div>
    );
  }
}

ReactDOM.render(<Widget />, document.getElementById('root'));

serviceWorker.unregister();
```

## 4.组件最外层没有标签渲染-React.Fragment

```js
class Widget extends Component {
  render() {
    return (
      <React.Fragment>
            <h1> 我是第二个组件1 </h1>
			<h1> 我是第二个组件1 d</h1>
			<h1> 我是第二个组件1 </h1>
     </React.Fragment>
    );
  }
}
```

  可改为简写形式

```js
class Widget extends Component {
  render() {
    return (
      <>
            <h1> 我是第二个组件1 </h1>
			<h1> 我是第二个组件1 d</h1>
			<h1> 我是第二个组件1 </h1>
      </>
    );
  }
}
```

# 4独立的组件模块

## 1.es5格式

可求导入react

独立的组件的js文件名任意

```js
import React from 'react';

function MyUl() {
  return (
   <ul>
   	  <li>苏格拉底</li>
   	  <li>老子</li>
   	  <li>修莫</li>
   	  <li>亚里士多德</li>
    </ul>
  );
}
export default MyUl;
```

![1573556352632](img/1573556352632.png)

## 2.es6格式

要求导入组件react

在开发中，基本都是使用类来写，并且类名使用大写开头

独立的组件的js文件名任意

```js
//App.js
import React from 'react';

class Widget extends React.Component {
  render() {
    return (
      <div>
            <h1> 我是第二个组件 </h1>
			<h1> 我是第二个组件 </h1>
			<h1> 我是第二个组件 </h1>
      </div>
    );
  }
}

export default Widget;
```

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
//导入相对路径的方式，导入App.js
//.js后缀不写
//组件的名字必须大写开头
import MyWidget from './App';
import * as serviceWorker from './serviceWorker';
 
ReactDOM.render(<MyWidget />, document.getElementById('root'));
serviceWorker.unregister();

```

 

# 5css和img的使用

## 1.public下css文件

public下index.html中要以引用public下的css文件和图片目录下的css和图片是不能被导入到index.html中的

![1573556945081](img/1573556945081.png)

## 2.组件文件的css和图片

在src下面创建的css，可以被组件导入，对组件生效

```css
<!--src/index.css-->
div>h1 {
	background: #999999;
	width: 250px;
}
div>h1:hover {
	background: #888888;
	cursor: pointer;
}
div>h1:active {
	background: #777777;
}
```



```js
//Widget.js
import React from 'react';
import "./index.css"
class Widget extends React.Component {
  render() {
    return (
      <div>
            <h1> 我是第二个组件 </h1>
			<h1> 我是第二个组件 </h1>
			<h1> 我是第二个组件 </h1>
      </div>
    );
  }
}
export default Widget;
```

![1573558978794](img/1573558978794.png)

# 6复杂组件

## 1.简单组合

把自定的组件当成是一个标签来使用就可以了

![1573558586430](img/1573558586430.png)



## 2.复染项目中css的加载

样式都是全局的，所在必须搞清楚样式文件被加载的顺序, 我们最后让顺序为

index.html中导入的css>index.js中导入的css>index.js中导入的css

Home.js中导入的css>widget中导入的css



## 3.组件中自定义函数的使用

组件中可以任意自定义函数，使用this调用

```js
import React from "react";
export default class App extends React.Component {
  getView() {
    let isShow = 3;
    if (isShow === 3) {
      return <div>你是对的</div>;
    } else {
      return <div>错误答案</div>;
    }
  }
  render() {
    return <div>{this.getView()}</div>;
  }
}
```

# 7state

## 1引例

```js
import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    //保存数据
    this.state = {
      title: "你好"
    };
  }

  change() {
    //设置数据
    this.setState({ title: "我很好！", age: 18 });
  }
  render() {
    return (
      <div>
        <h1> {this.state.title} </h1>
        <button onClick={this.change.bind(this)}> 点击按钮 </button>
      </div>
    );
  }
}
```



## 2State介绍

React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

在 React Component 可以自己管理自己的内部 state，并用 this.state 来存取 state。当 setState() 方法更新了 state 后将重新呼叫 render() 方法，重新绘制 component 内容。

## 3设置State数据

```
构造函数中
this.state = {
     title:"你好"
}
```

## 4获得State数据

```
this.state.title
```

## 5bind

bind() 方法与 apply 和 call很相似，也是可以改变函数体内 this 的指向。bind 是返回对应函数，便于稍后调用.

```
 <button onClick={this.change.bind(this)}>点击按钮</button>
```

传参数示例:

```js
import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    //保存数据
    this.state = {
      title: "",
	  age: 16
    };
  }

  change(w, age) {
    //设置数据
    this.setState({ title: w, age: age });
  }
  render() {
    return (
      <div>
        <h1> {this.state.title}我才{this.state.age}岁 </h1>
        <button onClick={this.change.bind(this,"你多少岁,", 18)}> 点击按钮 </button>
      </div>
    );
  }
}
```



## 6改变State数据

setState()方法用于更新组件的状态。 这种方法不会替代状态，而只是添加对原始状态的更改。

```
 this.setState({ title:"我很好！"})
 或
 this.setState(...this.state, title:"我很好")
 
 以上两种写法结果相同 
```

## 7课堂练习

大家按下面示例代码写在程序中，运行分析下面的打印结果

```js
import React from "react";
export default class App extends React.Component {
  constructor() {
    super();
	this.state={
		isShow: true
	}
  }
  show() {  
	 if(this.state.isShow)
		 return <h1> 显示数据</h1>
	 else
		 return <h1> 不显示数据</h1>
  }
  change() {
	 this.setState({
		 isShow:!this.state.isShow
	 }) 
  }
  render() {
    return (
      <div>
          {this.show()}  
		  <button onClick={this.change.bind(this)}>改变</button>
      </div>
    );
  }
}
```

# 8jsx

React 在设计上的思路认为使用Component比起模版（Template）和显示逻辑（Display Logic）更能实现关注点分离的概念，而搭配 JSX 可以实现声明式 Declarative。

​       使用宣告式（Declarative）UI 设计很容易可以看出这个组件的功能。JSX是一种JavaScript的语法扩展。JSX用来声明 React 当中的元素 。

## 1，JavaScript 表达式

```
<button>按钮{1+1}</button>
```

## 2，三元运算

JSX 中不能使用 if else 语句，使用 conditional (三元运算) 表达式来替代 

```
 <h1>{index == 1 ? 'True!' : 'False'}</h1>
```

## 3，属性

在 HTML 中，我们可以透过标签上的属性来改变标签外观样式，在 JSX 中也可以，但要注意 class 和 for 由于为 JavaScript 保留关键字用法，因此在 JSX 中使用 className 和 htmlFor 替代。 

```
 <h1 className="title">{index == 1 ? 'True!' : 'False'}</h1>
```

## 4，Boolean属性

JSX中预设只有属性名称但没设值为 true 

如果把true或false直接在标签中使用时，不要直接写，也不要写成"true", "false", 而要写成{true}, {false}

```js
render() {
    return (
      <div>
       <input type="button" value="不可点" disabled/>
	   <input type="button" value="不可点" disabled={true}/>
       <input type="button" value="可点" disabled={false} />
      </div>
    );
  }
```

## 5，自定义属性

若是希望使用自定义属性，可以使用 data-： 

```
<HelloMessage data-attr="xd" />
定义类名
<Layout className="layout">
```

## 6，样式使用

​        在 JSX 中使用内部样式方法如下，第一个 {} 是 JSX 语法，第二个为 JavaScript 对象。与一般属性值用 - 分隔不同，为驼峰式命名写法： 

```js
<HelloMessage style={{ color: '#FFFFFF', fontSize: '30px'}} />
```

## 7，事件处理



![1573992147782](img/1573992147782.png)



在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后还可以根据应用的状态变化只渲染其中的一部分。

## 8，条件渲染

```js
import React from "react";
export default class App3 extends React.Component {
  constructor() {
    super();
	this.state={
		isShow: true
	}
  }
  show() {  
	 if(this.state.isShow)
		 return <h1> 显示数据</h1>
	 else
		 return <h1> 不显示数据</h1>
  }
  
  render() {
    return (
      <div>
          {this.show()}  
      </div>
    );
  }
}
```



## 9，列表渲染

使用 map() 方法遍历数组

```
List(){
    const listItems = this.state.list.map((item) =>{
        return <li>姓名是{item.name};年龄是{item.age}.</li>
    	}
    );
   return listItems
}
```

显示数据

```
  render() {

        return <div>
            <ul> {this.List()}</ul>
        </div>;

    }
```

## 10，列表设置key值

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串

```
const listItems = this.state.list.map((item) =>{
                return <li key={item.id}>姓名是{item.name};年龄是{item.age}.</li>
        }
);
```



# 9props

## 1、引例1:

```js
//TextView.js
import React from "react";
export default class TextView extends React.Component {
  constructor() {
    super(); 
  }

  render() {
    return (
      <div>
        <h1> {this.props.name} </h1>
      </div>
    );
  }
}

//App.js
import React from "react";
import TextView from "./TextView";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "你好"
    };
  }

  change() {
    this.setState({ title: "我很好！" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TextView name={this.state.title} />
        <button onClick={this.change.bind(this)}> 点击按钮 </button>
      </div>
    );
  }
}
```



## 2，Props

state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

### 2.1.子组件的jsx中获取props

![image-20200831144104912](img/image-20200831144104912.png)



### 2.2.子组件构造函数中获取props

```js
 构造函数中获取
constructor(props) {
    super(props);
    this.state = {
      	//构造函数中获取属性值
      	title: props.title
	};
}
 元素中获取
 <h1>TextView{this.props.title}</h1>
    或
 <h1>TextView{this.state.title}</h1>
```

### 2.3、课常练习

下面代码执行，点击按钮后，为什么有一个地方的数据不变

```js
//TextView.js
import React from "react";
export default class TextView extends React.Component {
  constructor(props) {
    super(props);
	this.state = { 
		name: this.props.name
	}
  }

  render() {
    return (
      <div>
        <h1> {this.props.name} </h1>
		<h1> {this.state.name} :为什么不变</h1>
      </div>
    );
  }
}
```

```js
//App.js
import React from "react";
import TextView from "./TextView";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "你好"
    };
  }

  change() {
    this.setState({ title: "我很好！" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TextView name={this.state.title} />
        <button onClick={this.change.bind(this)}> 点击按钮 </button>
      </div>
    );
  }
}
```

 

## 3，回调机制

 子组件调用父组件的方法



## 4、示例

 <video src="img\react布局.mp4"></video>

### 实现方式1：代码

```js
//App.js
import React from "react";
import "./App.css";

export default class App extends React.Component {
   constructor() {
     super();
     //保存数据
     this.state = {
       content: "content1 content"
     };
   }
  develop() {
	 this.setState({
		 content: this.state.content=="content1 content" ? "content2 content" : "content1 content"
	 })
  }
  change(no) {
	   let one = document.querySelector(".one");
	   let two = document.querySelector(".two");
	   let three = document.querySelector(".three");
	   one.style.display="none";
	   two.style.display="none";
	   three.style.display="none";
	   if(no=="one") {
		  one.style.display="block";
	   }else if(no=="two") {
		  two.style.display="block";
	   }else if(no=="three") {
		  three.style.display="block";
	   }
  }
  render() {
    return (
      <div className="box">
        <div className="top">
			
		</div>
		<div className="bottom">
			<div className="left">
				<div onClick={this.develop.bind(this)} className="head">初等教育</div>
				<div className={this.state.content}>
					<div onClick={this.change.bind(this, "one")}>小学</div>
					<div onClick={this.change.bind(this, "two")}>初学</div>
					<div onClick={this.change.bind(this, "three")}>高学</div>
				</div>				
			</div>
			<div className="right">
				<div className="one">one</div>
				<div className="two">two</div>
				<div className="three">three</div>
			</div>
		</div>
      </div>
    );
  }
}
```

```css
/**App.css**/
.box {
	width: 400px;
	border: 1px solid black;
	margin: 0 auto;
}
.box>.top {
	width: 100%;
	height: 50px;
	border: 1px solid pink;
}
.box>.bottom {
	height: 300px;
	border: 1px solid yellow;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
}
.box>.bottom>.left {
	border-right: 1px solid black;
	flex-grow: 3;
}
.box>.bottom>.right {
	flex-grow: 7;
}
.head {
	background: pink;
	cursor: pointer;
}
.content1 {
	height: 0;
	overflow: hidden;
	transition: height 0.4s;
}
.content2 {
	height: 220px;
	overflow: hidden;
	transition: height 0.4s;
}
.content>div {
   padding-left: 15px;
   cursor: pointer;
}

.box>.bottom>.right>.one,
.box>.bottom>.right>.two,
.box>.bottom>.right>.three{
   background: pink;
   display: none;
   transition: display;
   height: 300px;
}
.box>.bottom>.right>.one {
	background: #ff00aa
}
.box>.bottom>.right>.two {
	background: #ff00ff
}
.box>.bottom>.right>.three {
	background: #ffff00
}
```



### 实现方式2：回调实现--代码

1.项目结构

![image-20200903161925938](img/image-20200903161925938.png)

2.App.css代码

```css
.box {
	width: 400px;
	border: 1px solid black;
	margin: 0 auto;
}

.box>.top {
	width: 100%;
	height: 50px;
	border: 1px solid pink;
}

.box>.bottom {
	height: 300px;
	border: 1px solid yellow;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
}

.box>.bottom>.left {
	border-right: 1px solid black;
	flex-grow: 3;
}

.box>.bottom>.right {
	flex-grow: 7;
}

.head {
	background: pink;
	cursor: pointer;
}

.content1 {
	height: 0;
	overflow: hidden;
	transition: height 0.4s;	
}

.content2 {
	height: 70px;
	overflow: hidden;
	transition: height 0.4s;
}

.content>div {
   padding-left: 15px;
   cursor: pointer;
}

.box>.bottom>.right>.one,
.box>.bottom>.right>.two,
.box>.bottom>.right>.three{
   background: pink;
   transition: display;
   height: 300px;
}

.box>.bottom>.right>.one {
	background: #ff00aa;
}

.box>.bottom>.right>.two {
	background: #ff00ff;
}

.box>.bottom>.right>.three {
	background: #ffff00;
}
```

3.app.js代码

```js
//App.js
import React from "react";
import "./App.css";
import Left from "./view/Left";
import Right from "./view/Right";

export default class App extends React.Component {
    constructor() {
		super();
		this.state={
			flag:""	
		}
    }
  
  change(no) {
	   this.setState({
		   flag:no
	   })
  }
  render() {
    return (
      <div className="box">
        <div className="top">
			
		</div>
		<div className="bottom">
			<Left app={this}/>
			<Right flag={this.state.flag}/>
		</div>
      </div>
    );
  }
}
```

4.Left.js代码

```js
//Left.js
import React from "react";
export default class Left extends React.Component {
  constructor(props) {
    super();
	//保存数据
	this.state = {
	  content: "content1 content"
	};
  }
  develop() {
	 this.setState({
  		 content: this.state.content=="content1 content" ? "content2 content" : "content1 content"
  	 })
  }
  change(no) {
	 this.props.app.change(no);
  }
  render() {
    return (
     <div className="left">
     	<div className="head" onClick={this.develop.bind(this)}>初等教育</div>
     	<div className={this.state.content}>
			<div onClick={this.change.bind(this, "one")}>小学</div>
			<div onClick={this.change.bind(this, "two")}>初中</div>
			<div onClick={this.change.bind(this, "three")}>高中</div>
     	</div>				
     </div>
    );
  }
}
```

5.Right.js

```js
//Right.js
import React from "react";
export default class Right extends React.Component {
  constructor() {
    super(); 
  }

  render() {
    return (
     <div className="right">
     	<div className="one" style={{display:this.props.flag=='one'?'block':'none'}}>one</div>
     	<div className="two" style={{display:this.props.flag=='two'?'block':'none'}}>two</div>
     	<div className="three" style={{display:this.props.flag=='three'?'block':'none'}}>three</div>
     </div>
    );
  }
}
```



# 10路由

> React Router 保持 UI 与 URL 同步。它拥有简单的 API 与强大的功能例如代码缓冲加载、动态路由匹配、以及建立正确的位置过渡处理。 

## 1，安装

[npm](https://www.npmjs.com/) 安装 

```
$ npm install --save react-router-dom
$ npm install --save history
```

React Router 是一个基于 [React](http://facebook.github.io/react/) 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。 

## 2，配置

## 3，js执行跳转

```
this.props.history.push("/first");
```

## 4，query带参数跳转

前提：必须由其他页面跳过来，参数才会被传递过来

（1）HTML方式

```
<Link to={{ pathname: "/view2", query: { id: 88 } }}>
    Link跳转带参数-query
</Link>
```

（2）JS方式

```
this.props.history.push({ pathname: "/view2", query: { id: 89 } });
```

（3）参数接收方式

```
props.location.query.id
```

## 5，示例

（1）app.js中引入文件

```js
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

import Main from "./view1/Main.js";
import First from "./view1/First.js";
import Second from "./view1/Second.js";
 
//要放在import之后
const myHistory = createHashHistory();

export default class App extends React.Component {
	constructor() {
	    super();
	}
	render() {
		 return (
			<Router history={myHistory}>
				<Route exact={true} path="/" component={Main} />
				<Route   path="/First" component={First} />
				<Route   path="/Second" component={Second} />
			</Router>
		);
	}
}
```

注意：这里的`exact`是精确匹配的意思，比如我们有多层路由进行嵌套时，`exact`可以帮助我们精确匹配到你想跳转的路由。exact的值为bool型，为true是表示严格匹配，为false时为正常匹配。

（2）Main.js代码

```js
import React from 'react';
import { Link } from "react-router-dom"; 
export default class App extends React.Component {
  toFirst() {
	  this.props.history.push("/first");
  }
  toSecond() {
	   this.props.history.push({pathname: "/Second", query: { id: 89 } });
  }
  render() {
    return (
      <div>
		这是主页
		<div>
			<button onClick={this.toFirst.bind(this)}>js进入First</button>
			<Link to="/First">Link进入First</Link>
		</div>
		<div>
			<button onClick={this.toSecond.bind(this)}>js进入second</button>
			<Link to={{ pathname: "/Second", query: { id: 88 } }}>
			    Link跳转带参数-query
			</Link>
		</div>
      </div>
    );
  }
}
```

(3)First.js代码

```js
import React from 'react';
import { Link } from "react-router-dom"; 

export default class App extends React.Component {
  render() {
    return (
      <div>
		这是主页First
		<Link to="/">主页</Link>
      </div>
    );
  }
}
```

(4)Second.js代码

```js
import React from 'react';
import { Link } from "react-router-dom"; 

export default class App extends React.Component {
  constructor(props) {
      super(props);
	  this.state= {
		  id: props.location.query.id
	  }
  }
  render() {
    return (
      <div>
		这是主页Second
		<Link to="/">主页</Link>
		<div>参数值为: {this.state.id}, {this.props.location.query.id}</div>
      </div>
    );
  }
}
```

# 11Antd

## 1，Antd引入

 React UI 组件库，主要用于研发企业级中后台产品。

（1）安装框架

```
yarn add antd
或
npm install antd --save
```

（2）在index.js引入css样式

```
方式1：
import "antd/dist/antd.css";

或者

方式2：
在App.css的顶部加入
@import '~antd/dist/antd.css';
再把App.css导入到App.js中 
```

（3）在执行代码引入组件,如下面是导入Button组件

```
import { Button } from "antd";
```

## 2，栅格核心

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。

- 通过`row`在水平方向建立一组`column`（简写 col）
- 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用`.col-8`来创建
- 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列

```
    <Row gutter={48}>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
```



## 3，栅格左右偏移

使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。

```
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
```

## 4Icon图标

<video src="img\怎样得到icon.mp4"></video>

步骤:

1.npm install --save @ant-design/icons  或  yarn add  @ant-design/icons

2.导入和使用

![image-20200908170104946](img\image-20200908170104946.png)

结果为:

![image-20200908170128343](img\image-20200908170128343.png)



## 4，Menu菜单

### 4.1 Menu菜单界面实现

#### (1)使用之前要导入antd的样式和Menu组件

```js
import { Menu} from 'antd';
```

#### (2)Menu中嵌套Item

(2.1)水平

<video src="img\20200909_160841.mp4"></video>

```js
				<Menu mode="horizontal">
					<Menu.Item>中国</Menu.Item>
					<Menu.Item>美国</Menu.Item>
				</Menu>
```
(2.2)垂直

<video src="img\3.mp4"></video>

	<Menu mode="inline">
					<Menu.Item>中国</Menu.Item>
					<Menu.Item>美国</Menu.Item>
				</Menu>
#### (3)Menu中嵌套SubMenu, SubMenu中嵌套Item

(3.1)水平

<video src="img\2.mp4"></video>

```js
				<Menu mode="horizontal">
					<Menu.SubMenu  title={<div>中国</div>}>
						<Menu.Item>北京</Menu.Item>
						<Menu.Item>上海</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu  title={<div>中国</div>}>
						<Menu.Item>北京</Menu.Item>
						<Menu.Item>上海</Menu.Item>
					</Menu.SubMenu>
				</Menu>
```


(3.2)垂直

<video src="img\4.mp4"></video>

			<Menu mode="inline">
					<Menu.SubMenu  title={<div>中国</div>}>
						<Menu.Item>北京</Menu.Item>
						<Menu.Item>上海</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu  title={<div>中国</div>}>
						<Menu.Item>北京</Menu.Item>
						<Menu.Item>上海</Menu.Item>
					</Menu.SubMenu>
				</Menu>


#### (4)嵌套 ItemGroup

<video src="img\6.mp4"></video>



```js
			<Menu mode="horizontal" style={{width: "100px"}}>
				<Menu.SubMenu  title={<div>四川</div>}>
					<Menu.ItemGroup title={<div>成都</div>}>
					  <Menu.Item>双流区</Menu.Item>
					  <Menu.Item>高新</Menu.Item>
					</Menu.ItemGroup>
					<Menu.ItemGroup title={<div>泸州</div>}>
					  <Menu.Item>合江</Menu.Item>
					  <Menu.Item>泸县</Menu.Item>
					  <Menu.Item>古蔺</Menu.Item>
					</Menu.ItemGroup>
				</Menu.SubMenu>
			</Menu>
```
### 4.2 item点击事件处理

1. 在每个<Item>中加入key="value"，每个key的值不相同，否则会有警报
2. 在Menu中加下点击事件，事件处理函数中参数设置为e, e.key就是被点击的Item的key的值
3. 示例如下:

```js
import React from "react"
import "antd/dist/antd.css";
import { Menu} from 'antd';

export default class App extends React.Component {
	test(e) {
		console.log(e.key);
	}
	render() {
		 return(
			<div>
				<Menu mode="horizontal" 
					  style={{width:"500px", backgroundColor:"yellow"}}
					  onClick={this.test.bind(this)}
					  >
					<Menu.Item key="key1">中国</Menu.Item>
					<Menu.Item  key="key2">美国</Menu.Item>
					
					<Menu.SubMenu  title={<div>中国</div>}>
						<Menu.Item  key="key3">北京</Menu.Item>
						<Menu.Item  key="key4">上海</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu  title={<div>中国</div>}>
						<Menu.Item  key="key5">北京</Menu.Item>
						<Menu.Item  key="key6">上海</Menu.Item>
					</Menu.SubMenu>
								 
					<Menu.SubMenu  title={<div>四川</div>}>
						<Menu.ItemGroup title={<div>成都</div>}>
						  <Menu.Item  key="key7">双流区</Menu.Item>
						  <Menu.Item  key="key8">高新</Menu.Item>
						</Menu.ItemGroup>
						<Menu.ItemGroup title={<div>泸州</div>}>
						  <Menu.Item  key="key9">合江</Menu.Item>
						  <Menu.Item  key="key10">泸县</Menu.Item>
						  <Menu.Item  key="key11">古蔺</Menu.Item>
						</Menu.ItemGroup>
					</Menu.SubMenu>
				</Menu>
			</div>
		 )
	}
}
```



### 4.3默认选中与展开



1.默认选中

把defaultSelectedKeys={['key1','key7']}加入到上面示例的<Menu>中去，则key1和key7对应的item会被默认选中



2.默认展开

(1)把上面示例中的下面部分加入key="controy", 和 key="province"。（此处的key的值与点击事件无关）

<Menu.SubMenu key="controy" title={<div>中国</div>}>

<Menu.SubMenu key="province" title={<div>四川</div>}>



(2)把 defaultSelectedKeys={['key1','key7']}和 defaultOpenKeys={['controy', 'province']}加入到上面示例的<Menu>中去，则项目

刚运行出来就是下面的显示效果							 

![image-20200909171607415](img\menu.png)

  完整代码以下:

```js
import React from "react"
import "antd/dist/antd.css";
import { Menu} from 'antd';

export default class App extends React.Component {
	test(e) {
		console.log(e.key);
	}
	render() {
		 return(
			<div>
				<Menu mode="horizontal" 
					  style={{width:"500px", backgroundColor:"yellow"}}
					  onClick={this.test.bind(this)}
					  defaultSelectedKeys={['key1','key7']}
					  defaultOpenKeys={['controy', 'province']}
					  >
					<Menu.Item key="key1">中国</Menu.Item>
					<Menu.Item  key="key2">美国</Menu.Item>
					
					<Menu.SubMenu title={<div>中国</div>}>
						<Menu.Item  key="key3">北京</Menu.Item>
						<Menu.Item  key="key4">上海</Menu.Item>
					</Menu.SubMenu>
					
					<Menu.SubMenu key="controy" title={<div>中国</div>}>
						<Menu.Item  key="key5">北京</Menu.Item>
						<Menu.Item  key="key6">上海</Menu.Item>
					</Menu.SubMenu>
								 
					<Menu.SubMenu key="province" title={<div>四川</div>}>
						<Menu.ItemGroup title={<div>成都</div>}>
						  <Menu.Item  key="key7">双流区</Menu.Item>
						  <Menu.Item  key="key8">高新</Menu.Item>
						</Menu.ItemGroup>
						<Menu.ItemGroup title={<div>泸州</div>}>
						  <Menu.Item  key="key9">合江</Menu.Item>
						  <Menu.Item  key="key10">泸县</Menu.Item>
						  <Menu.Item  key="key11">古蔺</Menu.Item>
						</Menu.ItemGroup>
					</Menu.SubMenu>
				</Menu>
			</div>
		 )
	}
}
```

## 5 布局

1.示例1

​	其中使用的Antd的Menu技术![image-20200910084510005](img\image-20200910084510005.png)

详细代码:

```css
	    /*App.css*/
		* {
			border: 0;
			margin: 0;
			padding: 0;
		}
		.box {
			width: 1000px;
			margin: 0 auto;
		}
		.box>.top {
			width: 100%;
			height: 100px;
			background: pink;
		}
		.box>.middle {
			width: 100%;
			min-height: 300px;
			display: flex;
		}
		.box>.middle>.nav {
			width: 100px;
			min-height: 300px;
		}
		.box>.middle>.content {
			width: 900px;
			min-height: 300px;
		}
		.box>.foot {
			width: 100%;
			height: 50px;
			background: gray;
		}
		.first_div {
			width: 100%;
			height: 100%;
			background: #00D6B2;
		}
		.second_div {
			width: 100%;
			height: 100%;
			background: #008000;
		}
		.three_div {
			width: 100%;
			height: 100%;
			background: #0080ff;
		}
		ul {
			list-style: none;
		}
```
```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
```

```js
//App.js
import React from 'react';
import './App.css';
import Nav from "./Nav.js";
import Middle from "./Middle.js";

export default class App extends React.Component {
	constructor() {
		super();
	    this.state = {
			page:"first"
		}
	}
	changePage(myPage) {
		this.setState({
			page:myPage
		});
	}
	render() {
		return (
			<div className="box">
				<div className="top">
				</div>
				<div className="middle">
					<div className="nav">
						<Nav appObj={this}/>
					</div>
					<div className="content">
						<Middle page={this.state.page}/>
					</div>
				</div>
				<div className="foot">
				</div>
			</div>
		);
	}
}
```

```js
//Nav.js
import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
export default class Nav extends React.Component {
	handleClick(e) {
		// this.props.appObj 表示接收到的App对象
		//使用App对象调用changePage(myPage)方法
		this.props.appObj.changePage(e.key);
	}
	render() {
	    return (
	      <Menu
	        onClick={this.handleClick.bind(this)}
	        style={{ width: 100 }}
	        mode="inline"
	      >
	         <Menu.Item key="first">首一页</Menu.Item>
	         <Menu.Item key="second">第二页</Menu.Item>
			 <Menu.Item key="three">第三页</Menu.Item>
	      </Menu>
	    );
	  }
}
```

```js
//Middle.js
import React from 'react';
import First from './First.js';
import Second from './Second.js';
import Three from './Three.js';
export default class Middle extends React.Component {
	
	getView() {
		let page = this.props.page;
		if(page=="first") {
			return <First />
		}else if(page=="second") {
			return <Second />
		}else if(page=="three") {
			return <Three />
		}
	}
	render() {
		return this.getView();
	}
}
```

```js
//First.js
import React from 'react';
export default class First extends React.Component {
	render() {
		return (
			<div className="first_div">
				<h1>这是首页</h1>
				<ul>
					<li>这是li1</li>
					<li>这是li2</li>
					<li>这是li3</li>
					<li>这是li4</li>
					<li>这是li5</li>
				</ul>
			</div>
		);
	}
}
```

```js
//Second.js
import React from 'react';
export default class Second extends React.Component {
	render() {
		return (
			<div className="second_div">
				<h1>这是第二页</h1>
				<ul>
					<li>函数名.prototype的类型是一个特殊对象</li>
					<li>也可以使用函数创建的对象.constructor.prototype=函数名.prototype</li>
					<li>可以使用prototype.成员=值的形式为该对象加成员</li>
					<li>函数创建的对象，获取值 "对象.成员名" 如果对象中没有该成员，
						就是获取到函数.prototype中的成员，如果prototype中也没有，则
						会再向上找，直到找到或找不到为至
					</li>
					<li>函数创建的对象.成员="值", 为对象增加成员或修改值。
						如果prototype中有同名的成员名，则该对象就访问不到prototype中的同
						同成员了。除非 对象.constructor.prototype.成员才能访问到
					</li>
				</ul>
			</div>
		);
	}
}
```

```js
//three.js
import React from 'react';
export default class Three extends React.Component {
	render() {
		return (
			<div className="three_div">
				<h1>这是第三页</h1>
				<ul>
					<li>华清远见1</li>
					<li>华清远见2</li>
					<li>华清远见3</li>
					<li>华清远见4</li>
					<li>华清远见5</li>
					<li>华清远见6</li>
					<li>华清远见7</li>
					<li>华清远见8</li>
					<li>华清远见9</li>
					<li>华清远见10</li>
				</ul>
			</div>
		);
	}
}
```

2.示例2

## 6 Antd组件布局

Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。

Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。



# 12.axios的使用

1.下载axios

cnpm install axios --save或yarn add axios

2.在js中导入axios

import axios from 'axios';
