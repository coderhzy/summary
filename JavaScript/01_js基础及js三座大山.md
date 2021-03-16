## 变量类型 & 类型判断，题目
1. tpyeof能判断哪些类型
2. 何时使用 === 何时使用==
3. 值类型和引用类型的区别
4. 手写深拷贝

### **知识点**
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

## 4.类型转换
- 字符串拼接
- ==
- if语句和逻辑运算

**字符串拼接**
```JS
const a = 100 + 10 // 110
const b = 100 + '10' // '10010'
const c = true + '10' // 'true10'
```

**==运算符**
```JS
100 == '100' // true
0 == '' // true
0 == false // true
false == '' // true
null == undefined // true

// 除了 == null之外，其他一律用 ===， 例如：

const obj = { x: 100 }
if(obj.a == null){}
// 相当于：
// if(obj.a === null || obj.a === undefined) 
```

**if语句和逻辑运算符**
- truly变量： !!a === true变量
- false变量： !!a === false的变量

```JS
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false
```

**逻辑判断**
```JS
console.log(10 && 0) // 0
console.log('' || 'abc') // 'abc'
console.lgo(!window.abc) // true
```

## 5.原型和原型链

Person 构造函数 ， Person.prototype（实例原型）
```text
        prototype
Person --------------> Person.prototype
 |    <-------------- /         |
 |       constructor/           |
 |                /             |
 |              /               |
 |            /   __proto__     | 
 |          /                   |
 |        /                     |
 |      /                       | __proto__
 person                         |
                                |
                                |
                                |
            prototype          \ /
 Object   ------------>  Object.prototype
          <--------------       |
           constructor          |
                                | __proto__ 
                                |
                                |  
                               \ /
                               null
```


## class，原型&原型链，题目
- 1.如何准确判断一个变量是不是数组？
- 2.手写一个简易的Jquery，考虑插件和扩展性
- 3.class的原型本质，怎么理解？

### **知识点**
- class和继承
- 类型判断instanceof
- 原型和原型链

## 1. class
- constructor
- 属性
- 方法
```JS
class Student {
    constructor(name,number){
        this.name = name;
        this.number = number;
        // this.gender = 'male';
    }
    sayHi() {
        console.log(
            `姓名 ${this.name} , 学号 ${this.number}`
        )
    }
} 

// 通过类 new 对象/实例
const xialuo = new Student('夏洛',100);
console.log(xialuo.name);
console.log(xialuo.number);
xialuo.sayHi();
```

## 2. 继承
- extends
- super
- 扩展或重写方法

```JS
// 父类
class People {
    constructor(name){
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

// 子类
class Student extends People{
    constructor(name,number){
        super(name)
        this.number = number
    }
    sayHi(){
        console.log(`姓名${this.name} 学号${this.number}`)
    }
}

// 子类
class Teacher extends People{
    constructor(name,number){
        super(name);
        this.major = major;
    }
    teach() {
        console.log(`姓名${this.name}教 ${this.m}`)
    }
}

const xiaoluo = new Student('夏洛',100);
console.log(xiaoluo.name);
console.log(xialuo.number);
xiaoluo.sayHi();
xiaoluo.eat();

const wanglaoshi = new Student('王老师','语文');
console.log(wanglaoshi.name);
console.log(wanglaoshi.major);
wanglaoshi.teach();
wanglaoshi.eat();
```

## 3.类型判断 - instanceof
```JS
xiaoluo instanceof Student // true
xiaoluo instanceof People // true
xiaoluo instanceof Object // true

[] instanceof Array // true
[] instanceof Object // true

{} instanceof Object // true 
```

## 4.题目解答
1. 如何判断一个变量是不是数组
```JS
a instanceof Array
```

2. class原型本质
- 原型链图

3. 手写Jquery
```JS
class JQuery {
    constructor(selector){
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for(let i = 0; i < length; i++){
            this[i] = result[i];
        }
        this.length = length;
        this.selector = selector;
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i = 0;i < this.length; i++){
            const element = this[i];
            fn(element)
        }
    }
    on(type,fn){
        return this.each(element => {
            element.addEventListener(type,fn,false);
        })
    }
}

// 插件,直接向原型上赋值
JQuery.prototype.dialog = function(info){
    alert(info)
}

// 造轮子
class myJQuery extends JQuery{
    constructor(selector){
        // 继承父类
        super(selector)
    }
    // 扩展自己的方法
    addClass(className){
        
    }
}
```



