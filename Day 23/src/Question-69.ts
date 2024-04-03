// Question 69:  Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

const divideAndRemainder = (num1: number, num2: number) => {
    const quotient = Math.round(num1 / num2);
    const remainder = num1 % num2;
    return {quotient, remainder}
}

console.log(divideAndRemainder(10, 3));
