function rightRotateArrayByDPlace(arr, D) {
    if (arr.length === 0) return arr;  // Handle empty array case

    let d = D % arr.length;  // In case D is larger than array length

    // Extract the last d elements (they will move to the front)
    const lastPart = arr.slice(-d);  // From end to last d elements
    // Extract the rest of the array (they will shift to the right)
    const firstPart = arr.slice(0, arr.length - d);

    // Concatenate the two parts: lastPart goes to the front
    return lastPart.concat(firstPart);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rightRotateArrayByDPlace(arr, 3));  // Output: [5, 6, 7, 1, 2, 3, 4]
