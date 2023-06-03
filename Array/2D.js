function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

// var arr = [[2, 3], [3, 5], [4, 6]];
printArr([[2, 3], [3, 5], [4, 6]]);

// function printArray(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[0].length; j++) {
//             console.log(arr[i][j]);
//         }
//     }
// }
// var arr = [[1, 2],
// [3, 4],
// [5, 6]];

// printArray(arr) //1 2 3 4 5 6