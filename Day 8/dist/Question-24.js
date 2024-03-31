// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
let str1 = 'hello';
let str2 = 'HELLO';
let num1 = 10;
let num2 = 5;
let arr = [1, 2, 3, 4, 5];
console.log("Test for equality with strings:");
console.log(str1 == 'hello'); // True
console.log("Test for inequality with strings:");
console.log(str2 != 'hello'); // True
console.log("Test for lowercase conversion:");
console.log(str2.toLowerCase() == str1); // True
console.log("\nNumerical tests:");
console.log(num1 == num2); // False
console.log(num1 != num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
console.log("\nTest using 'and' operator:");
console.log((num1 > 10) && (num2 == 5)); // False
console.log("Test using 'or' operator:");
console.log((num1 > 10) || (num2 == 5)); // True
console.log("\nTest for item in array:");
console.log(arr.includes(3)); // True
console.log("Test for item not in array:");
console.log(!arr.includes(6)); // True
export {};
