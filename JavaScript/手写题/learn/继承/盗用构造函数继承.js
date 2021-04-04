function Animal(name) {
    this.name = name;
    this.getName = function () {
        return this.name
    }
}

function Dog(name) {
    Animal.call(this, name);
    this.age = 20;
}
Dog.prototype = new Animal();

let dog1 = new Dog('二哈', 30);
let dog2 = new Dog('金毛', 50);
console.log(dog1);
console.log(dog2);

// 缺点
// 由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。