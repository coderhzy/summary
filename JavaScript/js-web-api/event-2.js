const p1 = document.getElementById('p1');
const body = document.body;
p1.addEventListener('click', e => {
    e.stopPropagation(); // 阻止冒泡
    alert('激活');
})
body.addEventListener('click', e => {
    alert('取消');
})