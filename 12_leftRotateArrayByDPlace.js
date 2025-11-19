// Left Rotate array by D place

function leftRotateArrayByDPlace(arr, D) {
    let d = D % arr.length

    if (arr.length === 0) return arr;

    const temp = []
    for (let i = 0; i < d; i++) {
        temp.push(arr[i])
    }
    console.log('temp:', temp); // [1,2,3]
    console.log('arr:', arr); // [1,2,3,4,5,6,7] original arr

    for (let i = d; i < arr.length; i++) {
        arr[i - d] = arr[i]
    }
   console.log('arr:', arr); // [4,5,6,7,5,6,7] original arr modified
    let j = 0
    let n = arr.length // original arr length is 7 means travel to index 6
    for (let i = n - d; i < n; i++) { // i=4 to 6
        arr[i] = temp[j] // arr[4] = temp[0], arr[5] = temp[1], arr[6] = temp[2]
        j++;
    }

    return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(leftRotateArrayByDPlace(arr, 3)); //Output [4, 5, 6, 7, 1, 2, 3]
console.log(leftRotateArrayByDPlace(arr, 8)); //Output [5, 6, 7, 1, 2, 3, 4]