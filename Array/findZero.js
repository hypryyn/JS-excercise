var arr = [[0, 1, 1], [0, 1, 0], [1, 0, 0]];
var zeroCount = 0;
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[0].length; j++) {
    zeroCount = arr[i][j] == 0 ? zeroCount + 1 : zeroCount;
  }
}

console.log(zeroCount) //5

let zero = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    zero = arr[i][j] == 0 ? zero + 1 : zero;
  }
}

console.log(zero);