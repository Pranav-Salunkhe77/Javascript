//Dates Concept in JavaScript

//Creating a Date Object with specific date and time
// let specificDate = new Date('01-01-2023');//It follows the format MM-DD-YYYY And YYYY-MM-DD. And the month starts form 01 to 12.
// //  So, January is 01 and December is 12.

// console.log(specificDate.toLocaleDateString('default',{
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// })); //January 1, 2023

// //Getting the current date and time
let currentDate = new Date();
// console.log(currentDate.toLocaleDateString('default',{
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// })); //Current date and time

// //Getting the current year, month, and day
// console.log(currentDate.getFullYear()); //Current year
// console.log(currentDate.getMonth() + 1); //Current month (0-11, so we add 1)
// console.log(currentDate.getDate()); //Current day of the month

// //Getting the current hours, minutes, and seconds

// //Getting the current day of the week
// console.log(currentDate.getDay()); //Current day of the week (0-6, where 0 is Sunday)

// //Getting the current timestamp
// console.log(currentDate.getTime()); //Current timestamp in milliseconds since January 1, 1970

// //Getting the current timezone offset
// console.log(currentDate.getTimezoneOffset()); //Current timezone offset in minutes

// //Getting the current date and time in ISO format
// console.log(currentDate.toISOString()); //Current date and time in ISO format

// //Getting the current date and time in UTC format
console.log(currentDate.toUTCString()); //Current date and time in UTC format

// //Getting the current date and time in locale format
// console.log(currentDate.toLocaleString()); //Current date and time in locale format

// //Getting the current date and time in locale date format
// console.log(currentDate.toLocaleDateString()); //Current date in locale format

// //Getting the current date and time in locale time format
// console.log(currentDate.toLocaleTimeString()); //Current time in locale format

// //Getting the current date and time in locale format with options
// console.log(currentDate.toLocaleString('default',{
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit'
// })); //Current date and time in locale format with options      