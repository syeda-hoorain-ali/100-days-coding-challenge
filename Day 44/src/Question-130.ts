// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

import { add, sub, div, mul } from "./modules/Operations.js";

console.log(add(4, 2));
console.log(sub(4, 2));
console.log(mul(4, 2));
console.log(div(4, 2));

