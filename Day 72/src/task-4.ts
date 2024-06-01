//******************
//*     Task 4     *
//******************

// Define a generic interface
interface Pair<T, U> {
    first: T;
    second: U;
}

// Create an object that adheres to the generic interface
let pair: Pair<string, number> = { first: "Alice", second: 42 };

console.log(pair); // Output: { first: "Alice", second: 42 }
