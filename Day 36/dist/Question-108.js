// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
const compareStrings = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase();
};
console.log(compareStrings("Hello", 'heLLo'));
console.log(compareStrings('TypeScript', 'JavaScript'));
export {};
