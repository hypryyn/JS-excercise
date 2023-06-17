function findFibonacci(num) {
    var n1=0;
    var n2=1;
    var count=2;
    var n3;
    while(true){
      n3=n1+n2;
      if(n3==num){
         console.log(`Element ${num} is present in index ${count}`)
         break;
       }     
       else if(n3>num){
         console.log("Element not present");
         break;
       }
       n1=n2;
       n2=n3;
       count++;
    }
  }
  
  findFibonacci(13) //"Element 13 is present in index 7"
  findFibonacci(144) //"Element 144 is present in index 12"