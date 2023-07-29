function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);

// Using Spread Syntax and Set

function getUniqueAfterMerge1(arr3, arr4){

    // merge two arrays
    let arr = [...arr1, ...arr2];

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array3 = [1, 2, 3];
const array4 = [2, 3, 5]

// calling the function
getUniqueAfterMerge1(array1, array2);