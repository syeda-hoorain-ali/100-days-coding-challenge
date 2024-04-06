// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

const divisibleBy2And3 = (num: number): boolean => {
    return (num % 2 === 0) && (num % 3 === 0);
}

console.log(divisibleBy2And3(6));
console.log(divisibleBy2And3(7));

