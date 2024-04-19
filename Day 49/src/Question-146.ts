//* Question 146: Show an example of a callback function used to filter an array of numbers.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers: number[] =  numbers.filter(num => num % 2 === 0);
const oddNumbers: number[] =  numbers.filter(num => num % 2 === 1);

// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.

console.log("Even numbers", evenNumbers);
console.log("Odd numbers", oddNumbers);

