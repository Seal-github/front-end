// express路由参数
const express = require('express');
const bodyparser = require('body-parser');
// 创建网站服务器
const app = express();

app.get('/index/:id',(req,res)=>{
    res.send(req.params);//{id:123}
})
// 监听端口
app.listen(3000);
console.log("网站服务器启动");
