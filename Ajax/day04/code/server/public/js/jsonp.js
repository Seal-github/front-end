// 封装jsonp函数
function jsonp(options){
    // 传递其他参数
    // 拼接字符串变量
    let params = '';
    for(let attr in options.data){
        params+='&'+attr+'='+options.data[attr];
    }
    // 解决多个请求后会覆盖前的问题
    // 随机每次发送请求的函数名，例如Jsonp01222
    let fnName = 'Jsonp'+Math.random().toString().replace('.','');
    // 它已经不是一个全局函数了，要把它变成一个全局函数,并添加名字
    window[fnName] = options.success;
    // 动态创建script标签
    let script = document.createElement('script');
    script.src = options.url+'?callback='+fnName+params;
    // script标签追加到页面
    document.body.appendChild(script);
    // 当script标签加载完成就删除
    script.onload = function(){
        document.body.removeChild(script);
    }


}