# HTML规范

## HTML/CSS文件命名

确保文件命名总是以字母开头而不是数字，且字母一律小写，以下划线连接且不带其他标点符号，如：

```html
<!-- HTML -->
jdc.html
jdc_list.html
jdc_detail.html

<!-- SASS -->
jdc.scss
jdc_list.scss
jdc_detail.scss
```

## ClassName命名

ClassName的命名应该尽量精短、明确，必须以**字母开头命名**，且**全部字母为小写**，单词之间**统一使用下划线** “_” 连接

## 命名原则

基于姓氏命名法（继承 + 外来），如下图：

![enter image description here](http://labs.qiang.it/ppguide/img/standard_jiapu.png)

祖先模块不能出现下划线，除了是全站公用模块，如 `mod_` 系列的命名：

**推荐：**

```html
<div class="modulename">
	<div class="modulename_info">
		<div class="modulename_son"></div>
		<div class="modulename_son"></div>
		...
	</div>
</div>
	
<!-- 这个是全站公用模块，祖先模块允许直接出现下划线 -->
<div class="mod_info">
	<div class="mod_info_son"></div>
	<div class="mod_info_son"></div>
	...		
</div>
```

**不推荐：**

```html
<div class="modulename_info">
	<div class="modulename_info_son"></div>
	<div class="modulename_info_son"></div>
	...		
</div>
```

在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀

```html
<div class="modulename">
	<div class="modulename_cover"></div>
	<div class="modulename_info"></div>
</div>
```

当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块

**推荐：**

```html
<div class="modulename">
	<div class="modulename_cover"></div>
	<div class="modulename_info">
    	<div class="modulename_info_user">
    		<div class="modulename_info_user_img">
    			<img src="" alt="">
    			<!-- 这个时候 miui 为 modulename_info_user_img 首字母缩写-->
    			<div class="miui_tit"></div>
    			<div class="miui_txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename_info_list"></div>
	</div>
</div>
```

**不推荐：**

```html
<div class="modulename">
	<div class="modulename_cover"></div>
	<div class="modulename_info">
    	<div class="modulename_info_user">
    		<div class="modulename_info_user_img">
    			<img src="" alt="">
    			<div class="modulename_info_user_img_tit"></div>
    			<div class="modulename_info_user_img_txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename_info_list"></div>
	</div>
</div>
```

## 模块命名

全站公共模块：以 `mod_` 开头

```html
<div class="mod_yours"></div>
```

业务公共模块：以 `业务名_mod_` 开头

```html
<div class="paipai_mod_yours"></div>
```

## 常用命名推荐

**注意**：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此

```html
<div class="ad"></div>
```

这种广告的英文或拼音类名不应该出现

另外，**敏感不和谐字眼**也不应该出现，如：

```html
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div> 
<div class="ass"></div> 
<div class="KMT"></div> 
...
```

| ClassName              | 含义                                     |
| :--------------------- | :--------------------------------------- |
| about                  | 关于                                     |
| account                | 账户                                     |
| arrow                  | 箭头图标                                 |
| article                | 文章                                     |
| aside                  | 边栏                                     |
| audio                  | 音频                                     |
| avatar                 | 头像                                     |
| bg,background          | 背景                                     |
| bar                    | 栏（工具类）                             |
| branding               | 品牌化                                   |
| crumb,breadcrumbs      | 面包屑                                   |
| btn,button             | 按钮                                     |
| caption                | 标题，说明                               |
| category               | 分类                                     |
| chart                  | 图表                                     |
| clearfix               | 清除浮动                                 |
| close                  | 关闭                                     |
| col,column             | 列                                       |
| comment                | 评论                                     |
| community              | 社区                                     |
| container              | 容器                                     |
| content                | 内容                                     |
| copyright              | 版权                                     |
| current                | 当前态，选中态                           |
| default                | 默认                                     |
| description            | 描述                                     |
| details                | 细节                                     |
| disabled               | 不可用                                   |
| entry                  | 文章，博文                               |
| error                  | 错误                                     |
| even                   | 偶数，常用于多行列表或表格中             |
| fail                   | 失败（提示）                             |
| feature                | 专题                                     |
| fewer                  | 收起                                     |
| field                  | 用于表单的输入区域                       |
| figure                 | 图                                       |
| filter                 | 筛选                                     |
| first                  | 第一个，常用于列表中                     |
| footer                 | 页脚                                     |
| forum                  | 论坛                                     |
| gallery                | 画廊                                     |
| group                  | 模块，清除浮动                           |
| header                 | 页头                                     |
| help                   | 帮助                                     |
| hide                   | 隐藏                                     |
| hightlight             | 高亮                                     |
| home                   | 主页                                     |
| icon                   | 图标                                     |
| info,information       | 信息                                     |
| last                   | 最后一个，常用于列表中                   |
| links                  | 链接                                     |
| login                  | 登录                                     |
| logout                 | 退出                                     |
| logo                   | 标志                                     |
| main                   | 主体                                     |
| menu                   | 菜单                                     |
| meta                   | 作者、更新时间等信息栏，一般位于标题之下 |
| module                 | 模块                                     |
| more                   | 更多（展开）                             |
| msg,message            | 消息                                     |
| nav,navigation         | 导航                                     |
| next                   | 下一页                                   |
| nub                    | 小块                                     |
| odd                    | 奇数，常用于多行列表或表格中             |
| off                    | 鼠标离开                                 |
| on                     | 鼠标移过                                 |
| output                 | 输出                                     |
| pagination             | 分页                                     |
| pop,popup              | 弹窗                                     |
| preview                | 预览                                     |
| previous               | 上一页                                   |
| primary                | 主要                                     |
| progress               | 进度条                                   |
| promotion              | 促销                                     |
| rcommd,recommendations | 推荐                                     |
| reg,register           | 注册                                     |
| save                   | 保存                                     |
| search                 | 搜索                                     |
| secondary              | 次要                                     |
| section                | 区块                                     |
| selected               | 已选                                     |
| share                  | 分享                                     |
| show                   | 显示                                     |
| sidebar                | 边栏，侧栏                               |
| slide                  | 幻灯片，图片切换                         |
| sort                   | 排序                                     |
| sub                    | 次级的，子级的                           |
| submit                 | 提交                                     |
| subscribe              | 订阅                                     |
| subtitle               | 副标题                                   |
| success                | 成功（提示）                             |
| summary                | 摘要                                     |
| tab                    | 标签页                                   |
| table                  | 表格                                     |
| txt,text               | 文本                                     |
| thumbnail              | 缩略图                                   |
| time                   | 时间                                     |
| tips                   | 提示                                     |
| title                  | 标题                                     |
| video                  | 视频                                     |
| wrap                   | 容器，包，一般用于最外层                 |
| wrapper                | 容器，包，一般用于最外层                 |

## 使用正确的文档类型

文档声明位于HTML文档第一行

```html
<!DOCTYPE html>
```

## HTML书写规范

1. 标签必须合法且闭合，每个块状元素独立一行，内联元素可选

2. HTML标签名、类名、标签属性和大部分属性值统一用小写

3. HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合

4. Title标签

   内容控制56字符以内

   Keywords----Keywords为产品名、专题名、专题相关名词，之间用英文半角逗号隔开

   Description----不超过150个字符，描述内容要和页面内容相关

5. 不要无缘无故添加空行

6. 为每个逻辑功能块添加空行，这样更易于阅读

7. 比较短的代码间不要使用不必要的空行和缩进

8. 冒号与属性值之间添加一个空格

9. 逗号和符号之后使用一个空格

10. 每行最多 80 个字符

11. 只有属性值包含空格时才使用引号

12. 每个属性与值结尾都要使用分号

13. 左花括号与选择器间添加一个空格

14. 将左花括号与选择器放在同一行

15. 不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

16. 在 HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体

17. 统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

18. 元素属性值使用双引号语法，元素属性值可以写上的都写上

19. 纯数字输入框使用 `type="tel"` 而不是 `type="number"`

20. 标签语法无错误，需要符合语义化

21. 标签的自定义属性以`data-`开头，如：`<a href="#" data-num='18'></a>`

22. 除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式

23. 空元素标签都不加 “/” 字符

## 链接

1. 给 `<a>` 标签加上title属性
2. `<a>`标签的`href`属性必须写上链接地址，点击无任何效果`javascript:void(0)`，void操作符可以设置任何输出内容
3. 非本专题的页面间跳转，采用打开新窗口模式：`target="_blank"`

## 图片属性

图片通常使用 **alt** 属性。 在图片不能显示时，它能替代图片显示。

## https协议自适应

### 缺省协议

将调用静态域名 `ossweb-img.qq.com` 以及 `game.gtimg.cn` 的外部请求，写法上一律去掉协议`http:`部分，采用自适应的写法。具体方法如下

如果当前页面使用的是 http 协议，则`//`自动识别并替换为`http://`，如果使用的是 https 协议，则`//`自动识别并替换为`https://`

**优点：**

自适应http和https协议，能根据用户打开页面的方式自动识别请求协议；
当前页面和目标资源同时支持http和https，并支持正在从http升级到https；
对于https页面的内容，浏览器默认会组织非https内容（http协议在https协议的页面里会报错），使用//可以避免这种情况。

**缺点：**

直接打开本地文件调试时，使用的协议是文件协议file://。


## flash

页面禁止使用flash，动画使用video、CSS3、canvas等方式实现，低版本浏览器使用背景图片降级。

## HTML 注释

合理的注释有助于后期维护。

注释可以写在 <!-- 和 --> 中:

较长的的HTML文件，请在板块之间加入注释，使得结构更清晰：

```html
...
<!-- 活动板块 开始 -->
<div class="part-act">
...
</div>
<!-- 活动板块 结束 -->
...
```

## 在 HTML 中载入 JavaScript

使用简洁的语法来载入外部的脚本文件 ( type 属性不是必须的 )