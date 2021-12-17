function IsPc() {
    let userAgent = navigator.userAgent,Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
    return Agents.some((i)=>{
        return userAgent.includes(i)
    })
}

let state = IsPc();

调用，返回的值是true（移动端）/false（web端）

因为window.onload不支持iphone浏览器