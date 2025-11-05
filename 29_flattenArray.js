const arr = [1, 2, 3, { test: 'demo' }, [4, [5, 6]], 7, 8]
let result = []
function flattenArray(arr) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flattenArray(item);
    } else {
      result.push(item);
    }
  })
  return result;
}


console.log('>>> flat array:', flattenArray(arr)); //>>> flat array: [ 1, 2, 3, { test: 'demo' }, 4, 5, 6, 7, 8 ]