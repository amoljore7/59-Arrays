function removeDuplicateStringsArray(arr) {
    const seen = {}; // Object to track unique character sets
    const uniqueStrings = []; // Array to store unique strings

    for (let str of arr) {
        // Create a sorted representation of the characters in the string
        const sortedStr = str.split('').sort().join('');

        // If the sorted character representation hasn't been seen, add it to uniqueStrings
        if (!seen[sortedStr]) {
            seen[sortedStr] = true; // Mark this character set as seen
            uniqueStrings.push(str); // Add the original string to the result
        }
    }

    return uniqueStrings;
}

// Example usage
const inputArray = ['code', 'frame', 'doce', 'framer', 'code'];
const result = removeDuplicateStringsArray(inputArray);
console.log(result); // Output: ['code', 'frame', 'framer']