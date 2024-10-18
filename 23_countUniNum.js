//Problem 3: Count uni numbers

const countUniNum = (arr) => {
    let counter = {}
    for (let item of arr) {
        counter[item] = (counter[item] || 0) + 1
    }
    return Object.keys(counter).length
}
console.log('>>>final', countUniNum([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]))     // Output: 8