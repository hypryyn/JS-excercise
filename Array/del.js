function deleteElement(arr, ele) {
    for (var i=0;i<arr.length;i++){
      if(arr[i]==ele){
        arr.splice(i,1); //Delete element from array
      }
    }
    return arr;
  }
  var arr = [23,56,4,78,5,63,45,210,56];
  arr = deleteElement(arr, 56)
  
  console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

  function delEll(arry, ele) {
    for (let i=0;i<arry.length;i++){
      if(arry[i]==ele){
        arry.splice(i,1);
      }
    }
    return arry;
  }
  let arry = [5,3,4,5,7,2,8,5,6,4];
  arry = delEll(arry, 5);

  console.log(arry);