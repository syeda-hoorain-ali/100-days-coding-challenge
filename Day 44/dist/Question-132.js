// Question 132: Discuss the difference between default and named exports in JavaScript modules.
import Student from "./modules/Student.js";
import { add, sub, div, mul } from "./modules/Operations.js";
const student1 = new Student("Hoorain", 12);
student1.greet();
console.log(add(4, 2));
console.log(sub(4, 2));
console.log(mul(4, 2));
console.log(div(4, 2));
