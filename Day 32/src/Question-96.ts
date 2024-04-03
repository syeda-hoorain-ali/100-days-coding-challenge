// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.


const calculateSum = (numbers: number[]): number => {
    return numbers.reduce((accum, value) => accum += value);
}

const numbers: number[] = [78, 23, 9, 1, 10, 37, 6];
console.log(calculateSum(numbers));
