// Sort an array of 0's 1's & 2's

function sortColors(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    // Traverse the array
    while (mid <= high) {
        if (arr[mid] === 0) {
            // Swap arr[low] and arr[mid], increment low and mid
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            // Move mid pointer to the right
            mid++;
        } else if (arr[mid] === 2) {
            // Swap arr[mid] and arr[high], decrement high
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;  // The array is now sorted
}

// Example usage:
const arr = [2, 0, 1, 2, 1, 0, 1, 2, 0];
console.log(sortColors(arr));  // Output: [0, 0, 0, 1, 1, 1, 2, 2, 2] n = 7/ 2 = 3 ans is 4 > 3. 2 is 4 times