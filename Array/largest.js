// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];  
// var largest = arr[0];
// for (var i = 0; i < arr.length; i++) {
//    largest = arr[i] > largest ? arr[i] : largest; //Check largest number
// }
// console.log(largest) //567

////

let arr = [4, 5, 90, 23, 32, 11, 70];

let biggest = arr[0];
for (let j = 0; j < arr.length; j++) {
   biggest = arr[j] > biggest ? arr[j] : biggest;
}
console.log(biggest);