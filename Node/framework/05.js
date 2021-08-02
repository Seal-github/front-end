const fs = require('fs');
const express = require('express');
// 创建网站服务器
const app = express();

// 同步api错误
// app.get('/index',(req,res)=>{
//     // 把错误对象抛出到错误处理中间件
//     throw new Error("程序发生了未知错误");
// })

// 异步api错误
app.get('/index',(req,res,next)=>{
    fs.readFile('文件清单.txt','utf-8',(err,result)=>{
        if(err!==null){
            // 通过next()把错误对象抛出到错误处理中间件
            next(err);
        }else{
            res.send(result);
        }
    })
})


// 错误处理中间件
app.use((err,req,res,next)=>{
    res.status(500).send(err.message);
})

// 监听端口
app.listen(3000);
console.log("网站服务器启动");



