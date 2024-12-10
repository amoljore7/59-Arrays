
// Problem 1: Find the First & Last Non-Repeating Character

const firstAndLastUniChar = (s) => {
    const charCount = {};

    // Count occurrences of each character 
    for (let char of s) { //O(n) 
        charCount[char] = (charCount[char] || 0) + 1; // Increment count
    }
    console.log("Character Count before delete:", charCount);

    // Remove characters that are repeating
    for (let key in charCount) {
        if (charCount[key] > 1) {
            delete charCount[key];
        }
    }

    console.log("Character Count of Non-Repeating:", charCount);

    // Get all keys of the object; Object.keys(charCount) converts an object into an array of its keys
    const keys = Object.keys(charCount);
    console.log("key:", keys);
    console.log("value:", Object.values(charCount));

    // Access the first and last keys
    console.log('>>> First Non-Repeating Character >>>', keys[0]);
    console.log('>>> Last Non-Repeating Character >>>', keys[keys.length - 1]);
};

// Example usage
firstAndLastUniChar('loveleetcode');