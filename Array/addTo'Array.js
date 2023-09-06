function addElement1(arr1) {

    arr1.unshift(9);
    
    console.log(arr1);
}

const array1 = [1, 2, 3];

addElement1(array1);

// v2

function addElement2(arr2) {

    arr2.splice(0, 0, 4);
    
    console.log(arr2);
}

const array2 = [1, 2, 3];

addElement2(array2);