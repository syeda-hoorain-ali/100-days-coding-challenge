// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.


const multiplyDecimal = (num1: number, num2: number) => {
    const result = Math.round((num1 * num2) * 100) / 100;
    return result
}

console.log(multiplyDecimal(0.1, 0.2));
