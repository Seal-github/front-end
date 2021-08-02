// app.locals

const express = require('express');
const path = require('path');
// 创建网站服务器
const app = express();

// 1.告诉express框架使用什么模板引擎渲染什么后缀的模板文件
//  模板后缀
//  使用模板引擎
app.engine('art',require('express-art-template'));
// 2.告诉express框架模板存放的位置是什么
app.set('views',path.join(__dirname,'views'));
// 3.告诉express框架模板的默认后缀是什么
app.set('view engine','art');


app.locals.user=[{
    name:'张三',
    age:23
},{
    name:'lisi',
    age:24
}]

// 渲染模板
app.get('/index',(req,res)=>{
    res.render('index',{
        mes:'首页'
    })
})

app.get('/list',(req,res)=>{
    res.render('index',{
        mes:'list面'
    })
})

// 监听端口
app.listen(3000);
console.log("网站服务器启动");
