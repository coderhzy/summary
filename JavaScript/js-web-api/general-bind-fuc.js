var bindFn = (elem,type,selector,fn) => {
    if(fn == null){
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type,e => {
        const target = e.target;
        if(selector){
            // 代理绑定,matches函数判断正在触发的元素是否符合CSS选择器
            if(target.matches(selector)) {
                fn.call(target,e);
            }
        } else{
            // 普通绑定
            fn.call(target,e);
        }
    })
}

// 普通绑定
const btn1 = document.getElementById('btn1')
bindFn(btn1, 'click', function (event) {
    // console.log(event.target) // 获取触发的元素
    event.preventDefault() // 阻止默认行为
    alert(this.innerHTML)
})

// 代理绑定
const div3 = document.getElementById('div3')
bindFn(div3, 'click', 'a', function (event) {
    event.preventDefault()
    alert(this.innerHTML)
})