const fs = require('fs');
fs.writeFile('./demo.txt','写入内容',err=>{
    if(err!=null){
        console.log(err);
        return;
    }
    else{
        console.log('写入成功');
    }
})