# SCSS规范



## 语法选用

SASS有两种语法格式，一种是 SCSS (Sassy CSS)，另一种是缩进格式（Indented Syntax），有时称之为 Sass

考虑到 SCSS 语法对 CSS 语法友好的兼容性和扩展性，我们在使用 SASS 编写样式的时候，统一使用 SCSS 语法

严格遵守上面 “CSS规范” 中的 [“编码规范”](https://guide.aotu.io/docs/css/code.html)

更多关于 SASS 编码：[SASS Encodings](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## SASS注释规范

SASS支持 CSS 标准的多行注释 `/* */`，同时也支持单行注释 `//`。

- 多行注释在使用非 Compressed 模式进行编译后的输出文件中会保留下来，单行注释 `//` 侧会被移除
- 多行注释和单行注释在 SASS 编译后输出的压缩 CSS 文件都会被移除
- 注释内容可以加入 SASS 变量
- 全部遵循 CSS 注释规范
- 不使用 `/*! */` 注释方式
- 注释内不放 SASS 变量

标准的注释规范如下：

```scss
@charset "UTF-8";

/**
 * @desc File Info
 * @author liqinuo
 * @date 2015-10-10
 */

/* Module A
----------------------------------------------------------------*/
.mod_a {}

/* module A logo */
.mod_a_logo {}

/* module A nav */
.mod_a_nav {}


/* Module B
----------------------------------------------------------------*/
.mod_b {}

/* module B logo */
.mod_b_logo {}

/* module B nav */
.mod_b_nav {}
```

## 嵌套规范

### 选择器嵌套

```scss
/* CSS */
.jdc {}
body .jdc {}

/* SCSS */
.jdc {
    body & {}
}
/* CSS */
.jdc {}
.jdc_cover {}
.jdc_info {}
.jdc_info_name {}

/* SCSS */
.jdc {
    &_cover {}
    &_info {
        &_name {}
    }
}
```

### 属性嵌套

```scss
/* CSS */
.jdc {
    background-color: red;
    background-repeat: no-repeat;
    background-image: url(/img/icon.png);
    background-position: 0 0;
}

/* SCSS */
.jdc {
    background: {
        color: red;
        repeat: no-repeat;
        image: url(/img/icon.png);
        position: 0 0;
    }
}
```

## 变量

可复用属性尽量抽离为页面变量，易于统一维护

```scss
// CSS
.jdc {
    color: red;
    border-color: red;
}

// SCSS
$color: red;
.jdc {
    color: $color;
    border-color: $color;
}
```

## 混合(mixin)

根据功能定义模块，然后在需要使用的地方通过 `@include` 调用，避免编码时重复输入代码段

```scss
// CSS
.jdc_1 {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.jdc_2 {
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

// SCSS
@mixin radius($radius:5px) {
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
.jdc_1 {
    @include radius; //参数使用默认值
}
.jdc_2 {
    @include radius(10px);
}



// CSS
.jdc_1 {
    background: url(/img/icon.png) no-repeat -10px 0;
}
.jdc_2 {
    background: url(/img/icon.png) no-repeat -20px 0;
}

// SCSS
@mixin icon($x:0, $y:0) {
    background: url(/img/icon.png) no-repeat $x, $y;
}
.jdc_1 {
    @include icon(-10px, 0);
}
.jdc_2 {
    @include icon(-20px, 0);
}
```

## 占位选择器 %

如果不调用则不会有任何多余的 css 文件，占位选择器以 `%` 标识定义，通过 `@extend` 调用

```scss
//scss
%borderbox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.jdc {
    @extend %borderbox;
}
```

## extend 继承

```scss
// CSS
.jdc_1 {
    font-size: 12px;
    color: red;
}
.jdc_2 {
    font-size: 12px;
    color: red;
    font-weight: bold;
}

// SCSS
.jdc_1 {
    font-size: 12px;
    color: red;
}
.jdc_2 {
    @extend .jdc_1;
    font-weight: bold;
}

// 或者
%font_red {
    font-size: 12px;
    color: red;
}
.jdc_1 {
    @extend %font_red;
}
.jdc_2 {
    @extend %font_red;
    font-weight: bold;
}
```

## for 循环

```scss
// CSS
.jdc_1 {background-position: 0 -20px;}
.jdc_2 {background-position: 0 -40px;}
.jdc_3 {background-position: 0 -60px;}

// SCSS
@for $i from 1 through 3 {
    .jdc_#{$i} {
        background-position: 0 (-20px) * $i;
    }
}
```

注意：`#{}` 是连接符，变量连接使用时需要依赖

## each 循环

```scss
// CSS
.jdc_list {
    background-image: url(/img/jdc_list.png);
}
.jdc_detail {
    background-image: url(/img/jdc_detail.png);
}

// SCSS
@each $name in list, detail {
    .jdc_#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
    }
}


// CSS
.jdc_list {
    background-image: url(/img/jdc_list.png);
    background-color: red;
}
.jdc_detail {
    background-image: url(/img/jdc_detail.png);
    background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
    .jdc_#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
        background-color: $color;
    }
}
```

## function 函数

```scss
@function pxToRem($px) {
    @return $px / 10px * 1rem;
}
.jdc {
    font-size: pxToRem(12px);
}
```

## 运算规范

运算符之间空出一个空格

```scss
.jdc {
    width: 100px - 50px;
    height: 30px / 5;
}
```

注意运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意

```scss
// 正确的运算格式
.jdc {
    width: 100px - 50px;
    width: 100px + 50px;
    width: 100px * 2;
    width: 100px / 2;
}
```

# 