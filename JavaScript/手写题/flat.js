// var arr = [1, 2, [2, 4, 5, [34, 53, 23, [55, 2]]]];

// var flat = function* (a) {
//     var length = a.length;
//     for (var i = 0; i < length; i++) {
//         var item = a[i];
//         if (typeof item !== 'number') {
//             yield* flat(item)
//         } else {
//             yield item
//         }
//     }
// }

// var newArr = [];
// for (var f of flat(arr)) {
//     newArr.push(f)
// }
// console.log(newArr);

// console.log(flat(arr))


var arr = [1, 2, [2, 4, 5, [34, 53, 23, [55, 2]]]];

var flat = function* (a) {
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        var item = a[i];
        if (typeof item === 'number') {
            yield* flat(item)
        } else {
            yield flat
        }
    }
}

var newArr = [];
for (var f of flat(arr)) {
    arr.push(f)
}
console.log(newArr);