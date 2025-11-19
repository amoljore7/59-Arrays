//Problem 1: Find the First Non-Repeating Character

const firstNonRepeatingChar = (string) => {
    const charCount = {}

    for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    console.log(charCount) // { l: 2, o: 2, v: 1, e: 4, t: 1, c: 1, d: 1 }
    for (let key in charCount) {
        if (charCount[key] > 1) {
            delete charCount[key]
        }
    }
    console.log(charCount) // { v: 1, t: 1, c: 1, d: 1 }
    for (let key in charCount) {
        if (charCount[key] === 1) {
            return key // return key
        }
    }
    return -1
}
console.log('>>>first NonRepeating Char is =>', firstNonRepeatingChar('loveleetcode')) // v