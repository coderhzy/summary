/**
 * 核心思想： 1. 在组合式继承有缺点，组合式继承缺点在于继承父类函数时调用了构造函数，产生了很多原本不需要在子类需要的属性
 *            2. 优化：继承的时候讲父类的原型给子类。
 */

function Parent(value) {
    this.val = value;
}

Parent.prototype.getValue = function () {
    console.log(this.val)
}

function Child(value) {
    Parent.call(this, value)
}

// 重点
Child.prototype = Object.create(Parent.prototype, {
    constructor: {
        value: Child,
        enumerable: false,
        writable: true,
        configurable: true
    }
})

const child = new Child(1);

child.getValue() // 1
console.log(child instanceof Parent) // true