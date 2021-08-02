// 中间件应用
// 1.路由保护
// 2.维护公告
// 3.自定义404
const express = require('express');
// 创建网站服务器
const app = express();


// 2.维护公告
// app.use('/admin',(req,res,next)=>{
//     res.send("当前网站正在维护。。。");
// })



// 1.路由保护
app.use('/admin',(req,res,next)=>{
    let flag = true;
    if(flag){
        next();
    }
    else{
        res.send("您还不能登入admin界面");
    }
})

app.get('/admin',(req,res)=>{
    res.send("您已登入admin界面");
})


// 3.自定义404
app.use((req,res,next)=>{
    // res.status()设置状态码
    res.status(404).send("当前访问页面不存在");
})

// 监听端口
app.listen(3000);
console.log("网站服务器启动");



