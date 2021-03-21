# js-web-api
## 从JS基础到JS Web API
- js基础语法，规定语法(ECMA262标准)
- JS Web API，网页操作的API（W3C标准）
- 前者是后者的基础，两者结合才能真正实际应用

## JS Web API
### DOM
#### 题目
- DOM是哪种数据结构
- DOM操作的常用API
- attr和property的区别
- 一次性插入多个DOM节点，考虑性能
#### 知识点
- DOM本质
  - 是通过HTML语言解析成了一棵树
- DOM节点操作
  - getElementById
  - getElementsByTagName
  - getElementsByClassName
  - querySelectorAll
  - property: className,nodeName,nodeType ： 修改对象属性，不会体现到html结构中
  - attribute: getAttribute,setAttribute ：修改html属性，会改变html结构
  - property和attribute都可能引起DOM重新渲染
- DOM结构操作
  - 新增/插入节点
  - 获取子元素列表，获取父元素
  - 删除子节点
```JS
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2')

// 新建节点
const newP = document.createElement('p');
newP.innerHTML = 'this is newP';
// 插入节点
div1.appendChild(newP);

// 移动节点
const p1 = document.getElementById('p1');
div2.appendChild(p1);

// 获取父元素
console.log(p1.parentNode);

// 获取子元素列表
const div1ChildNodes = div1.childNodes;
console.log(div1ChildNodes);
const div1ChildNodeP = Array.prototype.slice.call(div1.childNodes).filter(child => {
    if(child.nodeType === 1){
        return true
    }
    return false;
})
console.log(div1ChildNodeP);

// 移除
div1.removeChild( div1ChildNodeP[0] );
```
- DOM性能
1. DOM操作非常昂贵，避免频繁的操作DOM
2. 对DOM查询做缓存
```JS
// 不缓存DOM查询结果
for(let i = 0; i < document.getElementsByTagName('p').length; i++){
    // 每次循环，都会计算length，频繁进行DOM查询
}

// 缓存DOM查询结果
const pList = document.getElementsByTagName('p');
const length = pList.length;
for(let i = 0 ; i < length; i++){
    // 缓存length ， 只进行一次DOM查询
}
```
3. 将频繁操作改为一次性操作 
```JS
// 不推荐,影响性能
const list = document.getElementById('list');

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.innerHTML = `List item ${i}`;
    list.appendChild(li);
}

// 优化
// 保存成一个片段，一次性插入，优化性能
const listNode = document.getElementById('list');
const fragment = document.createDocumentFragment();

for(let i = 0; i < 10; i++){
    const li = document.createElement('li');
    li.innerHTML = `List item ${i}`;
    fragment.appendChild(li);
}

// 将fragment区域插入listNode
listNode.appendChild(fragment);
```
#### 题目解答
1. DOM是哪种数据结果
DOM树，是一颗树
2. DOM操作的常用API
- DOM节点操作
- DOM结构操作
3. property和attribute的区别
- property: 修改对象属性，不会体现到html结构中
- attribute： 修改html属性，会改改变html结构
- 两者都有可能引起DOM重新渲染
### BOM
#### 题目
1. 如何识别浏览器类型
2. 分析拆解url各个部分
#### 知识点
- navigator
- screen
- location
- history
```JS
// navigator
const ua = navigator.userAgent;
const isChrome = ua.indexOf('Chrome');
console.log(isChrome);

// screen
console.log(screen.width);
console.log(screen.height);

// location
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.search);
console.log(location.hash); // #号后面
console.log(location.pathname); // 路径

// history
history.back();
history.forward();
```

### 事件绑定
#### 题目
- 编写一个通用的事件监听函数
- 描述时间冒泡的流程
- 无限下拉的图片列表，如何监听每个图片的点击？
#### 知识点
- 事件绑定
- 事件冒泡
```JS
const p1 = document.getElementById('p1');
const body = document.body;
p1.addEventListener('click', e => {
    e.stopPropagation(); // 阻止冒泡
    alert('激活');
})
body.addEventListener('click', e => {
    alert('取消');
})
```
- 事件代理
  - 代码简介 ，减少浏览器内存占用,不滥用
```JS
const p3 = document.getElementById('div3');
p3.addEventListener('click' , event => {
    event.preventDefault(); // 阻止默认行为
    const target = event.target;
    if(target.nodeName === 'A'){
        alert(target.innerHTML)
    }
})
```
#### 问题解答
- 编写一个通用的时间监听函数
```JS
var bindFn = (elem,type,selector,fn) => {
    if(fn == null){
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type,e => {
        const target = e.target;
        if(selector){
            // 代理绑定,matches函数判断正在触发的元素是否符合CSS选择器
            if(target.matches(selector)) {
                fn.call(target,e);
            }
        } else{
            // 普通绑定
            fn.call(target,e);
        }
    })
}

// 普通绑定
const btn1 = document.getElementById('btn1')
bindFn(btn1, 'click', function (event) {
    // console.log(event.target) // 获取触发的元素
    event.preventDefault() // 阻止默认行为
    alert(this.innerHTML)
})

// 代理绑定
const div3 = document.getElementById('div3')
bindFn(div3, 'click', 'a', function (event) {
    event.preventDefault()
    alert(this.innerHTML)
})
```
- 描述时间冒泡和捕获的流程
 - 事件捕获是的意思是最不具体的节点应该最先受到事件，而最具体的节点应该最后收到事件。Document -> element(html) -> element(body) -> element(div)
 - 事件冒泡是从最具体到最不具体. element(div) -> element(body) -> element(html) -> Document
 - 应用场景： proxy
