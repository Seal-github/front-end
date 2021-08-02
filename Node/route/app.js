// 引入http
const http = require('http');
// 创建网站服务器
const app = http.createServer();
const url = require('url');

app.on('request',(req,res)=>{
    // 获取请求方式
    const method = req.method.toLowerCase();
    // 获取请求地址
    const pathname = url.parse(req.url).pathname;
    
    res.writeHead(200,{
        'content-type':'text/html;charset=utf-8'
    });


    if(method == 'get'){
        if(pathname == '/'||pathname=='/index'){
            res.end("欢迎来到首页");
        }else if(pathname=='/list'){
            res.end("欢迎来到list");
        }else{
            res.end("NOT FOUND");
        }
    }
    else if(method=='post'){

    }
})



// 监听端口
app.listen(3000);
console.log("网站服务器启动成功");
