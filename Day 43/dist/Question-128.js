// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
const multiply = (...numbers) => {
    if (numbers.length === 0)
        return 0;
    return numbers.reduce((product, num) => product * num, 1);
};
console.log(multiply(2, 3, 4));
console.log(multiply());
export {};
