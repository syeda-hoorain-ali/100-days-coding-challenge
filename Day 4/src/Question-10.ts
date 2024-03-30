// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.


// This program return a number between 1-6
function rollADice(): number {
    const dice: number = Math.floor(Math.random() * 6) + 1;
    return dice;
}

// This function takes two values and return all operations with those numbers
function calculator(a: number, b: number): string {
    let sum = `${a} + ${b} = ${a + b}`;
    let sub = `${a} - ${b} = ${a - b}`;
    let mul = `${a} x ${b} = ${a * b}`;
    let div = `${a} / ${b} = ${a / b}`;
    return ` ${sum}\n ${sub}\n ${mul}\n ${div}\n`;
}

console.log(rollADice());
console.log(calculator(5, 10));

