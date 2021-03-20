const btn = document.getElementById('btn1');
btn.addEventListener('click', event => {
    console.log('clicked');
})

// 事件绑定
// 通用的绑定函数
function bindEvent(elem, type, fn){
    elem.addEventListener(type,fn);
}

const a = document.getElementById('btn1');
bindEvent(a, 'click', e => {
    // console.log(event.target) // 获取触发的元素
    e.preventDefault(); // 阻止默认行为
    alert('clicked');
})