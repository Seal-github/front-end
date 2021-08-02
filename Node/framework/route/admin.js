const express = require('express');
const admin = express();


admin.get('/index',(req,res)=>{
    res.send("欢迎来到博客用户页面");
});

module.exports = admin;
