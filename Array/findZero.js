var arr = [[0,1,1],[0,1,0],[1,0,0]];
var zeroCount = 0;
for(var i=0;i<arr.length;i++){
  for(var j=0;j<arr[0].length;j++){
    zeroCount = arr[i][j]==0 ? zeroCount+1 : zeroCount; 
  }
}

console.log(zeroCount) //5