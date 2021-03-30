// 1. Proxy对象的建立和捕获 trap
/**
 * trap：捕获器，每次在代理对象上调用这些基本操作时
 *       代理可以在这些操作传播到目标对象之前先调用捕获器函数，从而拦截并修改相应的行为
 */
const target = {
    foo: 'bar'
};

const handler = {
    // 捕获器在处理程序对象中咦方法名为键
    get() {
        return 'handler override'
    }
}

const proxy = new Proxy(target, handler)


// 只有代理对象上执行这些操作才会触发捕获器，在目标对象上执行这些操作仍然会产生正常行为。
// proxy[property] , proxy.property , Object.create(proxy[proxy])
console.log(target.foo); // bar
console.log(proxy.foo); // handler overrid

console.log(target['foo']); // bar 
console.log(proxy['foo']); // handler overrid

console.log(Object.create(target)['foo']); // bar
console.log(Object.create(proxy)['foo']); // handler overrid




// 2. 捕获参数和反射API
// get方法可以接收到三个参数，目标对象，要查询的属性和代理对象三个参数
// 我们可以根据参数在重建get方法
const target = {
    foo: 'bar'
}

// const handler = {
//     get(trapTarget, property, reveiver) {
//         console.log(trapTarget === target);
//         console.log(property);
//         console.log(reveiver === proxy);
//     }
// }

// const proxy = new Proxy(target, handler);

// proxy.foo;
// true
// foo
// true

// 重建方法
const handler = {
    get(trapTarget, property, reveiver) {
        return trapTarget[property]
    }
}

const proxy = new Proxy(target, handler);

console.log(proxy.foo);
console.log(target.foo);


// Relfect
const target = {
    foo: 'bar',
    baz: "qux"
}

const handler = {
    get(trapTarget, property, reveiver) {
        let decoration = '';
        if (property === 'foo') {
            decoration = '!!!';
        } else if (property === 'baz') {
            decoration = '@@@'
        }

        return Reflect.get(...arguments) + decoration;
    }
}

const proxy = new Proxy(target, handler);

console.log(proxy.foo); // bar!!!
console.log(target.foo); // bar

console.log(proxy.baz); // qux@@@
console.log(target.baz); // qux