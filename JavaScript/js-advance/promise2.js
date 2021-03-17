const p1 = new Promise((resolve,rejected) => {

})

console.log('p1',p1);

const p2 = new Promise((resolve,rejected) => {
    setTimeout(() => {
        resolve()
    })
})

console.log('p2',p2); // pending 一开始打印时
setTimeout(() => console.log('p2-setTimeout',p2)); // resolved

const p3 = new Promise((resolve,rejected) => {
    setTimeout(() => {
        rejected()
    })
})
console.log('p3',p3);
setTimeout(() => console.log('p3-setTimeoout',p3)); // rejected