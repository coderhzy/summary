/**
 * 深拷贝
 */

const obj = {
    age: 20,
    name: 'hzy',
    address: {
        city: 'beijing'
    },
    arr: ['a','b','c']
}


let obj1 = deepClone(obj);
obj1.address.city = 'nanjing';
console.log(obj.address);

/**
 * 
 * 
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj) {
        if(typeof obj !== 'object' || obj == null){
            // obj 是null，或者不是对象和数组，直接返回
            return obj;
        }

        // 初始化返回结果
        let res;
        if(obj instanceof Array){
            res = [];
        }else {
            res = {};
        }

        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                res[key] = deepClone(obj[key]);
            }
        }

        // 返回结果
        return res;
}