// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
const mixArray = ["apple", "orange", 89, "mango", true, 90];
const stringArray = mixArray.filter(elem => (typeof elem) === 'string');
console.log(stringArray);
export {};
