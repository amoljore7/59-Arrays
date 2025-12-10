
// Problem 1: Find the First & Last Non-Repeating Character

const firstAndLastUniChar = (s) => {
    const charCount = {};

    // Count occurrences of each character 
    for (let char of s) { //O(n) 
        charCount[char] = (charCount[char] || 0) + 1; // Increment count
    }
    console.log("Character Count before delete:", charCount); // { l: 2, o: 2, v: 1, e: 4, t: 1, c: 1, d: 1 }

    // Remove characters that are repeating
    for (let key in charCount) {
        if (charCount[key] > 1) {
            delete charCount[key];
        }
    }

    console.log("Character Count of Non-Repeating:", charCount); // { v: 1, t: 1, c: 1, d: 1 }

    // Get all keys of the object; Object.keys(charCount) converts an object into an array of its keys
    const keys = Object.keys(charCount);
    console.log("key:", keys); // [ 'v', 't', 'c', 'd' ]
    console.log("value:", Object.values(charCount)); // [ 1, 1, 1, 1 ]

    // Access the first and last keys
    console.log('>>> First Non-Repeating Character >>>', keys[0]); // 'v'
    console.log('>>> Last Non-Repeating Character >>>', keys[keys.length - 1]); // 'd'
};

// Example usage
firstAndLastUniChar('loveleetcode');