// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
const strToNum = (strNum) => {
    return parseFloat(strNum);
};
console.log(strToNum('5'));
console.log(strToNum('5.6'));
export {};
