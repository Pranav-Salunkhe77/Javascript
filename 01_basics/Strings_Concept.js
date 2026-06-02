//STRING CONCEPT

//String is a sequence of characters. It is used to represent text. It is a data type in JavaScript.

let name = "John"; //String literal
let message = 'Hello, World!'; //String literal
let greeting = `Welcome, ${name}!`; //String template literal

// console.log(name); //Output: John
// console.log(message); //Output: Hello, World!
// console.log(greeting); //Output: Welcome, John!

// //Strings can be concatenated using the + operator
// //Do not use that methode. 
// let fullName = name + " Doe";
// console.log(fullName); //Output: John Doe

// //Strings can also be concatenated using template literals
// //Use this methode instead of the + operator. It is more readable and easier to use.
// let fullNameTemplate = `My name is ${name} Snow`;
// console.log(fullNameTemplate); //Output: My name is John Snow

// //ALL String methods are immutable. It means that they do not change
// //the original string, but instead return a new string with the desired changes.

// //ALL String methode with examples

//Name of the string = John

// //1. length: Returns the length of the string
// console.log(name.length); //Output: 4

// //2. toUpperCase(): Converts the string to uppercase
// console.log(name.toUpperCase()); //Output: JOHN

// //3. toLowerCase(): Converts the string to lowercase
// console.log(name.toLowerCase()); //Output: john

// //4. charAt(index): Returns the character at the specified index
// console.log(name.charAt(3)); //Output: n    

// //5. indexOf(substring): Returns the index of the first occurrence of the substring
// console.log(name.indexOf("n")); //Output: 3

// //6. slice(start, end): Extracts a section of the string and returns it as a new string
// console.log(name.slice(0, 2)); //Output: Jo

// //7. replace(searchValue, newValue): Replaces occurrences of searchValue with newValue
// console.log(name.replace("John", "Jane")); //Output: Jane

// //8. split(separator): Splits the string into an array of substrings based on the separator
// console.log(name.split("")); //Output: [ 'J', 'o', 'h', 'n' ]

// //9. trim(): Removes whitespace from both ends of the string
// let spacedName = "  John  ";
// console.log(spacedName); //Output: "  John  "
// console.log(spacedName.trim()); //Output: John

// //10. includes(substring): Checkss if the string contains the specified substring
// console.log(name.includes("oh")); //Output: true

// //11. startsWith(substring): Checks if the string starts with the specified substring
// console.log(name.startsWith("Jo")); //Output: true

// //12. endsWith(substring): Checks if the string ends with the specified substring
// console.log(name.endsWith("hn")); //Output: true

// //13. repeat(count): Returns a new string that repeats the original string a specified number of times
// console.log(name.repeat(3)); //Output: JohnJohnJohn

// //14. substring(start, end): Returns a subset of the string between the start and end indices
// console.log(name.substring(1, 3)); //Output: oh

// //15. toString(): Converts the string to a string (useful for objects)
// let num = 123;
// console.log(num.toString()); //Output: "123"

// //16. valueOf(): Returns the primitive value of the string
// console.log(name.valueOf()); //Output: John

// //17. padStart(targetLength, padString): Pads the current string with another string (repeated, if needed) until the resulting string reaches the given length
// console.log(name.padStart(10, "*")); //Output: ******John

// //18. padEnd(targetLength, padString): Pads the current string with another string (repeated, if needed) until the resulting string reaches the given length
// console.log(name.padEnd(10, "*")); //Output: John******

// //19. match(regex): Retrieves the matches when matching a string against a regular expression
// let text = "The quick brown fox jumps over the lazy dog.";
// console.log(text.match(/o/g)); //Output: [ 'o', 'o', 'o', 'o' ]

// //20. search(regex): Executes a search for a match between a regular expression and this String object
// console.log(text.search(/fox/)); //Output: 16

// //21. localeCompare(compareString): Returns a number indicating whether the reference string comes before, after, or is the same as the compareString in sort order
// console.log(name.localeCompare("Jane")); //Output: 1 (John comes after Jane)

