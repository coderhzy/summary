// await | promise 手写一段代码
// checkIsAppInstalled(appid) 是一个异步方法获取此app用户是否安装，需要实现获取3个App用户是否安装 && 有1s超时机制，请使用await或者promise的方式调用
function checkIsAppInstalled(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(id);
        },900)
    })
}

function checkAll (configID) {
    return new Promise((resolve,reject) => {
        let timer = setTimeout(() => {
            console.log("我执行了");
            reject("超时!");
        },1000)
        const fetchList = configID.map(id => checkIsAppInstalled(id));
        Promise.all(fetchList)
            .then((res) => {
                clearTimeout(timer);
                resolve(res);
            })
            .catch(reject);
    })
}

!(async function foo(){
    let  res = null;
    try{
        console.time();
        res = await checkAll(["appid1","appid2"]);
        console.log(res);
    } catch(error) {
        console.log(error);
    }
    console.timeEnd();
})();