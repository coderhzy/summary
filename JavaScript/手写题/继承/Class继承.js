class Parent {
    constructor(value) {
        this.val = value;
    }
    getValue() {
        console.log(this.val);
    }
}

// 重点
class Child extends Parent {
    constructor(value) {
        super(value)
    }
}

let child = new Child(1);
child.getValue();
console.log(child instanceof Parent);