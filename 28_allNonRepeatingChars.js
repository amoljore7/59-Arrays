const allNonRepeatingChars = (string) => {
    const charCount = {}

    for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let key in charCount) {
        if (charCount[key] > 1) {
            delete charCount[key]
        }
    }

    return Object.keys(charCount);
}
console.log('>>>', allNonRepeatingChars('loveleetcode')) // [ 'v', 'm' ]
console.log('>>>', allNonRepeatingChars('aabbcc')) // []
console.log('>>>', allNonRepeatingChars('abcd')) // [ 'a', 'b', 'c', 'd' ]
console.log('>>>', allNonRepeatingChars('aabbcddee')) // [ 'c' ]