// 静态资源访问功能
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
// 创建网站服务器
const app = express();

app.use(express.static(path.join(__dirname,'public')))

// 监听端口
app.listen(3000);
console.log("网站服务器启动");
