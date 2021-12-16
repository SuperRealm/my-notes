## JSX

### JSX的特点：

1. 类XML语法容易接受，结构清晰
2. 增强JS语义
3. 抽象程度高，屏蔽DOM操作，跨平台
4. 代码模块化

### JSX基本语法规则：

JSX本身就和XML语法类似，可以定义属性以及子元素。唯一特殊的是可以用大括号来加入JavaScript表达式。遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。

JSX允许HTML和JS混写

## React/JSX基本规则

1. 每个文件只包含一个React组件。**eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless)**；（官方表示在无状态，或者Pure组件允许一个文件包含多个组件）
2. 始终使用JSX语法；
3. 不要始终**React.createElement**方法，除非初始化app的文件不是JSX格式;
4. **react/forbid-prop-types**将允许`arrays`并`objects`只有当它是明确指出什么`array`和`object`包含，使用`arrayOf`，`objectOf`或`shape`。

### Class vs React.createClass vs stateless

1. 如果组件拥有内部的state或者refs时，更推荐使用**class extends Component**，除非有更好的理由使用mixin。**eslint:[`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)**

   ```react
   // bad
   const Listing = React.createClass({
     // ...
     render() {
       return <div>{this.state.hello}</div>;
     }
   });
   
   // good
   class Listing extends React.Component {
     // ...
     render() {
       return <div>{this.state.hello}</div>;
     }
   }
   ```

   如果组件没有拥有内部的state或者refs，那么普通函数(不要使用箭头函数)比类的写法更好：

   ```react
   // bad
   class Listing extends React.Component {
     render() {
       return <div>{this.props.hello}</div>;
     }
   }
   
   // bad (relying on function name inference is discouraged)
   const Listing = ({ hello }) => (
     <div>{hello}</div>
   );
   
   // good
   function Listing({ hello }) {
     return <div>{hello}</div>;
   }
   ```

   

### 命名

1. 拓展名：React组件使用.jsx扩展名；**eslint:[`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)**
2. 文件名：文件名使用帕斯卡命名：HomePage.jsx

```react
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```



3.引用命名：React组件使用帕斯卡命名，引用实例采用驼峰式命名：**eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)**

```react
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

4.使用高阶组件名称和传入组件名称的组合作为`displayName`生成的组件上的名称。例如，高次成分`withFoo()`，通过当组件`Bar`应该产生一个组分与`displayName`的`withFoo(Bar)`。

为什么？组件`displayName`可能会被开发人员工具使用或用于错误消息中，并且具有可以清楚地表达这种关系的值有助于人们了解正在发生的事情。

```react
// bad
export default function withFoo(WrappedComponent) {
  return function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }
}

// good
export default function withFoo(WrappedComponent) {
  function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithFoo.displayName = `withFoo(${wrappedComponentName})`;
  return WithFoo;
}
```

5.Props命名：避免将DOM组件的Props名称用于不同目的

```react
// bad
<MyComponent style="fancy" />

// bad
<MyComponent className="fancy" />

// good
<MyComponent variant="fancy" />
```



### 声明

不要使用`displayName`属性来命名组件，应该使用类的引用名称。

```react
// bad
export default React.createClass({
  displayName: 'ReservationCard',
  // stuff goes here
});

// good
export default class ReservationCard extends React.Component {
}
```



### 对齐

为JSX语法使用下列的对齐方式:**eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) [`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)**

```react
// bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// if props fit in one line then keep it on the same line
<Foo bar="bar" />

// children get indented normally
<Foo
  superLongParam="bar"  
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>

// bad
{showButton &&
  <Button />
}

// bad
{
  showButton &&
    <Button />
}

// good
{showButton && (
  <Button />
)}

// good
{showButton && <Button />}

// good
{someReallyLongConditional
  && anotherLongConditional
  && (
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />
  )
}

// good
{someConditional ? (
  <Foo />
) : (
  <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
  />
)}
```



### 引号

JSX的属性都采用双引号，其他的JS都使用单引号：**eslint:jsx-quotes**。

为什么？常规HTML属性通常也使用双引号而不是单引号，因此JSX属性反映了这一约定。

```react
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```



### 空格

1.始终在自闭和标签前添加一个空格。

2.不要在JSX大括号中加上空格。**react/jsx-curly-spacing**

