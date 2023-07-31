function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);

// or

function splitArrIntoChunk(Arr1, chunk1) {

    while(arr.length > 0) {

        let tempArray;
        tempArray = Arr1.splice(0, chunk1);
        console.log(tempArray);
    }
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk1 = 2;
splitIntoChunk(array, chunk);