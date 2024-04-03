// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.


function GreaterThan10(numbers: number[]): number[] {
    return numbers.filter(num => num > 10);
}

const numbers: number[] = [78, 23, 9, 1, 10, 37, 6];
console.log(GreaterThan10(numbers));
