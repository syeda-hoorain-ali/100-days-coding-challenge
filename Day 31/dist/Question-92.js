// Question 92: Write a function to remove the last element from an array and return the removed element.
const removeLastElement = (array) => {
    return array.pop();
};
const fruits = ['Banana', 'Orange', 'Sapodilla'];
console.log(removeLastElement(fruits));
console.log(fruits);
export {};
