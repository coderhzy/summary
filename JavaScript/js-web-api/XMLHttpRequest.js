// get 请求
const xhr = new XMLHttpRequest();
xhr.open('GET','/api',false);
xhr.onreadystatechange = function () {
    // 这里的函数异步执行，可参考之前 JS基础中的异步模块
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            alert(xhr.responseText);
        }
    }
}
xhr.send(null);