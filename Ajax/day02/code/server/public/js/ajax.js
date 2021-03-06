function ajax(options){
    // 存储默认值
    let defaults = {
        type:'get',
        url:'',
        data:{},
        header:{'Content-Type':'application/json'},
        success:function(){},
        error:function(){}
    };
    // 使用options对象中的属性覆盖defaults对象中的属性
    Object.assign(defaults,options);


    // 创建ajax对象
    let xhr = new XMLHttpRequest();

    // 拼接字符串请求参数
    let params = '';
    // 使用循环将参数转换为字符串格式
    for(let attr in defaults.data){

        params += attr + '='+defaults.data[attr]+'&';
    }
    params = params.substr(0,params.length-1);
    console.log(params);

    // 判断请求参数是post还是get
    // 如果是get
    if(defaults.type == 'get'){
        defaults.url += '?'+params;
    }
    // 设置ajax对象
    xhr.open(defaults.type,defaults.url);

    // 如果是post
    if(defaults.type == 'post'){
        // 用一个变量装一下用户请求参数的类型
        let ContentType = defaults.header['Content-Type'];
        // 设置请求参数格式的类型
        xhr.setRequestHeader('Content-Type',ContentType);
        if(ContentType =='application/json'){
            xhr.send(JSON.stringify(defaults.data));
        }else{
            xhr.send(params);
        }
    }else{
        // 发送请求
        xhr.send();
    }
    // 监听onload事件
    xhr.onload= function(){
        // 获取响应头信息
        let ResponseHeaders = xhr.getResponseHeader('Content-Type');
        // 获取服务端返回的数据
        let responseText = xhr.responseText;
        // 如果响应信息包含application/json
        if(ResponseHeaders.includes('application/json')){
            responseText= JSON.parse(responseText);
        }


        // http状态码为200，调用请求成功函数
        if(xhr.status == 200){
            defaults.success(responseText,xhr);
        }else{
            // 调用请求失败函数
            defaults.error(responseText,xhr);
        }
        
    }

}