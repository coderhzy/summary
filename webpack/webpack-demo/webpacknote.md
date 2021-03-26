# babel配置
es6 -> es5 
1. 安装插件
```
需要安装插件
@babel/core
@babel/preset-env
babel-loader
```
2. 建立./babelrc文件
```JS
    "presets": ["@babel/preset-env"]
```
3. /webpack.config.js
```JS
module: {
    rules: [
        {
            test: /\.js$/,
            loader: ['babel-loader'],
            include: path.join(__dirname, 'src'), // include 表示哪些目录中的 .js 文件需要进行 babel-loader
            exclude: /node_modules/
        }
    ]
}
```

# es6模块化导出
```JS
// 第一种： 逐个导出
export a = () => {}

import a from './xxxx'

// 第二种 ： 导出多个
const a = () => {}
const b = () => {}
export { a , b}

import { a , b } from './xxx'

// 第三种: 如果只导出一个，使用defult就不可以用解构赋值来导入
const a = () => {}
export default a

import xxx from './xxx'
```