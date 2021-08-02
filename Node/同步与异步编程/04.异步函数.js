async function fn(){
    throw "发生了错误";
    return 123
}
// throw关键字抛出错误
// 返回值是promise对象
// console.log(fn());
fn().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

// await关键字只能出现在异步函数中
// 它可以暂停异步函数的执行，待promise对象返回结果后，再向下执行

async function p1(){
    return 'p1';
}
async function p2(){
    return 'p2';
}
async function p3(){
    return 'p3';
}
async function run(){
    let r1 = await p1();
    let r2 = await p2();
    let r3 = await p3();
    console.log(r1);
    console.log(r2);
    console.log(r3);

}
run();