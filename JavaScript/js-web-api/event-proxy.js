const p3 = document.getElementById('div3');
p3.addEventListener('click' , event => {
    event.preventDefault(); // 阻止默认行为
    const target = event.target;
    if(target.nodeName === 'A'){
        alert(target.innerHTML)
    }
})
