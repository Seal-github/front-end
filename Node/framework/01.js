const express = require('express');
// 创建网站服务器
const app = express();
// 1.send()内部会检测响应内容的类型
// 2.send()会自动设置http状态码
//3.send()会自动设置响应的内容类型和编码
app.get('/',(req,res)=>{
    res.send("Hello. express");
})

// 监听端口
app.listen(3000);
console.log("网站服务器启动");



