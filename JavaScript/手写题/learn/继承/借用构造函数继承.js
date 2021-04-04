function Animal(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

function Dog(name) {
    // 核心代码一
    Animal.call(this, name);
}
// 核心代码二
Dog.prototype = new Animal();

// 借用构造函数实现继承解决了原型链继承的两个问题，引用类型共享问题以及传参问题。
// 缺点： 但是由于方法必须定义在构造函数中，所以每次创建子类实例都会创建一遍方法。