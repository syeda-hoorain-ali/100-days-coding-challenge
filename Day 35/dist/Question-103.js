// Question 103: Write a function that returns a random boolean value, true or false.
const getRandomBoolean = () => {
    const number = Math.round(Math.random());
    return number === 1; // Returns true if the random number is 1
};
console.log(getRandomBoolean());
export {};
