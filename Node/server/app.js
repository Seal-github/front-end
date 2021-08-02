// 创建网站服务器模块
const http = require('http');
// 内置方法
const url =require('url');
// app是对象服务器对象
const app = http.createServer();
// 客服端有消息时
app.on('request',(req,res)=>{

    // 响应报文
    // HTTP码 + 内容类型
    res.writeHead(200,{
        'content-type':'text/html;charset=utf-8'
    });

    // 请求参数由url求得
    // (1)要解析的url地址，
    // (2)将查询参数解析为对象
    let {query,pathname} = url.parse(req.url,true);
    console.log(query.name);
    console.log(query.age);

    // 获取请求地址url
    // console.log(req.url);
    // 获取请求报文信息
    // console.log(req.headers['accept']);

    if(pathname=='/index'||pathname=='/'){
        res.end("Welcome to index");
    }else if(pathname=='/list'){
        res.end("<h2> 欢迎来到list </h2>");
    }else{
        res.end("NOT FOUND");
    }

    // console.log(req.method);
    // if(req.method == 'POST'){
    //     res.end('POST');
    // }else if(req.method == 'GET'){
    //     res.end('GET');
    // }
});

// 监听端口
app.listen(3000);
console.log("网站服务器启动成功");