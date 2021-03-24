# 1. JS中堆栈内存及函数底层处理机制
## 检测数据类型
- typeof
  - typeof nul => ‘暂时性死区’
  - **typeof unll => 'object'**
  - typeof 对象 => 'object'
  - **typof原理**: 所有数组类型在计算机中存储都是按照“二进制”存储的，为了区别类型，对象类型为000开头，而null的二进制是000开头的。
- instanceof
- Object.prototype.tostring.call
## 判断一个值是否为有效数字
```JS
isNaN() => true则为非有效数字
// 有效数字方法一
if(!NaN(n)){
    console.log('有效数字')
}
// 有效数字方法二
Object.is(NaN,NaN
// true
```
## Symbol
```JS
console.log(new Symbol()); // Uncaught TypeError: Symbol is not a constructor
console.log(Symbol('AA') === Symbol('AA')); //false
let syb = Symbol('BB');
console.log(symb === symb); // true
```
### Symbol应用场景
1. 给对象设置唯一的属性
2. 给vuex/redux中做行为派发的时候，统一管理派发的行为标识，标识的值可以是唯一值。
3. Symbol.hasInstance
4. Symbol.toPrimitive
5. Symbol.toStringTag
6. Symbol.interator
7. Symbol.isConcatSpreadable
8. Symbol.match
9. Symbol.matllAll

## bigint 超大数字
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Math.pow(2,53)
> bigInt标识
```JS
90128904789174194n
```
### bigint应用场景
后端数据库存储的数字，返回给前端，通常前端是将其转换成字符串，但是用大数能完成更好前后端交互。

## JS运行环境
- 浏览器 内核（引擎）
- node
- webview

- 浏览器之所以能运行代码，他会在计算机的内存中分配出一块内存，用来供代码执行。我们把这块内存称为Stack，也叫ECStack

## 声明一个变量
var [变量] = [值];
第一个: 先创建值
  + 基本类型值，是直接存储在栈内存中
  + 引用类型值，都是开辟一个单独的内存空间（堆内存Heap），用来存储信息
第二步：声明变量declare
  + 存储到当前上下文的变量对象中(VO/AO)
第三步：让变量和值关联到一起，也就是所谓的赋值操作，此操作叫做定义defined