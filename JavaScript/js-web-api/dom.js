// const div1 = document.getElementById('div1');
// console.log('div1',div1);

// const divList = document.getElementsByTagName('div'); // 集合
// console.log('divList.length', divList.length);
// console.log('divList[1]',divList[1]);

// const containerList = document.getElementsByClassName('container');
// console.log('containerList.length', containerList.length);
// console.log('containerList[1]',containerList[1]);

// const pList = document.querySelectorAll('p');
// console.log('pList',pList);

const pList = document.querySelectorAll('p');
const p1 = pList[0];

// property 形式
p1.style.width = '100px';
console.log( p1.style.width ); // 100px
p1.className = 'red'; 
console.log( p1.className) // red
console.log(p1.nodeName) // p
console.log(p1.nodeName) // 1

//attribute 形式
const pList = document.querySelectorAll('p');
const p = pList[0];
p.getAttribute('data-name');
p.setAttribute('data-name','imooc');
p.getAttribute('style')
p.setAttribute('style','font-size:30px')