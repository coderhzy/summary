// Promise封装一个ajax
function ajax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.resopnseText))
                }
            } else if (xhr.status === 404 || xhr.status === 500) {
                reject(new Error('404 not found'))
            }
        }
        xhr.open('GET', 'url', true);
        xhr.send(null);
    })
}

const url = '/data/test.json'
ajax(url)
    .then(res => console.log(res))
    .catch(err => console.error(err))