//* Question 145: Create a function that accepts a callback and invokes it with some arguments.
const executeCallback = (callback, a, b) => {
    callback(a, b); // Invokes the callback with the specified arguments
};
// Example callback function that adds two numbers
const add = (num1, num2) => {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
};
// Demonstrates invoking a callback function with arguments to perform an addition.
executeCallback(add, 5, 3);
export {};
