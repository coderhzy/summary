// then正常返回resolved，里面有报错则返回rejected
const p1 = Promise.resolve().then(() => {
    return 100;
})
console.log('p1',p1); // resolved 触发后续then回调
p1.then(() => {
    console.log('123'); // 执行then
})

const p2 = Promise.resolve().then(() => {
    throw new Error('new error')
})
console.log('p2',p2); // rejected 触发后续catch回调
p2.then(() => {
    console.log('456')
}).catch(err => {
    console.error('err100',err); // 执行catch
})

// catch正常返回resolved，里面有报错返回rejected
const p3 = Promise.reject('my error').catch(err => {
    console.error(err);
})
console.log('p3',p3); // resolved 注意 ，触发 then的回调
p3.then(() => {
    console.log(100);
})

const p4 = Promise.reject('my error').catch(err => {
    throw new Error('p4 error');
})
console.log('p4',p4); // rejected 触发 catch回调
p4.then(() => {
    console.log(200);
}).catch(() => {
    console.log('some error');
}) // resolved