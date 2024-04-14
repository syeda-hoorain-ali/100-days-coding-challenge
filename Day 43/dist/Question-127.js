// Question 127: Convert a traditional function expression to an arrow function.
const sum = function (a, b) {
    return a + b;
};
const arrowSum = (a, b) => a + b;
console.log(sum(5, 5));
console.log(arrowSum(5, 5));
export {};
