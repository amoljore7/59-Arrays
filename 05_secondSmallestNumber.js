// Second smallest

function sSmallest(arr) {

    let smallest = arr[0]
    let sSmallest = Number.MAX_SAFE_INTEGER

    for (i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            sSmallest = smallest
            smallest = arr[i]
        } else if (arr[i] < sSmallest && arr[i] !== smallest) {
            sSmallest = arr[i]
        }
    }
    console.log('>>>sSmallest', sSmallest)
}

sSmallest([1, 2, 3, 4, 5, 0, 8, 6, 9, 4, 2, 3])