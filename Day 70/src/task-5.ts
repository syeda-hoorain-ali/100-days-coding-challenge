//******************
//*     Task 5     *
//******************

// Define an interface for a function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// Implement a function that adheres to the interface
let searchWord: SearchFunc = (source: string, subString: string): boolean => {
    return source.includes(subString);
};

console.log(searchWord("Hello, world!", "world"));  // Output: true
console.log(searchWord("Hello, world!", "planet")); // Output: false



