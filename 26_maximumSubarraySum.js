function maxSubArray(nums) {
    if (nums.length === 0) return { maxSum: 0, subArray: [] }; // Handle empty array case

    let maxGlobal = nums[0];
    let maxCurrent = nums[0];

    let start = 0;
    let end = 0;
    
    let tempStart = 0;

    for (let i = 1; i < nums.length; i++) {
        // Instead of Math.max, we use an if condition
        if (maxCurrent + nums[i] > nums[i]) {
            maxCurrent += nums[i];
        } else {
            maxCurrent = nums[i];
            tempStart = i;  // Start of a new subarray
        }

        // Check if the current sum is the best we've seen so far
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
            start = tempStart;
            end = i;
        }
    }

    // Extract the subarray that gives the maximum sum
    const maxSubArray = nums.slice(start, end + 1);

    return { maxSum: maxGlobal, subArray: maxSubArray };
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(arr);
console.log(result); // Outputs: { maxSum: 6, subArray: [4, -1, 2, 1] }
