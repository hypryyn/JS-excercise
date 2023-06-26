// function digitCount(num) {
//     var count=0; //return 1 for pow=0
//     while(num!=0){
//       num=Math.floor(num/10);
//       count++;
//     }
//     return count;
//   }


nCount = (num) => {
  let count=0;
  while(num!=0){
    num=Math.floor(num/10);
    count++;
  }
  return count;
}

console.log(nCount(8367)); //4
console.log(nCount(563349)); //6