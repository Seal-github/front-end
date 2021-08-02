const fs = require('fs');
const express = require('express');
// 创建网站服务器
const app = express();

const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

// 异步api错误
app.get('/index',async (req,res,next)=>{
    // try尝试执行，catch抛出错误到错误处理中间件
    try {
        await readFile('./aa.txt');
    } catch (error) {
        next(error);
    }
})


// 错误处理中间件
app.use((err,req,res,next)=>{
    res.status(500).send(err.message);
})

// 监听端口
app.listen(3000);
console.log("网站服务器启动");



