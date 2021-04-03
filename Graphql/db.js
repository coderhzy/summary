// npm install mysql
const express = require("express");
const { buildSchema, isNonNullType } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const mysql = require("mysql");
const { resolve } = require("path");

// https://www.npmjs.com/package/mysql
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "HzY1314..",
    database: "dashen",
});
// Graphql必须要定义Query，不然报错
// 在传入参数的时候 前面类型是input
const schema = buildSchema(`
    input AccountInput {
        name: String
        age: Int
        sex: String
        department: String
    }
    type Account {
        name: String
        age: Int
        sex: String
        department: String
    }
    type Mutation {
        createAccount(input: AccountInput): Account
        deleteAccount(id: ID!): Boolean
        updateAccount(id: ID!,input: AccountInput): Account
    }
    type Query {
        accounts: [Account]
    }
`);

// 定义查询对应的处理器
const root = {
    accounts: () => {
        return new Promise((resolve, reject) => {
            pool.query(
                "select name,age,sex,department from account",
                (err, results) => {
                    if (err) {
                        console.log("出错了" + err.message);
                        return;
                    }
                    const arr = [];
                    for (let i = 0; i < results.length; i++) {
                        arr.push({
                            name: results[i].name,
                            sex: results[i].sex,
                            age: results[i].age,
                            department: results[i].department,
                        });
                    }
                    resolve(arr);
                }
            );
        });
    },
    createAccount: ({ input }) => {
        const data = {
            name: input.name,
            sex: input.sex,
            age: input.age,
            department: input.department,
        };
        // 相当于数据库的保存
        // fakeDb[input.name] = input;
        //  注意使用promise
        return new Promise((reslove, reject) => {
            pool.query("insert into account set ? ", data, (err) => {
                if (err) {
                    console.log("出错了" + err.message);
                    return;
                }
                // 返回保存结果
                reslove(data);
            });
        });
    },

    updateAccount: ({ id, input }) => {
        // 相当于数据库的更新
        const data = input;
        // 相当于数据库的保存
        // fakeDb[input.name] = input;
        //  注意使用promise
        return new Promise((reslove, reject) => {
            pool.query("update account set ? where name = ? ", [data, id], (err) => {
                if (err) {
                    console.log("出错了" + err.message);
                    return;
                }
                // 返回保存结果
                reslove(data);
            });
        });
    },

    deleteAccount({ id }) {
        return new Promise((resolve, reject) => {
            pool.query("delete from account where name = ?", [id], (err) => {
                if (err) {
                    console.log("出错了" + err.message);
                    reject(false);
                    return;
                }
                resolve(true);
            });
        });
    },
};

const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(8000, () => { console.log(`服务监控端口在8000`) });
