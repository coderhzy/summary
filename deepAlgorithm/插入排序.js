function insert(A, i, x) {
    let p = i - 1;
    while (p >= 0 && A[p] > x) {
        // 大于目标值向后移
        A[p + 1] = A[p];
        p--
    }
    // 在p + 1位置那个空位置放上目标值
    A[p + 1] = x;
}

function insertion_sort(A) {
    for (let i = 1; i < A.length; i++) {
        insert(A, i, A[i]);
    }
    return A;
}

// const A = [3, 5, 6, 7, 8, 9, 12, 13, 15, 16, 18, 19, 30, 70, 78, 98];
const A = [3, 7, 6, 11, 98, 37];
console.log(insertion_sort(A));
console.log(insertion_sort(A));
console.log(insertion_sort(A));