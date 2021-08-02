const fs = require('fs');
function p1(){
    let p1 = new Promise((resolve,reject)=>{
        fs.readFile('./1.txt','utf-8',(err,result)=>{
                resolve(result);
        })
    });
    return p1;
}

function p2(){
    let p2 = new Promise((resolve,reject)=>{
        fs.readFile('./2.txt','utf-8',(err,result)=>{
                resolve(result);
        })
    });
    return p2;
}
function p3(){
    let p3 = new Promise((resolve,reject)=>{
        fs.readFile('./3.txt','utf-8',(err,result)=>{
                resolve(result);
        })
    });
    return p3;
}



p1().then(r1=>{
    console.log(r1);
    return p2();
})
    .then(r2=>{
        console.log(r2);
        return p3();
    })
    .then(r3=>{
        console.log(r3);
    })
