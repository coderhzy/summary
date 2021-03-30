var a = [1, 2, 3, 4, 5, 6, 7];

let b = a.map(x => x * 3);
console.log(b);

let c = a.filter(x => x > 3);
console.log(c);


/**
 * reducer 函数接收4个参数:
 * Accumulator (acc) (累计器)
 * Current Value (cur) (当前值)
 * Current Index (idx) (当前索引)
 * Source Array (src) (源数组)
 * 您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。
 */
let d = a.reduce((x, y) => x + y);
console.log(d);