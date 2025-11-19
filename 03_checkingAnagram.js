//Problem 3: Checking anagram

const checkingAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    let counter = {} // to store character counts
    for (let char of str1) {
        counter[char] = (counter[char] || 0) + 1
    }
    console.log('>>>counter after first string', counter) // { h: 1, e: 1, l: 2, o: 1 }

    for (let char of str2) {
        if (!counter[char]) {
            return false
        }
        counter[char] = counter[char] - 1
    }
    console.log('>>>counter after second string', counter) // { h: 0, e: 0, l: 0, o: 0 }
    return true
}
console.log('>>>final', checkingAnagram('hello', 'llheo'))     // Output: true