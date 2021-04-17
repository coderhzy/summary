// 触发更新视图
function updateView() {
    console.log('视图更新');
}

// 重新定义数组原型
const oldArrayPerperty = Array.prototype;
// 创建新对象，原型指向oldArrayPerperty，在扩展神的方法不会影响到原型
const arrProto = Object.create(oldArrayPerperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
    arrProto[methodName] = function () {
        updateView() // 触发视图更新
        oldArrayPerperty[methodName].call(this, ...arguments);
    }
})


// 监听函数
function defineReactive(target, key, value) {
    // 深度监听
    observer(value)

    // 核心API
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (newValue !== value) {
                // 防止设置的新值又是一个引用深度值
                observer(newValue)

                // 设置新值
                // 注意,value 一直在闭包中，此处设置完以后，再 get是也能获得新的值
                value = newValue

                // 触发更新
                updateView()
            }
        }
    })
}

function observer(target) {
    if (typeof target !== 'object' || target === null) {
        // 不是对象或者数组
        return target
    }

    // 监听数组
    if (Array.isArray(target)) {
        target.__proto__ = arrProto;
    }

    // 重新定义各个属性（for in 也可以遍历数组）
    for (let key in target) {
        defineReactive(target, key, target[key]);
    }
}

let data = {
    name: 'code',
    age: 20,
    info: {
        address: '北京'
    },
    nums: [10, 20, 30]
}

observer(data);

// data.name = 'codehzy'
// data.age = 21
// // console.log('age', data.age)
// data.info.address = '上海'
data.nums.push(2)