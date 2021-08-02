// 构建模块化路由
const express = require('express');
// 创建网站服务器
const app = express();

const home = require('./route/home.js');
const admin = require('./route/admin.js');

app.use('/home',home);
app.use('/admin',admin);

// 监听端口
app.listen(3000);
console.log("网站服务器启动");



