// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let age = 10;
age = 11; // No Error: because "let" allows reassignment
console.log(age);
const name = "Hoorain";
try {
    name = "Mantasha"; // This line will cause an error
}
catch (error) {
    console.log("Error: Cannot assign to 'name' because it is a constant");
}
export {};
