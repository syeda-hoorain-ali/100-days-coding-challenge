// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.


const mixArray:any[] = ["apple", "orange", 89, "mango", true, 90];

const stringArray:string[] = mixArray.filter(elem => (typeof elem) === 'string');

console.log(stringArray);

