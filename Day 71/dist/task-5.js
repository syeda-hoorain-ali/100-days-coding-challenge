"use strict";
//******************
//*     Task 5     *
//******************
class Calculator {
    // Method implementation
    add(a, b, c) {
        if (c !== undefined) {
            return a + b + c;
        }
        else {
            return a + b;
        }
    }
}
// Create an instance of the Calculator class
const calculator = new Calculator();
console.log(calculator.add(1, 2)); // Output: 3
console.log(calculator.add(1, 2, 3)); // Output: 6
