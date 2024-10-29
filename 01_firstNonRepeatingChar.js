//Problem 1: Find the First Non-Repeating Character

const firstNonRepeatingChar = (s) => {
    const charCount = {}

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let key in charCount) {
        if (charCount[key] > 1) {
            delete charCount[key]
        }
    }

    // Find the first character with a frequency of 1
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return s[i];
        }
    }

    for (let value in charCount) {
        if (charCount[value] === 1) {
            return value // return value
        }
    }
    return -1
}
console.log('>>>', firstNonRepeatingChar('loveleetcode'))