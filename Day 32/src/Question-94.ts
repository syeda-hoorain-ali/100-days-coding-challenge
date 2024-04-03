// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.


const fruits: string[] = ['Banana', 'Orange', 'Sapodilla'];
const length: number[] = fruits.map(fruit => fruit.length);

console.log(length);