- 无限下拉图片的点击
  - 事件代理
  - 用e.target获取触发元素
  - 用matches来判断是否触发元素
```JS
const p3 = document.getElementById('div3');
p3.addEventListener('click' , event => {
    event.preventDefault(); // 阻止默认行为
    const target = event.target;
    if(target.nodeName === 'A'){
        alert(target.innerHTML)
    }
})
```
### ajax
  #### 题目
  - 手写一个简易的ajax
  - 跨域的常用实现方式
  #### 知识点
  - XMLHttpRequest
```JS
// 手写一个XMLHttpRequest发送请求
// GET请求
const xhr = new XMLHttpRequest();
xhr.open('GET','./data/test.json',false);
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            console.log(xhr.responseText);
        }
    }
}
xhr.send(null);

// POST请求
const xhr = new XMLHttpRequest();
xhr.open('POST','/login'.false);
xhr.onreadystatechange = function (){
    if(xhr.readyState == 4){
        if(xhr.status === 200){
            alert(xhr.responseText);
        }
    }
}

const postData = {
    userName: 'zhangsan',
    password: 'xxx'
}
xhr.send(JSON.stringify(postData));
```
  - 状态码
```Text
# xhr.readyState
0（未初始化）： 还没调用send()方法
1（载入）: 已调用send()方法，正在发送请求
2（载入完成）: send()方法执行完成，已经接收到全部响应内容
3（交互）： 正在解析响应内容
4（完成）： 响应内容解析完成，可以在客户端调用

# xhr.state
2xx: 表示成功处理请求，如200
3xx： 需要重定向，浏览器直接跳转，如301，302，304
4xx：客户端请求错误，如404，403
5xx: 服务器端错误
```
  - 跨域： 同源策略，跨域解决
    - 什么是跨域(同源策略)
    1. ajax请求时，浏览器要求当前网页和server必须同源（安全）
    2. 同源： 协议、域名、端口，三者必须一致
    3. **加载图片、CSS、JS可无视同源策略，标签引入**
    4. <img/>可用于统计打点，可使用第三方统计服务
    5. <link/><script>可以使用CDN，CDN一般都是外域
    6. <script>可实现JSONP
    7. 所有的跨域都必须经过server端允许和配合
    8. 未经server端允许就实现跨域，说明浏览器有漏洞。
    - JSONP
    1. 访问https://www.baidu.com/，服务端一定返回一个html文件吗？ NO
    2. 服务器可以任意动态拼接数据返回，只要符合html格式要求就行
    3. 访问<script src="">，返回的JS非静态，服务器可以任意动态拼接数据返回
    4. <script>可以绕过跨域
    5. <script>可以获得跨域的数据，只要服务端配合
    - CORS(服务端支持)
```JS
// 第二个参数填写跨域的域名称，不建议直接填写""*"
response.setHeader('Access-Control-Allow-Origin','http://localhost:8081');
response.setHeader('Access-Control-Allow-Header','X-Requested-With');
response.setHeader('Access-Control-Allow-Methods','PUT，POST，GET，DELETE，OPTIONS');

// 接收跨域的Cookie
response.setHeader('Access-Control-Allow-Credenttials','true')
```
#### 扩展ajax
## fetch

1. 接收到一个错误的HTTP状态码时，从fetch()返回的Promise不会被标记为reject，即使该HTTP状态码是404或500。相反，他会将Promise状态标记为resolve，仅当网络故障时或请求被阻止时，才会标记为reject
2. fetch不会**从服务端发送或接受任何Cookies**，如果站点依赖于用户session，则会导致未经认证的请求（要发送cookies，必须设置credentials选项）。

## axios

详情见github或mdn

## 核心思想
**Cookie、sessionStorage、localStorage**
### Cookie特点
Cookie：存储大小 限制在4KB。主要用途保存登录信息，满足要求的Cookie会携带在Http Header中发送给服务器。
### Cookie属性
- **时效性**：短暂性和有效期（setMaxAge）
- **安全性**：sercure（HTTPS），HttpOnly(XSS)
- **同源性**：Domain、Path、Samesite(CSRF)
### sessionStorage特点
浏览器关闭以后依然存在。
### localStorage特点
1. 手动清除，关闭后依然存在。
2. 字符串存储，key-value。
## 三者异同
| 特性 | Cookie | localStorage | sessionStorage |
| ---- | ----- | ----- | ----- |
| 存放数据大小 | 4K| 5M| 5M |
| 生命周期 | 一般由服务器生成，可以设置失效时间。如果在浏览器端生成Cookie，默认关闭浏览器失效 | 除非手动清除，否则一直被保存 | 关闭浏览器会话被清除 |
| 网络请求 | 每次Cookie会被携带在HTTP头中，如果Cookie保存过多，会带来应能问题 | 仅在客户端存储，不发送给服务器 | 仅在客户端存储，不发送给服务器 |
| 用途 | 保存用户登录信息 | 保存用户在所有页面的登录信息 | 保存用户在新窗口的登录信息 |

## 导图
![浏览器存储](https://hzy-1301560453.cos.ap-shanghai.myqcloud.com/2020/pictures/20201016163930.png)