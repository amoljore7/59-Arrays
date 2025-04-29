

function findLeaders(arr) {
    const leaders = [];
    let maxFromRight = arr[arr.length - 1]; // Start with the last element
    leaders.push(maxFromRight); // Last element is always a leader
    
    // Traverse the array from right to left
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] > maxFromRight) {
        leaders.push(arr[i]);
        maxFromRight = arr[i];
      }
    }
    
    // Reverse the leaders array to maintain the order of appearance
    return leaders.reverse();
  }
  
  const arr = [10, 22, 12, 3, 0, 6];
  console.log(findLeaders(arr)); // Output: [22, 12, 6]
  




//   To find the "leader" elements in an array, we need to identify the elements that are greater than all elements to their right in the array. For the given array [10, 22, 12, 3, 0, 6], the leader elements would be [22, 12, 6] because:

// 22 is the largest among all elements to its right.

// 12 is greater than 3, 0, and 6 (elements to its right).

// 6 is the last element, so it is always considered a leader.