// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function declarationGreet(name) {
    console.log(`Hello, ${name}`);
}
const expressionGreet = function (name) {
    console.log(`Hello, ${name}`);
};
declarationGreet("Hoorain");
expressionGreet("Hoorain");
export {};
