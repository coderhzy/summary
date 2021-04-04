class Parent {
    constructor(value) {
        this.val = value
    }
    getValue() {
        console.log(this.val)
    }
}

class Child extends Parent {
    constructor(value) {
        super(value)
    }
}

let child = new Child(1);
child.getValue();
console.log(child instanceof Parent);