// let score = 11//String

// // console.log(typeof score);
// // console.log(typeof(score));

// let valueInNumber = Number(score)//Conversion in number By using Number() function
// console.log(typeof valueInNumber);// To check the actual data tpe of converted number
// console.log(valueInNumber);// To check the value of converted number    

// // "33" => 33
// // "33abc" => NaN
// //  true => 1; false => 0

// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// let someNumber = "33ABC"

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// // *********************** Operations ***********************

// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello"
// let str2 = " hitesh"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);//If any one of number is present in string then the concat operation
//  is performed otherwise the addition operation is performed 

// console.log(1 + 2);//The values are in normal not in string then the addition operation is performed.

// console.log("1" + 2 + 2);// The operation is performed from left to right so first 1+2 is performed and the result is "12" then "12"+2 is performed and the result is "122" 
//BUt when coming to left to ringt first double quoted string is present then the concat operation is performed.


// console.log(1 + 2 + "2");// The operation is performed from left to right so first 1+2 is performed and the result is 3 then 3+"2" is performed and the result is "32"  
// But when coming to left to ringt only single number is present then the addition operation is performed.

// console.log( (3 + 4) *( 5 % 3));//Right methode to write code is to use paranthesis to avoid confusion and to get the correct result.    

// console.log(+true);
// console.log(+"hello");//The logic behind this is that when we try to convert a non-numeric string to a number, 
// it results in NaN (Not a Number). The unary plus operator attempts to convert 
// the operand to a number, and since "hello" cannot be converted to a valid number, it returns NaN.  
// console.log(+"33");
// console.log("hello" + "");//in simple the hello is apped with empty string and the result is "hello" because when we add an empty string to any string.


// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2
// console.log(num1, num2, num3);

// let gameCounter = 100+3;
// console.log(gameCounter);

// // link to study
// // https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion