/**
 * 核心： 1. 子类的构造函数中通过Parent.call(this)继承父类的属性
 *        2. 改变子类的原型为new Parent()来继承父类的函数
 */

function Parent(value) {
    this.val = value;
}

Parent.prototype.getValue = function () {
    console.log(this.val);
}

function Child(value) {
    Parent.call(this, value);
}

Child.prototype = new Parent();

const child = new Child(1);

child.getValue();
console.log(child instanceof Parent);