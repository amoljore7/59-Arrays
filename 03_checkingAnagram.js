//Problem 3: Checking anagram

const checkingAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    let counter = {}
    for (let char of str1) {
        counter[char] = (counter[char] || 0) + 1
    }

    for (let char of str2) {
        if (!counter[char]) {
            return false
        }
        counter[char] = counter[char] - 1
    }
    return true
}
console.log('>>>final', checkingAnagram('hello', 'llheo'))     // Output: true