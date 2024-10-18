function longestSubarrayWithSumK(arr, K) {
    let maxLength = 0; // To track the longest subarray length
    let longestSubarray = []; // To store the longest subarray

    // Iterate over each starting point of the subarray
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0; // To store the sum of the current subarray

        // Iterate over each subarray starting at i and ending at j
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j]; // Add the current element to the subarray sum

            // Check if the sum of the current subarray equals K
            if (currentSum === K) {
                const currentLength = j - i + 1; // Calculate the length of the current subarray
                if (currentLength > maxLength) {
                    maxLength = currentLength; // Update maxLength if necessary
                    longestSubarray = arr.slice(i, j + 1); // Store the current subarray
                }
            }
        }
    }

    return {
        length: maxLength,
        subarray: longestSubarray
    };
}

const arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
const K = 3;
const result = longestSubarrayWithSumK(arr, K);

console.log(result?.length);    // Output: 3 (length of the longest subarray)
console.log(result?.subarray);  // Output: [1,1,1] (the longest subarray)