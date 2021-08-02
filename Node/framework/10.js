// 如何获取post请求参数
const express = require('express');
const bodyparser = require('body-parser');
// 创建网站服务器
const app = express();

app.get('/',(req,res)=>{
    res.send(req.query);
})

// 拦截所有请求
// extended:false 方法内部使用querystring模块处理请求参数的格式
// extendes:true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyparser.urlencoded({extended:false}))

app.post('/add',(req,res)=>{
    //接收post请求参数
    res.send(req.body);
})
// 监听端口
app.listen(3000);
console.log("网站服务器启动");
