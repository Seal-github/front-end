// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');

const bodyparser = require('body-parser');
// 创建网站服务器
const app = express();

// 静态资源访问
app.use(express.static(path.join(__dirname,'public')));

// 01html
app.get('/first',(req,res)=>{
    res.send("Hello Ajax");
})
// 02html
app.get('/responseData',(req,res)=>{
    res.send({"name":"zs"});
})
// 03html
app.get('/get',(req,res)=>{
    res.send(req.query);
})


// post的两种请求格式
// 1.)application/x-www-form-urlencoded : name=zhangshang&age=23
// 2.)application/json : {name:"zhangshang",age:23}
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
// 04html
app.post('/post',(req,res)=>{
    res.send(req.body);
})
// 05html
app.post('/json',(req,res)=>{
    res.send(req.body);
})

// 07html
app.get('/error',(req,res)=>{
    // console.log(abd);
    // status()设置服务器端状态码
    res.status(400).send('not ok');
})


// 10html
app.post('/first',(req,res)=>{
    res.status(400).send("Hello");
})


// 监听端口
app.listen(3000);
console.log("登入成功");

