"use strict";
//******************
//*     Task 5     *
//******************
// Implement a function that adheres to the interface
let searchWord = (source, subString) => {
    return source.includes(subString);
};
console.log(searchWord("Hello, world!", "world")); // Output: true
console.log(searchWord("Hello, world!", "planet")); // Output: false
