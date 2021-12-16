# redux

method → data过多不利于维护

type → 事件 → 逻辑 → type → 派发器 → 数据的更改

## 用到的一些插件

- redux
  - {createStore} ：创建store
  - {compose}：中间件配置
  - {applyMiddleware}：需要使用的中间件数组
  - {combineReducers}：合并reducer

- redux-thunk
  - thunk：使用中间件

- react-redux连接两者
  - {Provider}：整个App的容器
  - {connect}：它将`react`组件预`redux`中的`Store`真正连接在一起

## 一些思路

根据一个又一个事情 → type  → 遇到了type对用的事情 → 出发一个方法的执行

每件事对应的方法集合 <— 需要判断type来触发

- 派发器  → type → method
- dispatch → action type → method

例：

需求：一个数0，实现+和-

1. 2件事 → PLUS/MINUS（action → type → PLUS/MINUS）
2. 2个方法 → plus/minus（原基础+1，原基础-1）
3. store → state {count:0}中央状态管理
4. store.dispatch派发器操作
   - PLUS的type → plus方法		（data → store.state.count+1）
   - MINUS的type → minus方法 （data → store.state.count-1）

- 所以点击button + 时，调用的是dispatch（type → PLUS）
- 所以点击button - 时，调用的是dispatch（type → MINUS）

## 目录结构

```
src
 ├── actions
 |	└── xxx_action.js
 ├── reducers
 |	├── index.js		//合并reducer
 |	└── xxx_reducer.js
 ├── components
 |	└── ...
 ├── services
 |	└── ...
 ├── store.js
 ├── App.js
 └── index.js
```

### ./index.js

```react
import React from 'react';
import ReactDOM from 'react-dom';
//
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//引入store和action
import store from './store';
// import {countAddAction} from './actions/xxx_action';
// import {loadPostsAction} from './actions/xx_action';

// store.dispatch(countAddAction);
// store.dispatch(loadPostsAction);

//通过Provider把redux和react连接，store传递到react项目中
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();

```

### ./store.js

```react
//引入创建Store的方法,后两个处理异步
import {createStore , compose , applyMiddleware} from 'redux';
//使用异步时，使用中间件
import thunk from 'redux-thunk';
//引入合并后的reducer
import rootReducers from './reducers';

const store = createStore(
  rootReducers,
  //中间件配置
  compose(
    applyMiddleware(...[thunk]),//需要使用的中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//配置redux-devtools插件
  ),
)//创建一个storage

export default store;
```

### ./reducers/index.js

```react
//引入合并方法
import { combineReducers } from 'redux';
//引入要合并的reducer
import xxxReducer from './xxx_reducer';
import xxReducer from './xx_reducer';


const rootReducers = combineReducers({
  xxx:xxxReducer,
  xx:xxReducer
})

export default rootReducers;

```

### ./reducers/xxx_reducer.js(静态数据)

```react
const xxxReducer = (state={count:1},action)=>{
  switch(action.type){
    case 'COUNT_ADD':
      return {
        ...state,count:state.count+1
      }
    case 'COUNT_REDUCE':
      return {
        ...state,count:state.count-1
      }
    default:
      return state
  }
}
export default xxxReducer;
```

### ./actions/xxx_action.js(静态数据)

```react
export const countAddAction = {
  type:'COUNT_ADD',
}

export const countReduceAction = {
  type:'COUNT_REDUCE',
}
```

### ./reducers/xx_reducer.js(动态数据)

```react
const xxReducer = (state={list:[{id:1,title:'你好'}]},action)=>{
  switch(action.type){
    case 'LOAD_POSTS':
      return {
        ...state, list:action.payload
      }
    default:
      return state
  }
}
export default xxReducer;
```

### ./actions/xx_action.js(动态数据)

```react
//请求远程数据
import {getPosts} from '../services/xx_api'

export const loadPostsAction = async (dispatch)=>{
  const res = await getPosts()
  dispatch({
    type:'LOAD_POSTS',
    payload: res.data,
  })
}
```

### ./services/xx_api.js(请求数据)

```react
import { get } from 'axios';

//请求数据
export function getPosts(){
  return get('https://jsonplaceholder.typicode.com/posts')
}

```

### ./components/xx.js(组件中使用)

```react
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {loadPostsAction} from '../actions/xx_action'

class PostList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  componentDidMount(){
    this.props.dispatch(loadPostsAction);//远程加载数据
  }

  render() { 
    const{list} = this.props.post;
    const Posts = list.map(post=>{
      return (<li key={post.id}>{post.title}</li>)
    })
    return (  
      <div>
        <ul>{Posts}</ul>
      </div>
    );
  }
}
const mapStateToProps =(state,ownProps)=>{
  return {
    post:state.post
  }
}

//通过connect连接组件和redux数据，传递state数据和dispatch方法
export default connect(mapStateToProps)(PostList) ;
```

