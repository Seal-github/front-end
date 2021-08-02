// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 向其他服务器请求数据的模块
const request = require('request');

const formidable = require('formidable');
// 创建网站服务器
const app = express();

// 静态资源访问
app.use(express.static(path.join(__dirname,'public')));

// 08html
app.get('/server',(req,res)=>{
    request('http://localhost:3001/cross',(err,response,body)=>{
        res.send(body);
    })
})


// 监听端口
app.listen(3000);
console.log("登入成功");

