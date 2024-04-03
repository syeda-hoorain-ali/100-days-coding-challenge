// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.


function declarationGreet(name: string) {
    console.log(`Hello, ${name}`);
}

const expressionGreet = function (name: string) {
    console.log(`Hello, ${name}`);
}

declarationGreet("Hoorain");
expressionGreet("Hoorain");

