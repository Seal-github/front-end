// 通过回调函数可以取得异步的结果
function getMsg(callback){
    setInterval(function(){
        callback({
            msg:'hello node.js'
        })
    },2000)
}

getMsg(function(data){
    console.log(data);
});
