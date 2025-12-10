// remove Duplicate Elements

function removeDuplicateElements(arr) {
    let seen = {}; // Object to track element occurrences
    let unique = []; // String to store unique elements (converted to string)

    for (let num of arr) {
        if (seen[num]) {
            // If the number is already in seen, do nothing
        } else {
            // If it's not in seen, add it to seen and unique string
            seen[num] = true; // Mark the number as seen 
            unique.push(num)
        }
    }

    return unique;
}

// Example usage
const inputArray = [1, 1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicateElements(inputArray)); // Output: [1, 2, 3, 4, 5]

// Alternative simpler approach using Set
const uniqueElement = new Set(inputArray);
console.log(Array.from(uniqueElement)); // Output: [1, 2, 3, 4, 5]