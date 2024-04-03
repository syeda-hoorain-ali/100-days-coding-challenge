// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.


const getLength = (text: string): number => {
    return text.trim().length
}

console.log(getLength("Hello World!"));

