function Animal(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'black']
}

Animal.prototype.getColors = function () {
    return this.colors
}

function Dog(name, age) {
    Animal.call(this, name);
    this.age = age;
}

var inhert = function (Animal, Dog) {
    let prototype = Object(Animal.prototype);
    prototype.constructor = Dog;
    Dog.prototype = prototype;
}

inhert(Animal, Dog);

let dog1 = new Dog('nice', 21);
let dog2 = new Dog('licy', 22);
dog1.colors.push('green');
console.log(dog2);
console.log(dog1);

// 封装一个方法
// 使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类型
// 1. 使用Object方法拷贝出父类的原型赋值给一个新对象
// 2. 将新对象赋值给子类的原型。注意期间需要维护新对象的原型链及constructor