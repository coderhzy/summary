const express = require('express');
const {
    buildSchema
} = require('graphql');
const {
    graphqlHTTP
} = require('express-graphql');

const schema = buildSchema(`
    type Account {
        name: String,
        age: Int,
        sex: String,
        department: String,
        salary(city: String): Int
    }
    type Query {
        getClassMates(classNo: Int!): [String]
        account(userName: String) : Account
    }
`)

const root = {
    getClassMates: ({
        classNo
    }) => {
        const obj = {
            31: ["张三", "李四", "王五"],
            61: ['你好', "hello", "nice"]
        }
        return obj[classNo]
    },
    account: ({
        userName
    }) => {
        const name = userName;
        const age = 18;
        const sex = 'male';
        const department = '开发部';
        const salary = ({
            city
        }) => {
            if (city === '北京' || city === '广州') {
                return 10000
            }
            return 3000
        }
        return {
            name,
            age,
            sex,
            department,
            salary
        }
    }
}

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

// 公开文件夹，供用户访问静态资源
app.use(express.static('client'))

app.listen(3000, () => {
    console.log('监听在3000端口')
})