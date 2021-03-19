// 不推荐,影响性能
const list = document.getElementById('list');

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.innerHTML = `List item ${i}`;
    list.appendChild(li);
}

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