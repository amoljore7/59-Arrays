function findMissingNumber(arr, n) {
    // Calculate the expected sum of numbers from 1 to n
    let expectedSum = 0
    //using for loop how to calculate expectedSum
    for (let i = 1; i <= n; i++) {
        expectedSum += i; 
    }
   console.log(expectedSum) //15

    // Calculate the actual sum using a loop
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    // The missing number is the difference between the expected and actual sum
    return expectedSum - actualSum;
}

// Example usage:

const arr = [1, 2, 4, 5,]; // Missing number is 3
const n = 5; // Total elements should be 1 to 5
console.log(findMissingNumber(arr, n)); // Output: 3