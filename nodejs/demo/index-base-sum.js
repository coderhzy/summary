const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    const query = querystring.parse(url.split('?')[1]);

    // 响应数据
    const responseData = {
        method,
        url,
        path,
        query
    }

    res.setHeader('Content-Type', 'applicaiton/json');
    if (method === "GET") {
        res.end(
            JSON.stringify(responseData)
        )
    }
    if (method === "POST") {
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            responseData.postData = postData;

            res.end(
                JSON.stringify(responseData)
            )
        })
    }
})

server.listen(5000, () => {
    console.log('server run listing at port5000')
})