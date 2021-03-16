const url1 = `https://img4.sycdn.imooc.com/5cd2fa110001ce3007410555-140-140.jpg`;
const url2 = `http://img4.sycdn.imooc.com/5a9fd02e00018e3308000751-160-160.jpg`;
function loadImg(src){
    return new Promise(
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
}

// loadImg(url).then(img => {
//     console.log(img.width);
//     return img;
// }).then(img => {
//     console.log(img.height);
// }).catch(ex => console.error(ex));

loadImg(url1).then(img1 => {
    console.log(img1.width);
    return img1 // 不同对象
}).then(img => {
    console.log(img.width)
    return loadImg(url2); // promise实例
}).then(img2 => {
    console.log(img2.width);
    return img2;
}).then(img2 => {
    console.log(img2.height)
})