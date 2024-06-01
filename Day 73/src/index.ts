//******************
//*     Task 1     *
//******************

let someValue: unknown = "this is a string";

// Using 'as' keyword for type assertion
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16


//******************
//*     Task 2     *
//******************

let anotherValue: unknown = "another string";

// Using angle-bracket syntax for type assertion
let anotherStrLength: number = (<string>anotherValue).length;

console.log(anotherStrLength); // Output: 14


//******************
//*     Task 3     *
//******************

// Assume there is a button element with id 'submitButton' in the DOM
let buttonElement = document.getElementById('submitButton');

// Type assertion to HTMLButtonElement
let submitButton = buttonElement as HTMLButtonElement;

// Now we can safely use methods and properties specific to HTMLButtonElement
submitButton.disabled = true;


//******************
//*     Task 4     *
//******************

// Example with a value of type 'any'
let someUnknownValue: any = "hello";

// Double assertion: first to 'unknown', then to 'string'
let doubleAssertedValue = (someUnknownValue as unknown) as string;

console.log(doubleAssertedValue.length); // Output: 5
