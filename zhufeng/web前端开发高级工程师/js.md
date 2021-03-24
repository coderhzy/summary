## js中的数据类型
- 基本数据类型（值类型、原始类型）
  - number
    - NaN
      - NAN === NAN => false
    - Infinity
      - Infinity === Infinity
  - string
  - boolean
  - null
  - undefined 
  - **Symbol**
    - static Symbol
    - Symbol.prototype
  - bigint
- 引用数据类型
  - object
    - 普通对象
    - 数组对象
    - 正则对象
    - 日期对象
    - JSON对象
    - Set
    - Map
    - ...
  - function
    - 普通函数
    - 构造函数
    - 箭头函数
    - 生成器函数
    - ...
## 数据类型
- declare & defined

- ECStack（Execution [ˌeksɪˈkjuːʃn] Context Stack）和 EC（Execution Context ）

- GO（Global Object）

- VO（Varibale Object）
```JS
var a = 12;
var b = a;
b = 13;
console.log(a); // 12

-----------------

var a = {n: 12};
var b = a;
b['n'] = 13;
console.log(a.n); // 13

-----------------

var a = {n: 12};
var b = a;
b = {n: 13};
console.log(a.n); // 12
```