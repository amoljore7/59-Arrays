// Use for...in for iterating over objects.
// Use for...of or for for iterating over arrays or strings.

const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    if (obj.hasOwnProperty(key)) { // Check for own properties, excluding inherited ones
        console.log(key, obj[key]);  // Logs "a 1", "b 2", "c 3"
    }
}


// Arrays
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value);  // Logs 10, 20, 30
}

// Strings
const str = "hello";
for (const char of str) {
    console.log(char);  // Logs "h", "e", "l", "l", "o"
}