// 第二个参数填写跨域的域名称，不建议直接填写""*"
response.setHeader('Access-Control-Allow-Origin','http://localhost:8081');
response.setHeader('Access-Control-Allow-Header','X-Requested-With');
response.setHeader('Access-Control-Allow-Methods','PUT，POST，GET，DELETE，OPTIONS');

// 接收跨域的Cookie
response.setHeader('Access-Control-Allow-Credenttials','true')