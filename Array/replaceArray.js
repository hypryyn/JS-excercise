// v1

function removeItemFromArray1(array1, n1) {
    const newArray = [];

    for ( let i = 0; i < array1.length; i++) {
        if(array[i] !== n) {
            newArray.push(array1[i]);
        }
    }
    return newArray;
}

const result1 = removeItemFromArray1([1, 2, 3 , 4 , 5], 2);

console.log(result1);

// v2

function removeItemFromArray2(array2, n2) {
    const index = array.indexOf(n);

    // if the element is in the array, remove it
    if(index > -1) {

        // remove item
        array.splice(index, 1);
    }
    return array2;
}

const result2 = removeItemFromArray2([1, 2, 3 , 4, 5], 2);

console.log(result2);

