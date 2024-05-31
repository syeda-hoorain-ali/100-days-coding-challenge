"use strict";
//******************
//*     Task 1     *
//******************
// Type inference for variables
let string = "Hello, TypeScript"; // inferred as string
let number = 42; // inferred as number
let boolean = true; // inferred as boolean
// Type inference for functions
function add(a, b) {
    return a + b; // inferred return type is number
}
// Example usage
console.log(string);
console.log(number);
console.log(boolean);
console.log(add(2, 3));
