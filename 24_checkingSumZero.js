//Problem 3: Checking sum zero

const checkingSumZero = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                return [[nums[i], nums[j]]];
            }
        }

    }
    return -1
}
console.log('>>>1', checkingSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]))     // Output: [-4,4]