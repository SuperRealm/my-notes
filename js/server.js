// 本地服务器localhost:3000代替file打开html文件
var http = require('http');

var fs = require('fs');
// apr.js
// var documentRoot = 'D:/work/my-app/apr.js/dist';
// localhost:8888/index.html

// three.js
var documentRoot = 'D:/work/my-app/three.js'
// localhost:8888/three.html

// 鼠标交互
// var documentRoot = 'D:/work/my-app/transform'
// localhost:8888/transform.html
// localhost:8888/transform1.html

var server = http.createServer(function(req,res){
    var url = req.url;
    var file = documentRoot + url
    fs.readFile(file,function(err,data){
        if(err){
        res.writeHeader(404,{
            'Content-Type':'text/html;Charset:"UTF-8"'
        });
        res.write('<h1>404错误</h1>')
        res.end();
    }else{
        res.writeHeader(200,{
            'Content-Type' : 'text/html;Charset="UTF-8"'
        });
        res.write(data);
        res.end();
    }
    })
}).listen(8888)
console.log('服务器启动成功')