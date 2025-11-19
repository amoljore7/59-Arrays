function unionOfTwoSortedArray(arr1, arr2) {
    // Combine both arrays
    let arr = [...arr1, ...arr2]; // [1,2,2,3,4,4,5,1,2,4,5,6,7]

    // Use a Set to eliminate duplicates
    let temp1 = new Set(arr); // Set { 1, 2, 3, 4, 5, 6, 7 }

    // Convert the Set back to an array and sort it
    let result = [...temp1].sort((a, b) => a - b); // [1,2,3,4,5,6,7]

    console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7]

}
unionOfTwoSortedArray([1, 2, 2, 3, 4, 4, 5], [1, 2, 4, 5, 6, 7])