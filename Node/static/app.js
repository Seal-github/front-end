// 创建网站服务器模块
const http = require('http');
// 内置方法
const url =require('url');
// app是对象服务器对象
const app = http.createServer();
// 
const path = require('path');
// 
const fs = require('fs');
// 得到类型
const mime = require('mime');



// 客服端有消息时
app.on('request',(req,res)=>{
    // 获取用户的请求路径
    let pathname = url.parse(req.url).pathname;
    pathname = pathname=='/'?'/index.html':pathname;
    // 将请求路径转化为实际的服务器硬盘路径
    let realpath = path.join(__dirname,'public'+pathname);
    // 获取页面类型
    let type =mime.getType(realpath);
    // 读取文件
    fs.readFile(realpath,(error,result)=>{
        res.writeHead(404,{
            'content-type':'text/html;charset=utf-8'
        });
        if(error!=null){

            res.end("没有找到页面");
            return;
        }


        res.writeHead(200,{
            'content-type':type
        })


        res.end(result);
    })
});

// 监听端口
app.listen(3000);
console.log("网站服务器启动成功");