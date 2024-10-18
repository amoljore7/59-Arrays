//Problem 1: Find the First Non-Repeating Character

const firstNonRepeatingChar = (s) => {
    const charCount = {}

    for (let char of s) {
        charCount[char]
        if (charCount[char]) {
            charCount[char] = charCount[char] + 1
        } else {
            charCount[char] = 1
        }
    }
    for (let key in charCount) {
        if (charCount[key] > 1) {
            delete charCount[key]
        }
    }

    for (let index = 0; index < s.length; index++) {
        if (charCount[s[index]] === 1) {
            return index // return index
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