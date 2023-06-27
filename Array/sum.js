function digitSum(num) {
  var sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(digitSum(4367)); //20
console.log(digitSum(56349)); //27

nSum = (numb) => {
  let sum = 0;
  while (numb != 0) {
    sum += numb % 10;
    numb = Math.floor(numb / 10);
  }
  return sum;
}

console.log(nSum(57849));