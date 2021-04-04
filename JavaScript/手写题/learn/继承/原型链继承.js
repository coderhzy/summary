function Animal() {
    this.colors = ['red', 'green']
}

Animal.prototype.getColor = function () {
    return this.colors;
}

function Dog() {}
// 核心代码
Dog.prototype = new Animal()


// 测试用力
let dog1 = new Dog();
dog1.colors.push('blue');
let dog2 = new Dog();
console.log(dog2.colors); // [ 'red', 'green', 'blue' ]


// 原型链继承存在问题
// 问题一：原型中包含的引用类型属性将被所有实例共享
// 问题二：子类在实例化的时候不能给父类构造函数传参