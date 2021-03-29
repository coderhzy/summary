function deepClone(obj) {
    function isObject(o) {
        return (typeof o === 'object' || typeof o === 'function') && o !== null;
    }

    if (!isObject(obj)) {
        throw new Error('目标非对象')
    }

    let isArray = Array.isArray(obj);
    let newObj = isArray ? [...obj] : {
        ...obj
    };

    Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = isObject(newObj[key]) ? deepClone(newObj[key]) : newObj[key];
    })
    return newObj;
}


let a = {
    b: 1,
    c: {
        d: 2,
        e: {
            f: 3
        }
    }
}
let x = deepClone(a);
console.log(x);