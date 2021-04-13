function bsearch(A, x) {
    let l = 0, // 查找范围左边界
        r = A.length - 1, // 查找范围右
        guess; // 猜想值

    while (l <= r) {
        guess = Math.floor((l + r) / 2);
        // 循环不变式
        // guess等于l，r中间位置
        // l： 查找范围左 ， r：查找范围右
        if (A[guess] === x) return guess
        else if (A[guess] > x) r = guess - 1
        else l = guess + 1;
        // 循环不变式
        // l：新查找范围左 r：新查找范围右
    }
    return -1;
}

const A = [3, 5, 6, 7, 8, 9, 12, 13, 15, 16, 18, 19, 30, 70, 78, 98];
console.log(bsearch(A, 78));
console.log(bsearch(A, 9));
console.log(bsearch(A, 11));