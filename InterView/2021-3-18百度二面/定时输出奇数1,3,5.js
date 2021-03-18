for( i = 0; i < 5; i++){
    // 在执行的时候，作用域是AO -> GO
    // 因为AO不存在i，会向上找i，所以才会找到window.i
    // 解决办法1： 拓展原型链
    // 解决办法2： 改变i变量的作用域规则，将其内置到循环语句中
    setTimeout(function(){
        console.log(i++)
    },1000)
}
// 5,6,7,8,9 

// 等同于在全局命名空间下声明了一个i变量
for(var i = 0; i < 5; i++){
    !function(i){
        setTimeout(() => {
            console.log(i++); // 只改变当前作用域的i，其他函数影响不了
        },1000)
    }(i);
}
// 0,1,2,3,4


for(let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i++); // 只会影响当前语句块中的i，其他语句块下的互不干扰
    }, 1000);
}
// 0,1,2,3,4

for(let i = 0; i <= 5; i++) {
    setTimeout(() => {
        if(i % 2 !== 0){
            console.log(i)
        }
    }, 1000);
}
// 1,3,5

let i;
for( i; i <= 5; i++) {
    setTimeout(() => {
        if(i % 2 !== 0){
            console.log(i)
        }
    }, 1000);
}
// 1,3,5