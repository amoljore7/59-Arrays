//Problem 1: Find the First Non-Repeating Character

const firstNonRepeatingChar = (string) => {
    const charCount = {}

    for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let key in charCount) {
        if (charCount[key] > 1) {
            delete charCount[key]
        }
    }


    for (let value in charCount) {
        if (charCount[value] === 1) {
            return value // return value
        }
    }
    return -1
}
console.log('>>>', firstNonRepeatingChar('loveleetcode')) // v