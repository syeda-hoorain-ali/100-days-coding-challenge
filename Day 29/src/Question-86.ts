// Question 8: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.


const hasJavaScript = (text: string): boolean => {
    return text.includes('JavaScript');
}

console.log(hasJavaScript("I love coding in JavaScript!"));

