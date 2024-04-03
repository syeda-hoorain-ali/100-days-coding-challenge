// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.


const reminder = (num1: number, num2: number): number => {
    return num1 % num2;
}

console.log(reminder(5, 2));

