//STACK AND HEAP MEMORY CONCEPT IN JAVASCRIPT

//PRIMITIVE DATA TYPES ARE STORED IN STACK MEMORY(NUMBER, STRING, BOOLEAN, NULL, UNDEFINED, SYMBOL, BIGINT)
//REFERENCE(NON-PRIMITIVE) DATA TYPES ARE STORED IN HEAP MEMORY(OBJECT, ARRAY, FUNCTION)

//STACK -> Whwn we get the stack memoey then we get the copy of 
// the original variable and we can change the value of the copy 
// variable but it will not affect the original variable because
//  both are stored in different memory location

//HEAP -> When we get the heap memory then we get the reference of 
// the original variable and when we change the value of the copy 
// variable then it will affect the original variable because both are 
// stored in same memory location

//EXAMPLE OF STACK MEMORY

let a = 10; // a is stored in stack memory
let b = a; // b is stored in stack memory and it is a copy of a
b = 20; // changing the value of b does not affect a
console.log(a); // Output: 10
console.log(b); // Output: 20


/*In the above example, we can see that a and b are stored in stack 
 memory and they are independent of each other. 
 Changing the value of b does not affect a because they are stored
 in different memory locations.*/



//EXAMPLE OF HEAP MEMORY

let obj1 = { name: "John" }; // obj1 is stored in heap memory
let obj2 = obj1; // obj2 is stored in heap memory and it is a reference to obj1
obj2.name = "Snow"; // changing the value of obj2 affects obj1 because both are referencing the same object in heap memory
console.log(obj1.name); // Output: Snow
console.log(obj2.name); // Output: Snow

/*In the above example, we can see that obj1 and obj2 are stored in 
heap memory and they are referencing the same object. 
Changing the value of obj2 affects obj1 because both are referencing 
the same object in heap memory.*/
