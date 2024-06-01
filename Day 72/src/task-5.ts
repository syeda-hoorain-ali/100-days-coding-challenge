//******************
//*     Task 5     *
//******************

// Define a generic function that works with arrays
const getArrayItems = <T>(items: T[]): string => {
    return items.join(', ');
}

// Use the generic function with different types of arrays
let numberArray = getArrayItems<number>([1, 2, 3, 4]);
let stringArray = getArrayItems<string>(["apple", "banana", "cherry"]);

console.log(numberArray); // Output: "1, 2, 3, 4"
console.log(stringArray); // Output: "apple, banana, cherry"
