function twoSum(nums, target) {
    const map = {}; // Create a hashmap to store numbers and their indices

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]; // Calculate the difference needed

        // If the diff is already in the map, return the indices
        if (diff in map) {
            return [map[diff], i];
        }

        // Otherwise, store the number and its index in the map
        map[nums[i]] = i;
    }

    return []; // In case no solution is found
}

// Example usage:
const nums = [2, 6, 5, 8, 11];
const target = 14;
console.log(twoSum(nums, target)); // Output: [1, 3]