// //22. normalize(form): Returns the Unicode Normalization Form of the string
// let accented = "é";
// console.log(accented.normalize("NFD")); //Output: é (e followed by a combining accent)

// //23. charCodeAt(index): Returns the Unicode of the character at the specified index
// console.log(name.charCodeAt(0)); //Output: 74 (Unicode for 'J')

// //24. fromCharCode(...codes): Static method that returns a string created from the specified sequence of UTF-16 code units
// console.log(String.fromCharCode(74, 111, 104, 110)); //Output: John

// //25. raw(strings, ...values): Static method that returns a string created from a raw template string, where backslashes are treated as literal characters
// console.log(String.raw`Hello\nWorld`); //Output: Hello\nWorld (backslash is treated as a literal character)     

// //26. toLocaleLowerCase(): Converts the string to lowercase according to any locale-specific case mappings
// console.log(name.toLocaleLowerCase()); //Output: john

// //27. toLocaleUpperCase(): Converts the string to uppercase according to any locale-specific case mappings
// console.log(name.toLocaleUpperCase()); //Output: JOHN

// //28. toLocaleString(): Returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes
// console.log(name.toLocaleString()); //Output: John

// //29. toUpperCase(): Converts the string to uppercase
// console.log(name.toUpperCase()); //Output: JOHN

// //30. toLowerCase(): Converts the string to lowercase
// console.log(name.toLowerCase()); //Output: john

// //31. trimStart(): Removes whitespace from the beginning of the string
// console.log(spacedName.trimStart()); //Output: "John  "

// //32. trimEnd(): Removes whitespace from the end of the string
// console.log(spacedName.trimEnd()); //Output: "  John"

// //33. matchAll(regex): Returns an iterator of all results matching a string against a regular expression, including capturing groups
// let regex = /o/g;
// let matches = text.matchAll(regex);
// for (const match of matches) {
//     console.log(match); //Output: [ 'o', index: 12, input: 'The quick brown fox jumps over the lazy dog.', groups: undefined ] and so on for each match
// }

// //34. codePointAt(index): Returns a non-negative integer that is the Unicode code point value at the given position
// console.log(name.codePointAt(0)); //Output: 74 (Unicode for 'J')

// //35. fromCodePoint(...codePoints): Static method that returns a string created by using the specified sequence of code points
// console.log(String.fromCodePoint(74, 111, 104, 110)); //Output: John

// //36. endsWith(searchString, length): Determines whether a string ends with the characters of a specified string, returning true or false as appropriate
// console.log(name.endsWith("hn")); //Output: true

// //37. startsWith(searchString, position): Determines whether a string begins with the characters of a specified string, returning true or false as appropriate
// console.log(name.startsWith("Jo")); //Output: true

// //38. includes(searchString, position): Determines whether one string may be found within another string, returning true or false as appropriate
// console.log(name.includes("oh")); //Output: true

// //39. lastIndexOf(searchValue, fromIndex): Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found
// console.log(name.lastIndexOf("o")); //Output: 1

// //40. localeCompare(compareString, locales, options): Returns a number indicating whether the reference string comes before, after, or is the same as the compareString in sort order, according to the locale and options          
// console.log(name.localeCompare("Jane", "en", { sensitivity: "base" })); //Output: 1 (John comes after Jane in English locale with base sensitivity)

// //41. normalize(form): Returns the Unicode Normalization Form of the string
// let accentedName = "é";
// console.log(accentedName.normalize("NFC")); //Output: é (composed form)

// //42. padStart(targetLength, padString): Pads the current string with another string (repeated, if needed) until the resulting string reaches the given length
// console.log(name.padStart(10, "*")); //Output: ******John

// //43. padEnd(targetLength, padString): Pads the current string with another string (repeated, if needed) until the resulting string reaches the given length
// console.log(name.padEnd(10, "*")); //Output: John******


// //So these are some of the most commonly used string methods in JavaScript. 
// // Strings are a fundamental part of programming and are used to represent and manipulate text.
// // Understanding these methods will help you work with strings effectively in your JavaScript code.