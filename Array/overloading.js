// v1

function sum1() {  
    
    // if no argument        
    if (arguments.length == 0) {  
        console.log('You have not passed any argument');  
    }

    // if only one argument 
    else if (arguments.length == 1) {  
        console.log('Pass at least two arguments');  
    }

    // multiple arguments
    else {
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result); 
    }  
}

sum1();
sum1(5); 
sum1(5, 9);    
sum1(1, 2, 3, 4, 5, 6, 7, 8, 9); 


// v2

function sum2() {
    switch (arguments.length) {
    case 0:
        console.log('You have not passed any argument');
        break;
    case 1:
        console.log('Pass at least two arguments');
        break;
    default:
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result);
        break;
    }
}

sum2();
sum2(5); 
sum2(5, 9);    
sum2(1, 2, 3, 4, 5, 6, 7, 8, 9);