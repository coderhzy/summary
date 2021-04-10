const {
    SuccessModel,
    ErrorModel
} = require("../model/responseModel");
const {
    getBlogsList,
    getBlogDetail,
    createNewBlog,
    updataBlog,
    deleteBlog
} = require("../controllers/blog")


// 处理博客相关的路由
const handleBlogRoute = (req, res) => {
    // 定义处理路由的逻辑
    const method = req.method;
    const id = req.query.id;
    const blogData = req.body;

    // 获取博客列表
    if (method === "GET" && req.path === '/api/blog/list') {
        // const sql = `select * from blogs`
        // execSQL(sql, (err, result) => {
        //     if (err) {
        //         console.error('error', err);
        //         return;
        //     }
        //     console.log('result', result);
        // })

        // promise形式优化
        // execSQL(sql).then(res => {
        //     console.log('result', res);
        // })


        // api/blog/list?author=zhangsan&keyword
        // new SuccessModel()
        const author = req.query.author || ''; // 兼容处理
        const keyword = req.query.keyword || '';
        const listDataPromise = getBlogsList(author, keyword);
        listDataPromise.then((listData) => {
            return new SuccessModel(listData);
        });
    }

    // 博客路由详情
    if (method === "GET" && req.path === '/api/blog/detail') {
        const detailData = getBlogDetail(id);

        return new SuccessModel(detailData);
    }

    // 新增博客路由
    if (method === "POST" && req.path === '/api/blog/new') {
        const newBlogData = createNewBlog(blogData);
        return new SuccessModel(newBlogData);
    }

    // 更新博客路由
    if (method === "POST" && req.path === '/api/blog/update') {
        const updatedBlogData = updataBlog(id, blogData)
        if (updatedBlogData) {
            return new SuccessModel('更新博客成功!')
        } else {
            return new ErrorModel('更新博客失败')
        }
    }

    // 删除博客路由
    if (method === "POST" && req.path === '/api/blog/delete') {
        const deleteBlogData = deleteBlog(id);

        if (deleteBlogData) {
            return new SuccessModel('删除博客成功!')
        } else {
            return new ErrorModel('删除博客失败')
        }
    }
}

module.exports = handleBlogRoute;