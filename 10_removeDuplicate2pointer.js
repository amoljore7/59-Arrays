//remove duplicate from sorted array. using 2 pointer approach

function removeDuplicates(arr) {

    if (arr.length === 0) return arr;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    // Trim the array to the size of unique elements
    return arr.slice(0, i + 1);

    // return arr.filter((value, index) => arr.indexOf(value) === index);
}

const arr = [1, 1, 2, 2, 3, 4, 4, 5];

console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]