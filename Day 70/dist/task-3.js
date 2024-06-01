"use strict";
//******************
//*     Task 3     *
//******************
// Create an object that adheres to the interface
let myBook = {
    author: "Imran Khan",
    title: "Indus Journey"
};
console.log(myBook); // Output: { author: "Imran Khan", title: "Indus Journey" }
// Attempting to modify a readonly property will cause an error
// myBook.author = "Khan"; //! Error: Cannot assign to 'author' because it is a read-only property
myBook.title = "Cricket Skill's";
console.log(myBook); // Output: { author: "Imran Khan", title: "Cricket Skill's" }
