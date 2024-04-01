// Question 55: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
const averageCalculator = (...score) => {
    const average = score.reduce((accum, value) => accum += value);
    return average / score.length;
};
console.log(averageCalculator(32, 90, 43, 10, 100));
export {};
