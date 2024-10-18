function maxConsecutiveNumberOfOnes(arr) {
    let max = 0;
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count = count + 1
            if (count > max) {
                max = count
            }
        } else {
            count = 0
        }
    }
    return max

}

// Example usage:
const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1]

console.log(maxConsecutiveNumberOfOnes(arr)); // Output: 3