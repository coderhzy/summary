// 调用object 或者 Object.create方法将需要继承的实例克隆
let person = {
    name: "hzy",
    friend: ['nice', 'zsc']
}

let person1 = Object.create(person);
person1.name = 'Greg';
person1.friend.push('ct')

let person2 = Object.create(person);
person2.name = 'linda'
person2.friend.push('barle');

console.log(person.friend); // [ 'nice', 'zsc', 'ct', 'barle' ]
console.log(person1.friend); // [ 'nice', 'zsc', 'ct', 'barle' ]
console.log(person1.friend); // [ 'nice', 'zsc', 'ct', 'barle' ]