// v1

function removeItemFromArray1(array1, n1) {
    const newArray = [];

    for ( let i = 0; i < array1.length; i++) {
        if(array1[i] !== n1) {
            newArray.push(array1[i]);
        }
    }
    return newArray;
}

const result1 = removeItemFromArray1([1, 2, 3 , 4 , 5], 5);

console.log(result1);

// v2

function removeItemFromArray2(array2, n2) {
    const index = array2.indexOf(n2);

    // if the element is in the array, remove it
    if(index > -1) {

        // remove item
        array2.splice(index, 1);
    }
    return array2;
}

const result2 = removeItemFromArray2([1, 2, 3 , 4, 5], 5);

console.log(result2);

