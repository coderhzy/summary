const mysql = require('mysql');
const {
    MYSQL_CONFIG
} = require('../config/db');

// 创建连接对象
const connection = mysql.createConnection(MYSQL_CONFIG)

// 开始连接
connection.connect();

// 执行 sql 语句
// const sql = `select * from blogs`;
// connection.query(sql, (err, result) => {
//     if (err) {
//         console.error('error', err);
//         return;
//     } else {
//         console.log('result', result)
//     }
// })

// 关闭连接
// connection.end();


// 执行sql语句
// function execSQL(sql, callback) {
//     connection.query(sql, callback)
// }

function execSQL(sql) {
    const promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result)
        })
    })
    return promise;
}

module.exports = {
    execSQL
}