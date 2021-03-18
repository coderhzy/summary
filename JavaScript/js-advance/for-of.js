function muti(num){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * num);
        },1000)
    })
}

const nums = [1,2,3];

// forEach是同步执行
nums.forEach(async(i) => {
    const res = await muti(i);
    console.log(res);
})

// for...of是异步执行
!(async function () {
    for(let i of nums){
        const res = await muti(i);
        console.log(res);
    }
})()