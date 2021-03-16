// 父类
class People {
    constructor(name){
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

// 子类
class Student extends People{
    constructor(name,number){
        super(name)
        this.number = number
    }
    sayHi(){
        console.log(`姓名${this.name} 学号${this.number}`)
    }
}

// 子类
class Teacher extends People{
    constructor(name,number){
        super(name);
        this.major = major;
    }
    teach() {
        console.log(`姓名${this.name}教 ${this.m}`)
    }
}

const xiaoluo = new Student('夏洛',100);
console.log(xiaoluo.name);
console.log(xialuo.number);
xiaoluo.sayHi();
xiaoluo.eat();

const wanglaoshi = new Student('王老师','语文');
console.log(wanglaoshi.name);
console.log(wanglaoshi.major);
wanglaoshi.teach();
wanglaoshi.eat();
