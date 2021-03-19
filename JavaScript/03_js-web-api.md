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
### 事件绑定
### ajax
### 存储 