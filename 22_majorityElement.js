// Majority Element >N/2 means more that n/2

function majorityElement(arr) {
    const tem = arr.length / 2; // Half of the array length
    const counts = {}; // To store counts of each element

    // Count occurrences of each element
    for (let key of arr) {
        counts[key] = (counts[key] || 0) + 1;

        // If the count of the current element exceeds or equals half the array length, return the element
        if (counts[key] > tem) {
            return key; // Return the element (not the count)
            // return counts[key] // Return the element count)
            // return `${key} in ${counts[key]} times`
        }
    }

    // In case no majority element is found
    return null;
}

let arr = [2, 2, 3, 3, 1, 2, 2];
console.log(majorityElement(arr)); // Output: 2