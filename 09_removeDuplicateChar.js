// remove Duplicate Characters

function removeDuplicateCharacters(str) {
    let charCount = {}; // Object to track character occurrences
    let unique = '';    // String to store the unique characters

    for (let char of str) {
        if (charCount[char]) {
            // If the character is already in charCount, do nothing
        } else {
            // If it's not in charCount, add it to charCount and unique string
            charCount[char] = 1;
            unique += char; // Append the character to unique string
        }
    }

    return unique;
}

const input = 'priya riya supriya';
removeDuplicateCharacters(input); // Output: 'priya su'