### Props

1. 属性名称始终使用驼峰命名法。如果属性名称是React组件则使用帕斯卡命名法。

```react
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
```

2.当属性值等于true的时候，省略该属性的赋值。**eslint:react/jsx-boolean-value**

```react
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

3.始终`alt`在`<img>`标签上包含props。如果图像是呈现性图像，`alt`则可以为空字符串或者`<img>`必须具有`role="presentation"`。**eslint:jsx-a11y/alt-text**

4.不要在<img>中的alt使用"image""photo""picture"等词，**eslint: jsx-a11y/img-redundant-alt**

为什么？屏幕阅读器已经声明了img为图片，所以没必要包含这些信息

```react
// bad
<img src="hello.jpg" alt="Picture of me waving hello" />

// good
<img src="hello.jpg" alt="Me waving hello" />
```

### Refs

通常使用回调函数callbacks，**eslint: react/no-string-refs**

```react
// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```

### 括号

使用括号包裹多行JSX标签，**react/wrap-multilines**

```react
// bad
render() {
  return <MyComponent variant="long body" foo="bar">
           <MyChild />
         </MyComponent>;
}

// good
render() {
  return (
    <MyComponent variant="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good, when single line
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```



### 标签

1. 当标签没有子元素的时候，始终使用自闭合的标签：**eslint: react/self-closing-comp**

```react
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```

2.如果控件有多行属性，关闭标签要另起一行。 **eslint: react/jsx-closing-bracket-location**

```react
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```



### 方法

在 render 方法中事件的回调函数，应该在构造函数中进行bind绑定。 **eslint: react/jsx-no-bind**。
为什么这样做? 在 render 方法中的 bind 调用每次调用 render 的时候都会创建一个全新的函数。

1.React 组件的内部方法命名不要使用下划线前缀。

```react
// bad
React.createClass({
  _onClickSubmit() {
    // do stuff
  },

  // other stuff
});

// good
class extends React.Component {
  onClickSubmit() {
    // do stuff
  }

  // other stuff
}
```

2.在render方法中返回一个值

```react
// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
}
```



### 排序

class extends React.Component的顺序：**eslint: react/sort-comp**

1. static静态方法
2. constructor
3. getChildContext
4. componentWillMount
5. componentDidMount
6. componentWillReceiveProps
7. shouldComponentUpdate
8. componentWillUpdate
9. componentDidUpdate
10. componentWillUnmount
11. 以handle开头的事件函数 比如handleSubmit() 或者handleChangeDescription()
12. 点击回调或者事件回调 比如 onClickSubmit() 或者 onChangeDescription()
13. render函数中的 getter 方法 比如 getSelectReason() 或者 getFooterContent()
14. 可选的 render 方法 比如 renderNavigation() 或者 renderProfilePicture()
15. render

怎么定义propTypes, defaultProps, contextTypes等

```react
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

class Link extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
```

### isMounted

弃用isMounted，该设计模式在ES6 class中无法使用，官方在未来版本里删除此方法。



### State

不要直接修改state，如需修改state，使用setState()方法，直接修改不会重新渲染组件

### 避免不必要的render写法

shouldComponentUpdate 钩子函数和 React.PureComponent 类都是用来当 state 和 props 变化时，避免不必要的 render 的方法。shouldComponentUpdate 钩子函数需要自己手动实现浅比较的逻辑，React.PureComponent 类则默认对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。我们推荐使用 React.PureComponent 避免不要的 render。

### State提升

如果多个组件需要反映相同的变化数据，建议将共享状态提升到最近的共同父组件中去；从而依靠自上而下的数据流，而不是尝试在不同组件间同步 state。如果子组件需要获取state值，则父组件通过props传值到子组件。

### 推荐使用Context

如果某个属性需要在不同层级的组件间使用，则通过Context提供共享的方式，而不是通过组件树逐层传递props

### 路由懒加载

通过路由懒加载避免一次性加载所有路由造成性能低下

推荐：

```react
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

不推荐：

```react
import OtherComponent from './OtherComponent';
```

### Ajax使用时机

在componentDidMount生命周期调用，客户端第一次渲染之后，生成了对应的DOm结构，通过this.getDomNode()进行访问，通过在这个方法中，通过setTimeout、setInterval、发送Ajax异步请求等操作。