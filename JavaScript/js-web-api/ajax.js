// GET请求
const xhr = new XMLHttpRequest();
xhr.open('GET','./data/test.json',true);
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            console.log(xhr.responseText);
        }
    }
}
xhr.send(null);

// POST请求
const xhr = new XMLHttpRequest();
xhr.open('POST','/login'.false);
xhr.onreadystatechange = function (){
    if(xhr.readyState == 4){
        if(xhr.status === 200){
            alert(xhr.responseText);
        }
    }
}

const postData = {
    userName: 'zhangsan',
    password: 'xxx'
}
xhr.send(JSON.stringify(postData));