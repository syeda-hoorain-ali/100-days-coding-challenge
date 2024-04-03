// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
const replaceBanana = (array) => {
    const banana = array.indexOf('Banana');
    array[banana] = 'Mango';
};
const fruits = ['Banana', 'Orange', 'Sapodilla'];
replaceBanana(fruits);
console.log(fruits);
export {};
