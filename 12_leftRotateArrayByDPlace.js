// Left Rotate array by D place

function leftRotateArrayByDPlace(arr, D) {
    let d = D % arr.length

    if (arr.length === 0) return arr;

    const temp = []
    for (let i = 0; i < d; i++) {
        temp.push(arr[i])
    }


    for (let i = d; i < arr.length; i++) {
        arr[i - d] = arr[i]
    }

    let j = 0
    let n = arr.length
    for (let i = n - d; i < n; i++) {
        arr[i] = temp[j]
        j++;
    }

    return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(leftRotateArrayByDPlace(arr, 3)); //Output [4, 5, 6, 7, 1, 2, 3]
console.log(leftRotateArrayByDPlace(arr, 8)); //Output [5, 6, 7, 1, 2, 3, 4]