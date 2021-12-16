var fnRotationAndScale = function(dom,scale,nTimes,translate){
    if(dom && dom.nodeType==1){
        scale = parseFloat(scale) || 0
        nTimes = parseFloat(nTimes) || 1
        translate = parseFloat(translate) || 0
        if(typeof(scale) == 'number'){
            var rad = scale*(Math.PI/180)
            var m11 = Math.cos(rad)*nTimes,m12=-1*Math.sin(rad)*nTimes,m21=Math.sin(rad)*nTimes,m22=m11
            if(!dom.style.transform){
                dom.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11="+ m11 +",M12="+ m12 +",M21="+ m21 +",M22="+ m22 +",SizingMethod='auto expand')";
            }
            // model
            dom.style.MozTransform = "rotate("+ scale +"deg) scale("+ nTimes +") translateY("+translate+"px)";
            dom.style.WebkitTransform = "rotate("+ scale +"deg) scale("+ nTimes +") translateY("+translate+"px)";
            dom.style.OTransform = "rotate("+ scale +"deg) scale("+ nTimes +") translateY("+translate+"px)";
            dom.style.Transform = "rotate("+ scale +"deg) scale("+ nTimes +") translateY("+translate+"px)";
        }
    }
}