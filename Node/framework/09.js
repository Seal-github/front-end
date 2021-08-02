// 如何获取get请求参数
const express = require('express');
// 创建网站服务器
const app = express();

app.get('/',(req,res)=>{
    res.send(req.query);
})
// 监听端口
app.listen(3000);
console.log("网站服务器启动");



