"use strict";
//******************
//*     Task 3     *
//******************
// Define a generic class
class Box {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
// Use the generic class with a number
let numberBox = new Box(123);
console.log(numberBox.getContent()); // Output: 123
// Use the generic class with a string
let stringBox = new Box("Hello");
console.log(stringBox.getContent()); // Output: Hello
