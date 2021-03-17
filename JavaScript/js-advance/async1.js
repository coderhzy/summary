function loadImg(src){
    let p =  new Promise(
        (resolve,reject) => {
             const img = document.createElement('img');
             img.onload = () => {
                 resolve(img);
             }
             img.onerror = () => {
                 reject(new Error(`图片加载失败${src}`))
             }
             img.src = src;
        }
    )
    return p;
}

const url1 = `https://img4.sycdn.imooc.com/5cd2fa110001ce3007410555-140-140.jpg`
const url2 = `http://img4.sycdn.imooc.com/5a9fd02e00018e3308000751-160-160.jpg`

// await后可以追加async函数 或者 Promise
// async function loadImg1(){
//     const img1 = await loadImg(url1)
//     return img1
// }

// async function loadImg2(){
//     const img2 = await loadImg(url2)
//     return img2;
// }

!(async function() {
    // img1
    const img1 = await loadImg(url1);
    console.log(img1.height,img1.width);

    // img2
    const img2 = await loadImg(url2);
    console.log(img2.height,img2.width);
})()
