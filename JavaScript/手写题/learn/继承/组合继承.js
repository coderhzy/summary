function Animal(name) {
    this.name = name;
    this.colors = ['black', 'white']
}

Animal.prototype.getColors = function () {
    return this.name;
}

function Dog(name, age) {
    // 使用盗用构造函数继承实例属性
    Animal.call(this, name);
    this.age = age;
}

// 使用原型链继承原型上的属性和方法
Dog.prototype = new Animal();

let dog1 = new Dog('奶昔', 2)
dog1.colors.push('brown')
let dog2 = new Dog('哈赤', 1)
console.log(dog2)
// { name: "哈赤", colors: ["black", "white"], age: 1 }

// 核心思想
// 1. 使用盗用构造函数继承实例上的属性
// 2. 使用原型链继承原型上的属性和方法

// 缺点
// 调用了两次父类构造函数，第一次是new Animal(),第二次是Animal.call()