function jsonp(url, jsonCallback, success) {
    let script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.type = 'text/javascript';
    window[jsonCallback] = function (data) {
        success && success(data);
    }
    document.body.appendChild(script);
}

jsonp('http://xxx', 'callback', function (value) {
    console.log(value);
})