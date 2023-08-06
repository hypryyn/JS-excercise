// function splitIntoChunk(arr, chunk) {

//     for (i=0; i < arr.length; i += chunk) {

//         let tempArray;
//         tempArray = arr.slice(i, i + chunk);
//         console.log(tempArray);
//     }

// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunk = 2;
// splitIntoChunk(array, chunk);

// // or

// function splitArrIntoChunk(Arr1, chunk1) {

//     while(arr.length > 0) {

//         let tempArray;
//         tempArray = Arr1.splice(0, chunk1);
//         console.log(tempArray);
//     }
// }

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunk1 = 2;
// splitIntoChunk(array, chunk);

// empty an array

function emptyArray(arr) {

    // substituting new array
    arr = [];
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

const result = emptyArray(array);
console.log(result);

// using splice

function emptyArray2(arr2) {

    // substituting new array
    arr.splice(0, arr.length);
    
    return arr2;
}

const array2 = [1, 2 ,3];
console.log(array2);

// call the function
const result2 = emptyArray2(array2);
console.log(result2);