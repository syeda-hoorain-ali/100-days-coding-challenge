// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
const add = (num1, num2) => {
    const sum = num1 + parseFloat(num2);
    return sum;
};
console.log(add(5, '5'));
export {};
