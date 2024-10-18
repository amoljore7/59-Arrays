function unionOfTwoSortedArray(arr1, arr2) {
    // Combine both arrays
    let arr = [...arr1, ...arr2];

    // Use a Set to eliminate duplicates
    let temp1 = new Set(arr);

    // Convert the Set back to an array and sort it
    let result = [...temp1].sort((a, b) => a - b);

    console.log(result);

}
unionOfTwoSortedArray([1, 2, 2, 3, 4, 4, 5], [1, 2, 4, 5, 6, 7])