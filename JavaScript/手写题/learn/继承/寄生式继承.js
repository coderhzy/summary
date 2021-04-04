// 一句话就是创建实现继承的函数，以某种方式增强对象，然后返回这个对象
function createAnother(original) {
    let clone = object(original);
    clone.sayHi = function () {
        console.log('hi');
    }
    return clone;
}