async function async1 () {
    console.log('async1 start'); // 2
    await async2();
    // await 后面，都可以看做callback的内容，即异步
    // 类似event loop ,setTimeout(cb1)
    console.log('async1 end'); // 5
}

async function async2 () {
    console.log('async2'); // 3
}

console.log('script start'); // 1
async1();
console.log('script end'); // 4