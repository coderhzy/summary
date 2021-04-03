var express = require('express');
var {
    graphqlHTTP
} = require('express-graphql');
var {
    buildSchema
} = require('graphql');

var schema = buildSchema(`
  type Account {
      name: String,
      age: Int,
      sex: String,
      department: String
  }
  type Query {
    hello: String,
    accountName: String,
    age: Int,
    account: Account
  }
`);

var root = {
    hello: () => 'Hello world!',
    accountName: () => {
        return 'codehzy'
    },
    age: () => {
        return 18
    },
    account: () => {
        return {
            name: '陈卫浩',
            age: 18,
            sex: 'male',
            department: '计算机'
        }
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));