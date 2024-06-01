//******************
//*     Task 1     *
//******************

// Define a generic function
const identity = <T>(arg: T): T => {
    return arg;
}

// Use the generic function with different data types
let output1 = identity<string>("Hello, World!");
let output2 = identity<number>(42);

console.log(output1); // Output: "Hello, World!"
console.log(output2); // Output: 42
