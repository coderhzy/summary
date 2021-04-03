const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

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
        updateAccount(id: ID!,input: AccountInput): Account
    }
    type Query {
        accounts: [Account]
    }
`)

// 模拟数据库
const fakeDb = {};

// 定义查询对应的处理器
const root = {
    accounts: () => {
        var arr = [];
        for (const key in fakeDb) {
            arr.push(fakeDb[key])
        }
        return arr;
    },
    createAccount: ({ input }) => {
        // 相当于数据库的保存
        fakeDb[input.name] = input;
        // 返回保存结果
        return fakeDb[input.name];
    },

    updateAccount: ({ id, input }) => {
        // 相当于数据库的更新
        const updateAccount = Object.assign({}, fakeDb[id], input);
        fakeDb[id] = updateAccount;
        // 返回保存结果
        return updateAccount;
    }
}

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8000)