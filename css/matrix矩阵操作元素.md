## matrix矩阵

[MDN-matrix](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix())

可以通过matrix进行[倾斜](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/skew())、[缩放](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scale())、[平移](https://developer.mozilla.org/zh-CN/docs/Web/CSS/translate)、[旋转](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate())

### 二维矩阵

```css
matrix(a, b, c, d, tx, ty)
```

### 三维矩阵

```css
matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)
```

### 函数代表含义：

```css
matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )
```

| 参数       | 含义        |
| ---------- | ----------- |
| scaleX     | X轴缩放倍数 |
| scaleY     | Y轴缩放倍数 |
| skewX      | X轴倾斜角度 |
| skewY      | Y轴倾斜角度 |
| translateX | X轴移动     |
| translateY | Y轴移动     |
| rotateX    | X轴旋转     |
| rotateY    | Y轴旋转     |

### css矩阵变换

变换工具：[Translator](http://www.useragentman.com/IETransformsTranslator/)

封装transform.js

```javascript
var fn = function(dom,rotate,scale,translate){
	if(dom && dom.nodeType == 1){
		rotate = parseFloat(rotate) || 0
		scale = parseFloat(scale) || 1
		translate = parseFloate(translate) || 0
		if(typeof(rotate) == 'number'){
            var sin = scale*(Math.PI/180)
		   var m11 = Math.cos(sin)*scale,
               m12 = Math.sin(sin)*scale,
               m21 = m12,
               m22 = m11
           if(!dom.style.transform){
               dom.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11="+ m11 +
                   ",M12="+ m12 +",M21="+ m21 +",M22="+ m22 +",SizingMethod='auto expand')"
           }
            dom.style.MozTransform = "rotate("+ rotate +"deg) scale("+ scale +") translateY("+translate+"px)";
            dom.style.WebkitTransform = "rotate("+ rotate +"deg) scale("+ scale +") translateY("+translate+"px)";
            dom.style.OTransform = "rotate("+ rotate +"deg) scale("+ scale +") translateY("+translate+"px)";
            dom.style.Transform = "rotate("+ rotate +"deg) scale("+ scale +") translateY("+translate+"px)";
        }
	}
}
```

