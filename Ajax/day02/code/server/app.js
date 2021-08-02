// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');

const formidable = require('formidable');
// 创建网站服务器
const app = express();

// 静态资源访问
app.use(express.static(path.join(__dirname,'public')));


// 02html
app.get('/verifyemailaddress',(req,res)=>{
    res.send(req.query);
})

// 03html
app.get('/searchAutoPrompt',(req,res)=>{
    let arr = ["黑马1","黑马11","黑马1111","黑马111111"];
    res.send(arr);
})

// 05html
app.post('/formData',(req,res)=>{
    // 创建formidable表单解析对象
    const form = new formidable.IncomingForm();
    // 解析客服端传递过来的FormData对象
    form.parse(req,(err,fields,files)=>{
        res.send(fields);
    });

});


// 07html
app.post('/upload',(req,res)=>{
    // 创建formidable表单解析对象
    const form = new formidable.IncomingForm();

    // 设置客户端上传文件的存储路径
    form.uploadDir = path.join(__dirname,'public','uploads');
    // 保留上传文件的后缀名
    form.keepExtensions = true;
    // 解析客服端传递过来的FormData对象
    form.parse(req,(err,fields,files)=>{
        // 将客户端传递过来的文件地址响应到客户端
        // 将地址以public分割为数组
        res.send({
            path:files.attrName.path.split('public')[1]
        });
    });

});

// 监听端口
app.listen(3000);
console.log("登入成功");

