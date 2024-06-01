"use strict";
//******************
//*     Task 1     *
//******************
let someValue = "this is a string";
// Using 'as' keyword for type assertion
let strLength = someValue.length;
console.log(strLength); // Output: 16
//******************
//*     Task 2     *
//******************
let anotherValue = "another string";
// Using angle-bracket syntax for type assertion
let anotherStrLength = anotherValue.length;
console.log(anotherStrLength); // Output: 14
//******************
//*     Task 3     *
//******************
// Assume there is a button element with id 'submitButton' in the DOM
let buttonElement = document.getElementById('submitButton');
// Type assertion to HTMLButtonElement
let submitButton = buttonElement;
// Now we can safely use methods and properties specific to HTMLButtonElement
submitButton.disabled = true;
//******************
//*     Task 4     *
//******************
// Example with a value of type 'any'
let someUnknownValue = "hello";
// Double assertion: first to 'unknown', then to 'string'
let doubleAssertedValue = someUnknownValue;
console.log(doubleAssertedValue.length); // Output: 5
