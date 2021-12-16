## 目录结构

![react](D:\学习笔记\wayne\日程\前端开发规范\react.webp)

- assets 目录里面放所有的资源文件。虽然在某些页面里面放上一些图片资源引用起来很方便，但是页面一多就会发现有很多图片是一样的。这时候统一存放资源文件就可以复用一些文件。避免不必要的重复文件占空间。
- components 目录里存放公共的组件。我对于组件的定义是尽量只实现 UI 呈现方面的事情，业务逻辑可以通过事件传递出去，交给 page 和 module 来实现。
- pages 目录里存放路由级别的页面。
  - 由于项目中使用了 redux，所以每个页面会有一个 container 用来获取 redux 数据和定义 dispatch 事件。
  - index 里面承载了大部分页面逻辑的处理，以及页面结构的呈现。
  - model 用于定义 redux state 以及数据操作方式。
  - components 目录用于存放仅仅在本页面中会用到的组件。
- modules 目录里面存放了非路由级别的功能模块。它的目录结构和 pages 目录完全一致。只不过这个目录下的模块不能被路由直接访问到。
- service 目录用于配置和定义 API 接口。
- utils 用于定义公共工具函数。

并且，想了一些原则：

- 所有资源都要存放在同一 assets 目录下，方便复用和查找。
- component 组件（不管是公共的还是页面私有的）尽量不接触业务，仅仅用于 UI 展现。
- page 和 module 通过 container 和 model 来连接 redux 数据，通过 index 来处理大多数页面逻辑。
- 通过 props 和回调函数传递数据尽量不要超过三层。如果一个 prop 属性会存在 A -> B -> C -> D -> E，并且回调函数是从 E 到 A 的，这必然不合理。
- 为了低耦合，尽量少的使用 props 和 events。定义 events 的参数也是也少越好。
- page 不存在 props，module 尽量少定义 props，降低耦合性。
- 一般只在 page 中使用 module，避免 module 中使用其他 module 形成套娃。



## 组件API

设置状态：setState

替换状态：replaceState

设置属性：setProps

替换属性：replaceProps

强制更新：forceUpdate

获取DOM节点：findDomNode

判断组件挂在状态：isMounted (已弃用)