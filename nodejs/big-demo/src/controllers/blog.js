const mysql = require('mysql');
// 博客相关的方法
const getList = () => {
    // 从数据库里拿数据
    // 先返回假数据
    return [{
            id: 1,
            title: "标题1",
            content: '内容1',
            author: 'zhangsan',
            createdAt: 1617636247757
        },
        {
            id: 1,
            title: "标题2",
            content: '内容2',
            author: 'lisi',
            createdAt: 1617636281888
        }
    ]
}

// 获取博客详情数据
const getDetail = (id) => {
    // 先返回一个间数据
    return {
        id: 5,
        title: "标题1",
        content: '内容1',
        author: 'zhangsan',
        createdAt: 1617636247757
    }
}

module.exports = {
    getList,
    getDetail
}