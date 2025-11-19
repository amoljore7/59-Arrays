//check if the array is sorted

function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Compare each element with the next one and check if it's greater than the next element 
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    // If no violations are found, return true
    return true;
}

console.log('>>>isSorted', isSorted([1, 2, 3, 4, 5, 8])); // Output: true
console.log('>>>isSorted', isSorted([1, 2, 5, 3, 8]));    // Output: false