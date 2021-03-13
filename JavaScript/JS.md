## 题目
1. tpyeof能判断哪些类型
2. 何时使用 === 何时使用==
3. 值类型和引用类型的区别
4. 手写深拷贝

**知识点**
1. 值类型vs引用类型
2. typeof运算符
3. 深拷贝

[toc]

## 1.变量类型
1. 值类型
```JS
// 值类型
let a = 100;
let b = a;
a = 200;
console.log(b) // 100
```
2. 引用类型
```JS
let a = { age: 20 };
let b = a;
b.age = 21;
console.log(a.age); // 21
```
3. 常见值类型
```JS
let a // undefined
const s = 'abc'
const n = 100
const b = true
const s = Symbol('s')
```
4. 常见引用类型
```JS
const obj = { x: 100 }
const arr = [ 'a' , 'b' , 'c']

const n = null // 特殊引用类型，指针指向未空地址

// 特殊引用类型，但不用于存储数据，所以没有"拷贝，复制函数"这一说
function fn() {}
```

## 2.typeof运算符
- 识别所有值类型
- 识别函数
- 判断是否是引用类型
  
1. 识别所有值类型
```JS
// 判断所有值类型
let a;  typeof a // 'undefined'
const str = 'abc'; typeof str // 'string'
const n = 100; typof n //'number'
const b = true; // 'boolean'
const s = Symbol('s');  typeof s //'symbol's

// 能判断函数
typeof console.log // 'function'
typeof function () {} // 'function'

// 能识别引用类型（不能再继续识别）
typeof null // 'object'
typeof ['a','b'] // 'object'
typeof { x: 100 } // 'object'
```

## 3.手写deepClone
```JS
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
```
