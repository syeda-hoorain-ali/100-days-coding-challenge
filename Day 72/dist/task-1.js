"use strict";
//******************
//*     Task 1     *
//******************
// Define a generic function
const identity = (arg) => {
    return arg;
};
// Use the generic function with different data types
let output1 = identity("Hello, World!");
let output2 = identity(42);
console.log(output1); // Output: "Hello, World!"
console.log(output2); // Output: 42
