// Question 56: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.


const makeAdder = (valueToAdd: number) => {
    return (number: number): number => number + valueToAdd
}

const addFive = makeAdder(5);
console.log(addFive(10));
