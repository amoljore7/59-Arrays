function numberAppearsOnlyOnes(arr) {
    const obj = {};

    // Count occurrences of each number in the array
    for (let value of arr) {
        obj[value] = (obj[value] || 0) + 1;
    }

    // Find and return the number(s) that appear once
    for (let value in obj) {
        if (obj[value] === 1) {
            return Number(value); // Return the first value that appears once
        }
    }
}

// Example usage:
const arr = [1, 1, 2, 3, 3, 4, 4]

console.log(numberAppearsOnlyOnes(arr)); // Output: 2