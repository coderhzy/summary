// 注意细节，在for循环中用let 来声明i，这样每一次的for循环JS都会形成一个新的块
// 循环10次，则就形成10个不同的块，这样每次a标签被点击的时候，就会去对应的上层去找对应的i
let a ;
for(let i = 0;i < 10;i++){
    a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener('click', function(e){
        e.preventDefault();
        alert(i)
    })
    document.body.appendChild(a);
}