const http = require('http');
const querystring = require('querystring');

// 处理GET请求
const server = http.createServer((req, res) => {
    const method = req.method;
    console.log('mthod', method);
    const url = req.url;
    console.log('url', url);

    req.query = querystring.parse(url.split('?')[1]) // 返回一个对象
    console.log('query', req.query);
    res.end(JSON.stringify(req.query));
})

server.listen(5000, () => {
    console.log(`server running at port 5000`)
})