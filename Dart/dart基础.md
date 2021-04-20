# dart基础语法

## 变量声明
1. **var**
区别于JavaScript，当用 var 声明一个变量后，Dart在编译时会根据第一次赋值数据的类型来推断其类型，编译结束后其类型就已经被确定。
```dart
var t;

t = "hi world";

// 下面代码在dart中会报错，因为变量t的类型已经确定为String，

// 类型一旦确定后则不能再更改其类型。

t = 1000;
```
2. **dynamic和Object**
```dart
dynamic t;
Object x;
y = "hi world";
x = "Hello Object";
// 下面代码没有问题
t = 1000;
x = 1000;
```
<br/>

**dynamic和Object不同**
dynamic声明的对象编译器**会提供所有可能的组合**，而Object声明的对象**只能使用**Object的属性与方法，否则编译器会报错。
```dart
dynamic a; // 会提供所有可能的组合
Object b; // 只能使用Object的属性和方法
main() {
    a = "";
    b = "";
    printLengths();
}

printLengths() {
    // no warning
    print(a.length);
    // warning;
    // The getter 'length' is not defined for the class 'Object'
    print(b.length);
}
```
*根据上述dynamic和Object的不同，我们慎用dynamic*

3. **final和const**
如果我们不打算更改一个变量，使用final 或 const 声明，而不是去选择var。一个 final 变量只能被设置一次。
**final和const区别**
- const变量是一个编译时常量
- final变量在第一次使用时被初始化。
- 被 final 或 const 修饰的变量，变量类型可以省略。
```dart
// 可以省略String这个类型声明
final str = "hi world;
// final String str = 'hi world'

const str1 = "hi world";
const String str1 = "hi world";
```