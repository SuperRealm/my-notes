# CSS规范

## 编码

- 样式文件必须写上 @charset 规则，必须在样式文件的第一行首个字符位置开始写，统一使用 “UTF-8”编码
- 字符 @charset “”; 都用小写字母，不能出现转义符，编码名允许大小混写
- 考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。

*推荐：*

```css
@charset "UTF-8";

.jdc{}
```

## 代码风格

### 代码格式化

样式书写一般有两种：一种是紧凑格式 (Compact)

```css
.jdc{ display: block;width: 50px;}
```

一种是展开格式（Expanded）

```css
.jdc{
    display: block;
    width: 50px;
}
```

统一使用展开格式书写样式

### 选择器

- 尽量少用通用选择器 `*`
- 不使用 ID 选择器
- 不使用无具体语义定义的标签选择器

```css
/* 推荐 */
.jdc {}
.jdc li {}
.jdc li p{}

/* 不推荐 */
*{}
#jdc {}
.jdc div{}
```

### 分号

每个属性声明末尾都要加分号；

```css
.jdc {
    width: 100%;
    height: 100%;
}
```

### 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格

逗号分隔的取值，逗号之后一个空格

*推荐：*

```css
.jdc {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

为单个css选择器或新申明开启新行

*推荐：*

```css
.jdc, 
.jdc_logo, 
.jdc_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}
```

颜色值 `rgb()` `rgba()` `hsl()` `hsla()` `rect()` 中不需有空格，且取值不要带有不必要的 0

*推荐：*

```css
.jdc {
    color: rgba(255,255,255,.5);
}
```

属性值十六进制数值能用简写的尽量用简写

*推荐：*

```css
.jdc {
    color: #fff;
}
```

不要为 `0` 指明单位

*推荐：*

```css
.jdc {
    margin: 0 10px;
}
```

### 属性值引号

css属性值需要用到引号时，统一使用单引号

```css
/* 推荐 */
.jdc { 
	font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.jdc { 
	font-family: "Hiragino Sans GB";
}
```

### 属性书写顺序

建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```css
.jdc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

### CSS3浏览器私有前缀写法

CSS3 浏览器私有前缀在前，标准前缀在后

```css
.jdc {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

## 注释

#### 单行注释

注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行

*推荐：*

```css
/* Comment Text */
.jdc{}

/* Comment Text */
.jdc{}
```



#### 模块注释

注释内容第一个字符和最后一个字符都是一个空格字符，`/*` 与 模块信息描述占一行，多个横线分隔符`-`与`*/`占一行，行与行之间相隔两行

*推荐：*

```css
/* Module A
---------------------------------------------------------------- */
.mod_a {}


/* Module B
---------------------------------------------------------------- */
.mod_b {}
```



#### 文件信息注释

在样式文件编码声明 `@charset` 语句下面注明页面名称、作者、创建日期等信息

```css
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
```

## 选择器

1.CSS类名规范

2.禁止层级嵌套选择器过多

3除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式

4除非是样式reset需要，禁止对纯元素选择器设置特定样式，避免样式污染

## reset重置样式

**PC端**

```css
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
ul, ol { list-style: none; }
img { border: 0 none; vertical-align: top; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: none; }
table { border-collapse: collapse; border-spacing: 0; }
strong, em, i { font-style: normal; font-weight: normal; }
ins { text-decoration: underline; }
del { text-decoration: line-through; }
mark { background: none; }
input::-ms-clear { display: none !important; }
body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
a { text-decoration: none; color: #333; }
a:hover { text-decoration: underline; }
```

**移动端**

```css
* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }
img { border: 0 none; vertical-align: top; }
i, em { font-style: normal; }
ol, ul { list-style: none; }
input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }
table { border-collapse: collapse; border-spacing: 0; }
a { text-decoration: none; color: #666; }
body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: -apple-system,Helvetica,sans-serif; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }

