const fs = require('fs');
fs.readFile('./01.js','utf-8',(err,doc)=>{
    // err文件读取是否错误（是否为null）
    console.log(err);
    console.log(doc);
});