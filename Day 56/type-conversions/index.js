//* Explicit type conversions

let str = "123";
let num = Number(str); // Convert string to number
console.log(num); // 123

let bool = Boolean(num); // Convert number to boolean
console.log(bool); // true

let strFromBool = String(bool); // Convert boolean to string
console.log(strFromBool); // "true"

//* Implicit type conversions

console.log("5" - 3);       // 2 (string is converted to number)
console.log("5" + 3);       // "53" (number is converted to string)
console.log(1 + true);      // 2 (boolean is converted to number)
console.log(null + 1);      // 1 (null is converted to number)
console.log(undefined + 1); // NaN (undefined is converted to NaN)
