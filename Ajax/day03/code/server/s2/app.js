// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');

const formidable = require('formidable');
// 引入session
const session = require('express-session');
// 创建网站服务器
const app = express();

// 静态资源访问
app.use(express.static(path.join(__dirname,'public')));

// 配置session的中间件
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))

// 07html
// 拦截所有请求，再全部设置CORS
app.use((req,res,next)=>{
    // 1.允许那些客户端访问
    // *表示所有客户端都行
    // 跨域请求中涉及cookie，值不能是*
    res.header('Access-Control-Allow-Origin','http://localhost:3000');
    // 2.允许客服端使用那些方法访问
    res.header('Access-Control-Allow-Methods','get,post');
    // 允许客户端发送跨域请求时携带cookie信息
    res.header('Access-Control-Allow-Credentials',true);
    next();

})
app.get('/cross',(req,res)=>{
    res.send('ok');
})


// 02html
app.get('/test',(req,res)=>{
    const result = 'fn({name:"zhangsan"})';
    res.send(result);
})
// 03html/04html/05html
app.get('/better',(req,res)=>{
    // const FName = req.query.callback;
    // const result = FName+'({name:"zhangsan"})';
    // setTimeout(()=>{
    //     res.send(result);
    // },1000)
    // express框架提供jsonp方法可以取代上述代码
    res.jsonp({name:'lisi',age:23})
})

// 09html
app.post('/login',(req,res)=>{
    var form = formidable.IncomingForm();
    form.parse(req,(err,fields,file)=>{
        const {username,password}=fields;
        if(username=='itheima'&&password=='123456'){
            // 设置session
            req.session.isLogin=true;
            res.send({message:'登入成功'});
        }else{
            res.send({message:'登入失败'});
        }
    })
})
app.get('/check',(req,res)=>{
    if(req.session.isLogin==true){
        res.send({message:"处于登入状态"});
    }
    else{
        res.send({message:"未处于登入状态"});
    }
})
// 监听端口
app.listen(3001);
console.log("登入成功");

