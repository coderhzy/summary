const {
    SuccessModel
} = require("../model/responseModel");
const {
    getList,
    getDetail
} = require("../controllers/blog")

// 处理博客相关的路由
const handleBlogRoute = (req, res) => {
    // 定义处理路由的逻辑
    const method = req.method;

    if (method === "GET" && req.path === '/api/blog/list') {
        // api/blog/list?author=zhangsan&keyword
        // new SuccessModel()
        const author = req.query.author || ''; // 兼容处理
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        return new SuccessModel(listData);

        // return {
        //     message: '获取博客列表的接口'
        // }
    }

    if (method === "GET" && req.path === '/api/blog/detail') {
        const id = req.query.id;
        const detailData = getDetail(id);

        return new SuccessModel(detailData);
    }
    if (method === "POST" && req.path === '/api/blog/new') {
        return {
            message: '新建博客的接口'
        }
    }
    if (method === "POST" && req.path === '/api/blog/update') {
        console.log(req.body);
        return {
            message: '更新博客的接口'
        }
    }
    if (method === "POST" && req.path === '/api/blog/delete') {
        return {
            message: '删除博客的接口'
        }
    }
}

module.exports = handleBlogRoute;