// Use for...in for iterating over objects.
// Use for...of or for for iterating over arrays or strings.

const obj1 = { a: 1, b: 2, c: 3 };

for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) { // Check for own properties, excluding inherited ones
        console.log(key, obj1[key]);  // Logs "a 1", "b 2", "c 3"
    }
}


// Arrays
const arr1 = [10, 20, 30];
for (const value of arr1) {
    console.log(value);  // Logs 10, 20, 30
}

// Strings
const str = "hello";
for (const char of str) {
    console.log(char);  // Logs "h", "e", "l", "l", "o"
}

const dd = new Set([1,2,2,3,4,4,5]);
console.log(dd);
//convert set to array
console.log([...dd]);
console.log(Array.from(dd));
console.log(Array.from('hello'));

//convert array to set
const arr = [1,2,2,3,4,4,5];
const mySet = new Set(arr);
console.log(mySet);

//convert map to array
const myMap = new Map();
myMap.set('a',1);
myMap.set('b',2);
myMap.set('c',3);
console.log(myMap);
console.log([...myMap]);
console.log(Array.from(myMap));

//convert array to map
const arr2 = [['a',1],['b',2],['c',3]];
const mapFromArr = new Map(arr2);
console.log(mapFromArr);

//convert object to map
const obj = {a:1, b:2, c:3};
const mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj);

//convert map to object
const map2 = new Map();
map2.set('x',10);
map2.set('y',20);
map2.set('z',30);
const objFromMap = Object.fromEntries(map2);
console.log(objFromMap);
console.log('>>>', firstNonRepeatingChar('aabbcc')) // -1
console.log('>>>', firstNonRepeatingChar('aabbcddee')) // c