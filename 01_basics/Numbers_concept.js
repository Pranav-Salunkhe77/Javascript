//NUMBERS CONCEPT

//In JavaScript, numbers are a fundamental data type that represents both integer and floating-point values. They are used for various purposes, including mathematical calculations, counting, and representing quantities. JavaScript uses the IEEE 754 standard for representing numbers, which allows for a wide range of values but also has some limitations in terms of precision.

//Here are some key points about numbers in JavaScript:

//1. Types of Numbers:
//   - Integer: Whole numbers without a decimal point (e.g., 1, -5, 100).
//   - Floating-point: Numbers with a decimal point (e.g., 3.14, -0.001).

//Examples of numbers in JavaScript:
let age = 30; // Integer
let price = 19.99; // Floating-point
let negativeNumber = -5; // Negative integer
let zero = 0; // Zero

console.log(age); // Output: 30
console.log(price); // Output: 19.99
console.log(negativeNumber); // Output: -5
console.log(zero); // Output: 0

//All Methodes of Numbers with examples

//1. toFixed(digits): Formats a number using fixed-point notation
let num = 3.14159;
console.log(num.toFixed(2)); // Output: 3.14

//2. toExponential(digits): Returns a string representing the number in exponential notation
console.log(num.toExponential(2)); // Output: 3.14e+0

//3. toPrecision(digits): Returns a string representing the number to a specified precision
console.log(num.toPrecision(4)); // Output: 3.142

//4. parseInt(string, radix): Parses a string and returns an integer of the specified radix (base)
let str = "42";
console.log(parseInt(str)); // Output: 42
console.log(parseInt(str, 16)); // Output: 66 (hexadecimal)

//5. parseFloat(string): Parses a string and returns a floating-point number
let floatStr = "3.14";
console.log(parseFloat(floatStr)); // Output: 3.14

//6. isNaN(value): Determines whether a value is NaN (Not-a-Number)
console.log(isNaN("hello")); // Output: true
console.log(isNaN(123)); // Output: false

//7. isFinite(value): Determines whether a value is a finite number
console.log(isFinite(123)); // Output: true
console.log(isFinite(Infinity)); // Output: false
console.log(isFinite(NaN)); // Output: false


