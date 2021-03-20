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
### 存储 