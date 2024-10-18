
//Left Rotate array by 1 place

function leftRotateArrayByOnePlace(arr) {

    if (arr.length === 0) return arr;
    let temp = arr[0]

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = temp

    return arr
}

const arr = [1, 2, 3, 4, 5];
console.log(leftRotateArrayByOnePlace(arr)); //Output [2, 3, 4, 5, 1] o(N)