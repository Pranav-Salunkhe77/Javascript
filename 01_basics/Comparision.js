// console.log(2 > 1);//Do that type of normal comparison.
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);//In this case, the string "2" is converted to the number 2 before the comparison, 
// so it will return true.  
// console.log("02" > 1);

//Avoide these type of comparision. It will give the wrong result.
//And for clean code
// console.log(null > 0);// In this case, null is converted to 0 before the comparison, so it will return false.
// console.log(null == 0);//In that it will check the value. Not convert into number and it will return false.
// console.log(null >= 0);// In this case, null is converted to 0 before the comparison, so it will return true.

//Avoid these type of comparision. It will give the wrong result.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

 
// The === operator checks for both value and type equality. It returns true only if both operands are of the same type and have the same value.
// console.log(2 === 7);

// The !== operator checks for both value and type inequality. It returns true if the operands are of different types or have different values.
// console.log("2" !== 2);

// The == operator checks for value equality, but it performs type coercion if the operands are of different types. It returns true if the values are equal after type conversion.
// console.log(2 == "2");