## 作用域，闭包，this题目
- 作用域和闭包
- this的不同应用场景，如何取值？
- 手写bind函数
- 实际开发中闭包的应用场景，举例说明
- 创建10个<a>标签，点击的时候弹出对应的序号

### **知识点**
- 作用域和自由变量
- 闭包
- this

**作用域**
```JS
let a = 0;
function fn1() {
    let a1 = 100;

    function fn2(){
        let a2 = 200;

        function fn3(){
            let a3 = 300;
            return a + a1 + a2 + a3;
        }
        fn3()
    }
    fn2()
}
fn1()
```
- **作用域**
  - 全局作用域
  - 函数作用域
  - 块级作用域（es6新增）
  - 自由变量
    - 一个变量子在当前作用域没有定义，但是使用了 
    - 向上级作用域，一层一层依次寻找，直到找到位置
    - 如果到全局作用域都没有找到，则报错 XXX is not undefined

- **闭包**
  - 两种表现
    - 函数作为参数被传递
    - 函数作为返回值被返回
```JS
// 函数作为返回值
function create () {
    let a = 100;
    return function() {
        console.log(a);
    }
}

const fn = create();
const a = 200;
fn(); // 100

// 函数作为参数被传递
function print(fn){
    const a = 200;
    fn();
}
const a = 100;
function fn(){
    console.log(a);
}
fn();

// 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找 
//          不是在执行的地方！！！
```

## 1. this
- 作为普通函数
- 使用call、apply、bind
- 作为对象方法被调用
- 在class方法中调用
- 箭头函数,箭头函数本身没有this，取其上级作用域的值

**this取什么值，是在函数执行的时候确定的，不是在函数定义的时候调用的**



**this**
```JS
function fn1(){
    console.log(this);
}
fn1(); // window

fn1.call({ x : 100 }) // { x: 100 }

const fn2  = fn1.bind( { x:200 })
fn2() // { x : 200 }

------------------------------------->

const zhangsan = {
    name: '张三'，
    sayHi(){
        // this 即当前对象
        console.log(this);
    },
    wait() {
        setTimeout(function(){
            // this === window
            console.log(this)
        })
    }
}

------------------------------------->

const zhangsan = {
    name: '张三' ,
    sayHi(){
        // this是当前对象
        console.log(this);
    },
    waitAgain(){
        setTimeout(() => {
            // this是当前对象
            console.log(this);
        })
    }
}

------------------------------------->

class People {
    constructor(name){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(this);
    }
}
const zhangsan = new People('张三');
zhangsan.sayHi(); // 张三对象
```
## 2.题目解答
1. this的不同应用场景，如何取值？
> this取什么值，是在函数执行的时候确定的，不是在函数定义的时候调用的
- 作为普通函数
- 使用call、apply、bind
- 作为对象方法被调用
- 在class方法中调用
- 箭头函数,箭头函数本身没有this，取其上级作用域的值
2. 手写bind函数
```JS
function fn1(a,b,c){
    console.log('this',this);
    console.log(a,b,c);
    return 'this is fn1';
}

const fn2 = fn1.bind({x:100},10,20,30);
const res = fn2();
console.log(res);

Function.prototype._bind = function () {
    // 将参数拆解成数组
    const args = Array.prototype.slice.call(arguments);

    // 获取this（数组第一项）
    const t = args.shift();

    // fn1.bind(。。。)中的 fn1
    const self = this;

    // 返回一个函数
    return function() {
        return self.apply(t,args);
    }
}
```
3. 实际开发中闭包的应用场景，举例说明
- 隐藏数据
- 制作cache工具
```JS
// 闭包隐藏数据，只提供API
function createCache () {
    const data = {} // 闭包中的数据，被隐藏，不被外接访问
    return {
        set: function(key,val){
            data[key] = val;
        },
        get: function(key){
            return data[key];
        }
    }
}

const c = createCache();
c.set('a',100);
console.log(c.get('a'));
```
- 手写一个网页生成10个a标签，点击弹出对应的索引
```JS
// 注意细节，在for循环中用let 来声明i，这样每一次的for循环JS都会形成一个新的块
// 循环10次，则就形成10个不同的块，这样每次a标签被点击的时候，就会去对应的上层去找对应的i
let a ;
for(let i = 0;i < 10;i++){
    a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener('click', function(e){
        e.preventDefault();
        alert(i)
    })
    document.body.appendChild(a);
}
```

## 异步，单线程，题目
- 同步和异步的区别是什么？
- 手写Promise加载一张图片
- 前端使用异步的场景有哪些？
- code
```JS
console.log(1);
setTimeout(function() {
    console.log(2)
},1000)
console.log(3);
setTimeout(function(){
    console.log(4)
},0)
console.log(5);
```

### **知识点**
- 单线程和异步
- 应用场景
- callback hell 和 Promise

## 1. 单线程和异步
1. JS是单线程语言，只能同时做一件事儿
2. 浏览器和node.js已支持JS启动进程，如Web Worker
3. JS和DOM渲染共用同一线程，因为JS可以修改DOM结构
4. 遇到等到（网络请求，定时任务），不能卡住
5. 需要异步
6. 回调callback函数形式
7. 异步和同步
```JS
// 异步 (callback 回调函数) , 不阻塞后面代码执行
console.log(100);
setTimeout(() => {
    console.log(200);
},1000)
console.log(300);
// 100 300 200

// 同步
console.log(100);
alert(200);
console.log(300);
```
- 异步和同步
  - 基于JS是单线程语言
  - 异步不会阻塞代码执行
  - 同步会阻塞代码执行
  
## 2. 异步应用场景
- 网络请求，如ajax图片加载
- 定时任务，如setTimeout
```JS
// ajax
console.log('start');
$.get('/data1.json',function (data1) {
    console.log(data1);
})
console.log('end');

// 图片加载
console.log('start');
let img = document.createElement('img');
img.onload = function() {
    console.log('loaded');
}
img.src = '/xxx.png';
console.log('end');

// setTimeout，一次性
console.log(100);
setTimeout(function(){
    console.log(200);
},1000)
console.log(300);

// setInterval,循环执行
console.log(100);
setInterval(function(){
    console.log(200);
},1000)
console.log(300);
```

## 3. callback hell
```JS
// 获取第一份数据
$.get(url1,(data1) => {
    console.log(data1);

    // 获取第二份数据
    $.get(url2,(data2) => {
        console.log(data2)

        // 获取第二份数据
        $.get(url3,(data) => {
            console.log(data3)

            // 还可能获取更多的数据
        })
    })
})
```

**Promise**
```JS
function getData(url){
    return new Promise((resolve,reject) => {
        $.ajax({
            url,
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}


// 使用Promise
const url1 = '/data1.json'
const url2 = '/data2.json'
const url3 = '/data3.json'
getData(url1).then(data1 =>{
    console.log(data1);
    return getData(url2);
}).then(data2 => {
    console.log(data2);
    return getData(url3);
}).then(data3 => {
    console.log(data3)
}).catch(err => console.error(err));
```

## 4. 问题解答
1. - 异步和同步的区别
  - 异步是基于JS单线程
  - 异步不会阻塞代码执行
  - 同步会阻塞代码执行

2. 手写Promise加载一张图片
```JS
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
```

3. 异步应用场景
- 网络请求，如ajax图片加载
- 定时任务，如setTimeout

4. setTimeout笔试题
```JS
// setTimeout笔试题
console.log(1);
setTimeout(function() {
    console.log(2);
},1000)
console.log(3);
setTimeout(function(){
    console.log(4)
},0)
console.log(5);
```
## 5.阶段总结
```Text
1. 变量的类型和计算
    > 题目
    -  typeof能判断哪些类型
    -  何时使用 === 何时使用 ==
    - 值类型和引用类型的区别
    - 手写深拷贝
    
    > 知识点
    - 值类型vs引用类型，堆栈模型，深拷贝
    - typeof运算符
    - 类型转换,truly和falsely变量
2. 原型和原型链
    > 题目
    - 如何准确判断一个变量是不是数组？
    - 手写一个简易的Jquery，考虑插件和扩展性
    - class的原型本质，怎么理解？

    > 知识点
    - class和继承，结合手写JQuery的示例来理解
    - instanceof
    - 原型和原型链：图示&执行规则
3. 作用域和闭包
    > 题目
    - this的不同应用场景，如何取值？
    - 手写bind函数
    - 实际开发中使用闭包的场景
    - 10个a标签点击弹出序号
    
    > 知识点
    - 作用域和自由变量
    - 闭包：两种常见的方式&自由变量查找规则
    - this
4. 异步和单线程
    > 题目
    - 异步和同步的区别
    - 手写一个Promise加载一张图片
    - 前端使用异步的场景
    - setTimeout
    
    > 知识点
    - 单线程和异步，异步和同步的区别
    - 前端异步的应用场景：网络请求 & 定时任务
    - Pormise解决callback hell的问题

    
```
