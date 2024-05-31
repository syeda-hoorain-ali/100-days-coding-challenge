//******************
//*     Task 1     *
//******************

// Declare a tuple variable
let myTuple: readonly [number, string, boolean] = [10, "Hello", true];

// Access and print each element of the tuple
console.log("First element:", myTuple[0]);
console.log("Second element:", myTuple[1]);
console.log("Third element:", myTuple[2]);

//******************
//*     Task 2     *
//******************

// Update an element in the tuple
// myTuple[0] = 20; //! Error: Cannot assign to '0' because it is a read-only property.
console.log("After updating:", myTuple);

// Update whole array
myTuple = [10, "Hello", true];


//******************
//*     Task 3     *
//******************

// Tuple destructuring
let [num, str, bool] = myTuple;

// Perform operations with the extracted values
let doubledNum = num * 2;
let uppercaseStr = str.toUpperCase();
let negatedBool = !bool;

// Print the results
console.log("Doubled number:", doubledNum);
console.log("Uppercase string:", uppercaseStr);
console.log("Negated boolean:", negatedBool);
