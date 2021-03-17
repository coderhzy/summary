// 执行async函数，返回的是一个Promise对象(是自动封装成的Promise对象)
async function fn1() {
    return 100;
}

const res1 = fn1();
console.log('res1',res1); // 返回Promise对象
res1.then(data => {
    console.log('data',data); // 100
})


// await相当于Promise then
!(async function (){
    const p1 = Promise.resolve(300);
    const data = await p1; // await相当于Promise then
    console.log('data',data); // 300 
})()

// 额外知识点，结合try...catch 来使用，进行捕获错误
!(async function(){
    const p4 = Promise.reject('err2'); // rejected 状态
    const res = await p4;
    console.log('res',res); // 这个地方不执行,解决不执行的方法，可以用try...catch来包裹进行捕获
})()

// await后面跟的值会自动封装成Promise
!(async function(){
    const data1 = await 400; // await Promise.resolve(400)
    console.log('data1',data1); // 400
})()


!(async function(){
    const data2 = await fn1();
    console.log('data2',data2);
})()


// try...catch
!(async function(){
    const p4 = Promise.reject('err1'); // rejected 状态
    try {
        const res = await p4
        console.log(res); // err1
    } catch(ex){
        console.error(ex); // try....catch 相当于promise的catch
    }
})()