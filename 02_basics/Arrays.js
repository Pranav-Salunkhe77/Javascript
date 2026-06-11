//Arrays

let arr = [1, 2, 3, 4, 5];

// //1. Accessing elements
// console.log(arr[0]); // Output: 1
// console.log(arr[1]); // Output: 2   

// //2. Modifying elements
// arr[1] = 20;
// console.log(arr[1]); // Output: 20

// //3. Length of array
// console.log(arr.length); // Output: 5

// //4. Adding elements
// arr.push(6); // Adds 6 to the end of the array
// console.log(arr); // Output: [1, 20, 3, 4, 5, 6]

// //5. Removing elements
// arr.pop(); // Removes the last element (6)
// console.log(arr); // Output: [1, 20, 3, 4, 5]

// //6. Iterating over an array
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); // Output: 1, 20, 3, 4, 5
// }

// //7. Array methods
// console.log(arr.indexOf(20)); // Output: 1 (index of the first occurrence of 20)
// console.log(arr.includes(3)); // Output: true (checks if 3 is in the array)

//These are just some of the basic operations you can perform on arrays in JavaScript.

//ALL methodes of array in js with example

//1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
arr.push(6);
console.log(arr); // Output: [1, 20, 3, 4, 5, 6]

//2. pop(): Removes the last element from an array and returns that element.
let lastElement = arr.pop();
console.log(lastElement); // Output: 6
console.log(arr); // Output: [1, 20, 3, 4, 5]

//3. shift(): Removes the first element from an array and returns that element.
let firstElement = arr.shift();
console.log(firstElement); // Output: 1
console.log(arr); // Output: [20, 3, 4, 5]

//4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(10);
console.log(arr); // Output: [10, 20, 3, 4, 5]

//5. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(arr.indexOf(3)); // Output: 2
console.log(arr.indexOf(100)); // Output: -1

//6. includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(arr.includes(4)); // Output: true
console.log(arr.includes(100)); // Output: false

//7. slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let slicedArray = arr.slice(1, 4);
console.log(slicedArray); // Output: [20, 3, 4]

//8. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
arr.splice(2, 1, 30); // Removes 1 element at index 2 and adds 30
console.log(arr); // Output: [10, 20, 30, 4, 5]

//9. join(): Joins all elements of an array into a string and returns this string.
let joinedString = arr.join(", ");
console.log(joinedString); // Output: "10, 20, 30, 4, 5"

//10. reverse(): Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
arr.reverse();
console.log(arr); // Output: [5, 4, 30, 20, 10]

//11. sort(): Sorts the elements of an array in place and returns the sorted array.
arr.sort((a, b) => b - a); // Sorts the array in descending order
console.log(arr); // Output: [30, 20, 10, 5, 4]
arr.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(arr); // Output: [4, 5, 10, 20, 30]

//12. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
let mappedArray = arr.map(x => x * 2);
console.log(mappedArray); // Output: [8, 10, 20, 40, 60]

//13. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let filteredArray = arr.filter(x => x > 10);
console.log(filteredArray); // Output: [20, 30]

//14. reduce(): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 69

//15. forEach(): Executes a provided function once for each array element.
arr.forEach(x => console.log(x)); // Output: 4, 5, 10, 20, 30

//16. find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let foundElement = arr.find(x => x > 10);
console.log(foundElement); // Output: 20

//17. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
let foundIndex = arr.findIndex(x => x > 10);
console.log(foundIndex); // Output: 3

//18. some(): Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let hasGreaterThan10 = arr.some(x => x > 10);
console.log(hasGreaterThan10); // Output: true

//19. every(): Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let allGreaterThan0 = arr.every(x => x > 0);
console.log(allGreaterThan0); // Output: true

//20. concat(): Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let newArray = arr.concat([40, 50]);
console.log(newArray); // Output: [4, 5, 10, 20, 30, 40, 50]

//21. flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [1, [2, [3, 4]], 5];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

//22. flatMap(): First maps each element using a mapping function, then flattens the result into a new array.
let flatMappedArray = arr.flatMap(x => [x, x * 2]);
console.log(flatMappedArray); // Output: [4, 8, 5, 10, 10, 20, 20, 40, 30, 60]

//23. fill(): Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
arr.fill(0, 1, 4); // Fills the array with 0 from index 1 to index 3
console.log(arr); // Output: [4, 0, 0, 0, 30]

//24. copyWithin(): Shallow copies part of an array to another location in the same array and returns it without modifying its length.
arr.copyWithin(1, 3); // Copies elements from index 3 to index 1
console.log(arr); // Output: [4, 0, 30, 0, 30]

//25. entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let entries = arr.entries();
for (let entry of entries) {
    console.log(entry); // Output: [0, 4], [1, 0], [2, 30], [3, 0], [4, 30]
}

//26. keys(): Returns a new Array Iterator object that contains the keys for each index in the array.
let keys = arr.keys();
for (let key of keys) {
    console.log(key); // Output: 0, 1, 2, 3, 4
}

//27. values(): Returns a new Array Iterator object that contains the values for each index in the array.
let values = arr.values();
for (let value of values) {
    console.log(value); // Output: 4, 0, 30, 0, 30
}       

