//* Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

//? Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation

for (let i = 0; i < 1e9; i++) {} // A long loop

console.log("After synchronous operation");


//? Asynchronous example
console.log("Before asynchronous operation");

setTimeout(() => {
  console.log("Asynchronous operation completed (after 2 second)");
}, 2000);

console.log("After asynchronous operation");
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.