```

移动端页面不需要设置微软雅黑、宋体等字体，终端浏览器字体取决于设备上的系统字体。

**淘宝公共样式**

```css
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td, a{ margin:0; padding:0; }
ul, ol { list-style:none; }
a { text-decoration:none;color:#000; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
table { border-collapse:collapse; border-spacing:0; }
.clearfix:after{content:"";display:block;visibility:hidden;clear:both;height:0;}
```

# 图片处理



## 图片命名

### 命名顺序

图片命名建议以以下顺序命名：

**图片业务（可选） +（mod_）图片功能类别（必选）+ 图片模块名称（可选） + 图片精度（可选）**

- 图片业务：
  - pp_：拍拍
  - wx_：微信
  - sq_：手Q
  - jd_：京东商城
  - …

- 图片功能类别：
  - mod_：是否公共，可选
  - icon：模块类固化的图标
  - logo：LOGO类
  - spr：单页面各种元素合并集合
  - btn：按钮
  - bg：可平铺或者大背景
  - …

- 图片模块名称：
  - goodslist：商品列表
  - goodsinfo：商品信息
  - userava tar：用户头像
  - …

- 图片精度：
  - 普清：@1x
  - Retina：@2x | @3x
  - …

如下面例子：

```
公共模块：
wx_mod_btn_goodlist@2x.png
wx_mod_btn_goodlist.png
mod_btn_goodlist.png 

非公共模块：
wx_btn_goodlist@2x.png
wx_btn_goodlist.png
btn_goodlist.png
```

## 交叉业务协作

业务交叉协作的时候，为了避免图片命名冲突，建议图片名加上业务和模块前辍，如拍拍侧和手Q侧的业务交叉合作时，侧栏导航icon雪碧图命名：

```
推荐：
pp_icon_mod_sidenav.png

不推荐：
icon_mod_sidenav.png
```

处理高清图片的时候，命名应该加上图片相应的精度说明

```
推荐：
jdc_logo@1x.png
jdc_logo@2x.png

不推荐：
jdc_logo.png
jdc_logo_retina.png
```

常见的图片格式有 GIF、PNG8、PNG24、JPEG、WEBP，根据图片格式的特性和场景需要选取适合的图片格式。

### GIF

> GIF图象是基于颜色列表的（存储的数据是该点的颜色对应于颜色列表的索引值），最多只支持8位（256色）。GIF文件内部分成许多存储块，用来存储多幅图象或者是决定图象表现行为的控制块，用以实现动画和交互式应用。GIF文件还通过LZW压缩算法压缩图象数据来减少图象尺寸

#### 特性

- 优秀的压缩算法使其在一定程度上保证图像质量的同时将体积变得很小。
- 可插入多帧，从而实现动画效果。
- 可设置透明色以产生对象浮现于背景之上的效果。
- 由于采用了8位压缩，最多只能处理256种颜色，故不宜应用于真彩色图片。

[GIF文档](http://dev.gameres.com/Program/Visual/Other/GIFDoc.htm)

### PNG

> PNG是20世纪90年代中期开始开发的图像文件存储格式，其目的是企图替代GIF和TIFF文件格式，同时增加一些GIF文件格式所不具备的特性。流式网络图形格式(Portable Network Graphic Format，PNG)名称来源于非官方的“PNG’s Not GIF”，是一种位图文件(bitmap file)存储格式，读成“ping”。PNG用来存储灰度图像时，灰度图像的深度可多到16位，存储彩色图像时，彩色图像的深度可多到48位，并且还可存储多到16位的α通道数据。PNG使用从LZ77派生的无损数据压缩算法。

#### 特性

- 支持256色调色板技术，文件体积小。
- 无损压缩
- 最高支持48位真彩色图像以及16位灰度图像。
- 支持Alpha通道的透明/半透明特性。
- 支持图像亮度的Gamma校准信息。
- 支持存储附加文本信息，以保留图像名称、作者、版权、创作时间、注释等信息。
- 渐近显示和流式读写，适合在网络传输中快速显示预览效果后再展示全貌。
- 使用CRC防止文件出错。
- 最新的PNG标准允许在一个文件内存储多幅图像。

[PNG官方站 - PNG General Information](http://www.libpng.org/pub/png/)

### JPEG

> JPEG是一种针对照片视频而广泛使用的一种有损压缩标准方法。这个名称代表Joint Photographic Experts Group（联合图像专家小组）。此团队创立于公元1986年，1992年发布了JPEG的标准而在1994年获得了ISO 10918-1的认定

#### 特性

- 适用于储存24位元全采影像
- 采取的压缩方式通常为有损压缩
- 不支持透明或动画
- 压缩比越高影像耗损越大，失真越严重
- 压缩比在10左右肉眼无法辨出压缩图与原图的差别

### WEBP

> WebP，是一种同时提供了有损压缩与无损压缩的图片文件格式，派生自视频编码格式 VP8，是由Google在购买On2 Technologies后发展出来。WebP最初在2010年发布，2011年11月8日，Google开始让WebP支持无损压缩和透明色的功能，而在2012年8月16日的参考实做libwebp 0.2.0中正式支持

#### 特性

- 同时提供有损压缩和无损压缩两种图片文件格式
- 文件体积小，无损压缩后，比 PNG 文件少了 45％ 的文件大小；有损压缩后，比 JPEG 文件少了 25% - 34% 文件大小
- 浏览器兼容差，目前只支持客户端 Chrome 和 Opera 浏览器以及安卓原生浏览器(Andriod 4.0+)，[WebP兼容性](https://developers.google.com/speed/webp/faq#which_web_browsers_natively_support_webp)

## 图片优化

### 内容图

内容图多以商品图等照片类图片形式存在，颜色较为丰富，文件体积较大

- 优先考虑 JPEG 格式，条件允许的话优先考虑 WebP 格式
- 尽量不使用PNG格式，PNG8 色位太低，PNG24 压缩率低，文件体积大

### 背景图

背景图多为图标等颜色比较简单、文件体积不大、起修饰作用的图片

- PNG 与 GIF 格式，优先考虑使用 PNG 格式,PNG格式允许更多的颜色并提供更好的压缩率
- 图像颜色比较简单的，如纯色块线条图标，优先考虑使用 PNG8 格式，避免不使用 JPEG 格式
- 图像颜色丰富而且图片文件不太大的（40KB 以下）或有半透明效果的优先考虑 PNG24 格式
- 图像颜色丰富而且文件比较大的（40KB - 200KB）优先考虑 JPEG 格式
- 条件允许的，优先考虑 WebP 代替 PNG 和 JPEG 格式

JPG图片必须压缩，一般80%品质即可，保证文字清晰

**PC平台单张的图片的大小不应大于 200KB。**

**移动平台单张的图片的大小不应大于 100KB。**

- 上线的图片都应该经过压缩处理，压缩后的图片不应该出现肉眼可感知的失真区域
- 60质量的JPEG格式图片与质量大于60的相比，肉眼已看不出明显的区别，因此保存 JPEG 图的时候，质量一般控制在60，若保真度要求高的图片可适量提高到 80，图片大小控制在 200KB 以内

### 合理切图

1. 需要变动的文字禁止切到图片中，如果不确定是否需要变动，请咨询接口人
2. 需要程序后台动态生成的图片，如道具图片、头像、奖品，必须单独切割出来
3. 装饰性图片合并成精灵图(CSS Sprites)，减少页面请求

### CSS Sprites VS Data URIs

#### CSS Sprites特点

- 减少请求数
- 加速图片的显示
- 维护更新成本大
- 更多的内存消耗，特别是大体积或有过多空白的 Sprites 图
- 图片渗漏，相邻的不需展示的图片有可能出现在展示元素中，特别是在高清设备移动设备上

#### Data URIs（base64编码）

- 减少请求数
- 转换文件体积大，大约比原始的二进制大33%
- IE6 / IE7 不支持
- 图片显示相对较慢，需要更多的CPU消耗

### CSS Sprites 使用建议

- 适合使用频率高更新频率低的小图标
- 尽量不留太多的空白
- 体积较大的图片不合并
- 确保要合并的小图坐标数值和合并后的 Sprites 图尺寸均为偶数

### Data URIs（base64编码）使用建议

- 适合更新频率高的小图片，如某些具备自定义功能的标题icon等
- 转换成 Base64 编码的图片应小于 2KB
- 移动端不使用 Base64 编码
- 要兼容 IE6/IE7 的不使用

### 图片地址分离

专题完成，需进行图片地址分离

把图片放到`ossweb-img`文件夹里面，图片引用的时候src为`game.gtimg.cn`域名下的特定地址。
分离后示例：

```css
/*分离前*/
.bg{background: url(ossweb-img/hd.jpg) no-repeat;}
/*分离后*/
.bg{background: url(//game.gtimg.cn/images/xiangqi/cp/a20150730avatar/hd.jpg) no-repeat;}
```

图片必须分离；css文件、js文件可视情况，不是必须分离。

为了本地正常预览，**分离前**文件请使用相对路径或补全`http://`

### 如何知道分离路径

1. 百度搜索官方域名，找到官网地址，确保一级域名
2. 查看官网首页源码样式表中的图片的地址，确认其中含有上一步得到的项目名；否则请找接口人确认
3. 图片分离地址示例：`//game.gtimg.cn/images/peng/cp/a20090817booking/`，其中`peng`就是项目名的简写
4. 分离地址只有**项目名**和**专题名**需要修改
5. 图片跨域问题的解决：设置图片`crossOrigin`属性为`Anonymous`，同时把图片域名`game.gtimg.cn`换为`ossweb-img.qq.com`

## 注释与命名

### 注释

页面头部需要添加制作时间等信息。

在head区域中，title标签下方的注释，按照下方格式分别加上页面设计、页面制作的公司名称，创建的年-月-日

```html
<head>    
    <title>页面名称-产品中文全称-官方网站-腾讯游戏-产品slogan</title>
     <!-- 页面设计：公司名称 | 页面制作：公司名称 | 创建：2017-09-09  -->
</head>
```

图片命名

1. 图片名称必须小写，禁止使用特殊字符、中文

2. 使用英文或拼音缩写，禁止特殊字符

3. 名称间隔使用`-`符号

4. 命名需要能体现图片的大概用途

   常用示例：

   ```css
   bg.jpg          //背景图片
    mod-bg.jpg      //模块背景
    sprites.png     //精灵图
    btn-start.png   //开始按钮
    ico-play.png    //修饰性图片
   ```
