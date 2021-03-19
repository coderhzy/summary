// 不缓存DOM查询结果
for(let i = 0; i < document.getElementsByTagName('p').length; i++){
    // 每次循环，都会计算length，频繁进行DOM查询
}

// 缓存DOM查询结果
const pList = document.getElementsByTagName('p');
const length = pList.length;
for(let i = 0 ; i < length; i++){
    // 缓存length ， 只进行一次DOM查询
}