const $p1 = $('<p>一段文字</p>');
const $p2 = $('<p>一段文字</p>');
const $p3 = $('<p>一段文字</p>');

$('#container')
            .append($p1)
            .append($p2)
            .append($p3)
            
// console.log('length', $('#container').children().length);
// alert('本次 call stack 结束, DOM结构已更新，但尚未触发渲染');
// alert 会阻断 JS执行，也会阻断 DOM 渲染，便于查看效果

// 微任务： DOM渲染前触发
Promise.resolve().then(() => {
    console.log('length1', $('#container').children().length); // 3
    alert('Promise then'); // DOM是否渲染,没渲染 但是长度为3，知识我们眼睛看不到
})

// 宏任务： DOM渲染后触发
setTimeout(() => {
    console.log('length2', $('#container').children().length); // 3
    alert('setTimeout'); // DOM是否渲染,渲染了
})