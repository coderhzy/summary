/**
 * typeof可以正确识别 undefined , Boolean , Number, String , Symbol, Function等数据类型
 * 但是Object比如 Null、Date就不能正确判断，不过我们可以通过改写Object.prototype.toString来实现
 */

function typeOf(obj) {
    let res = Object.prototype.toString.call(obj).split(' ')[1];
    res = res.substring(0, res.length - 1).toLowerCase();
    return res;
}

console.log(typeOf([]))
console.log(typeOf({}))
console.log(typeOf(new Date))