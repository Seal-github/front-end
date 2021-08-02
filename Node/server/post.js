// 创建网站服务器模块
const http = require('http');
// 内置方法
// get
const url =require('url');
// post
const querystring = require('querystring');
// app是对象服务器对象
const app = http.createServer();
// 客服端有消息时
app.on('request',(req,res)=>{
    // post参数是通过事件的方式接收的
    // data请求参数传递的时候触发
    //end完成的时候触发
    // 建立一个参数变量
    let postparams='';
    req.on('data',params =>{
        postparams+=params;
    });
    req.on('end',()=>{
        console.log(querystring.parse(postparams));
    });
    res.end('ok');
});

// 监听端口
app.listen(3000);
console.log("网站服务器启动成功");