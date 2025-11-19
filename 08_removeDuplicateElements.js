// remove Duplicate Elements

function removeDuplicateElements(arr) {
    let elementCount = {}; // Object to track element occurrences
    let unique = ''; // String to store unique elements (converted to string)

    for (let num of arr) {
        if (elementCount[num]) {
            // If the number is already in elementCount, do nothing
        } else {
            // If it's not in elementCount, add it to elementCount and unique string
            elementCount[num] = 1; // Mark the number as seen 
            unique += num; // Append the number to unique string (this can be adapted) EX: '12345'
        }
    }
    console.log(Array.from(unique)) //EX: [ '1', '2', '3', '4', '5' ]
    return unique.split('').map(Number); // Convert the string back to an array of numbers
}

// Example usage
const inputArray = [1, 1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicateElements(inputArray)); // Output: [1, 2, 3, 4, 5]