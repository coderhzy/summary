const http = require("http");
const querystring = require('querystring');

// 处理Post请求
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let postData = '';
        // 流 stream
        // 打开水管，将客户端和服务端想象成水桶
        req.on('data', chunk => {
            postData += chunk.toString();
        })

        // 接受数据
        req.on('end', () => {
            console.log('postData', postData);
            res.end("数据结构完毕")
        })

        console.log('post data content type', req.headers['content-type']);
    }
});

server.listen(5000, () => {
    console.log(`server listing at prot 5000`)
})