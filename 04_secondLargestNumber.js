// find second larger num from array 

function sLargest(arr) {

    let largest = arr[0]
    let sLargest = Number.MIN_SAFE_INTEGER || -1

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            sLargest = largest
            largest = arr[i]
        } else if (arr[i] > sLargest && arr[i] !== largest) {
            sLargest = arr[i]
        }
    }
    console.log('>>>sLargest', sLargest)
}

sLargest([1, 2, 3, 4, 5, 0, 8, 6, 9, 4, 2, 3])