"use strict";
//******************
//*     Task 2     *
//******************
// Define a generic function with a constraint
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
// Use the generic function with types that have a length property
logLength({ length: 10, value: "Hello", }); // Output: 10
// logLength(3); // Error: Argument of type '3' is not assignable to parameter of type 'Lengthwise'.
