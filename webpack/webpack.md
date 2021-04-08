# webpack面试题
## 1. 前端代码为何要进行构建和打包？
## 2. module chunk bundle分别什么意思，有何区别？
## 3. loader和plugin区别？
## 4. webpack如何实现懒加载？
## 5. webpack常见性能优化
## 6. babel-runtime和babel-polyfill的区别d


## 简要分析
面向对象写法有弊端，我们使用es Moudle语法来引入，利用webpack讲多个模块的js文件打包成一个js文件，最终在页面中引入打包好的js文件。利用webpack打包还有利于避免我们对模块引入顺序的错误。
- entry
- output: 引入path模块，生成绝对路径,可以家publicPath
- loader： 正常webpack只能解析js，用不同的loader来让webpack来打包更多类型的文件，如图片。 url-loader打包图片,过大文件正常打包 请求图片，小的图片用url-loader转换成base64编码
- plugin：在webpack生命周期中，改变其输出，增强扩展。常用HtmlWebpackPlugin - 打包的html模板，CleanWebpackPlugin
- 打包css，style-loader将js生成的css来解析，不可单独使用，引入在不同地方，css-loader:导入了css，css-loader识别css文件.sass-loader:解析sass，
- autoprefixer: 给css属性加入浏览器厂商前缀
- source-map: 建立js源文件和打包好的js文件的联系。为了方便找错
- script: start-webpackserve
- watch: 来监控文件来达到webpack自动打包
- start: "webpack serve" -> webpackdevServer -> devServer：{ contentBase: "./dist" }
- webpackdevServer: proxy来改变路径并配合changeOrigin: true，从而实现了请求转发和相对路径。以及了解pathRewrite，用于去掉api。只是用于开发环境。
- HMR: webpack自动对比源文件的改变去更新。
- Babel：babel-loader,@babel/cores,    @babel/preset-env
- balbel/polyfill: 用来补充es6代码的实现，也就是说Promise以及map属于es6，低版本浏览器无法识别，我们使用ployfill将其转换成es5代码。