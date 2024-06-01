"use strict";
//******************
//*     Task 2     *
//******************
class Person {
    // Properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to display person's details
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
// Create an instance of the Person class
const person = new Person("Alice", 30);
console.log(person.getDetails()); // Output: Name: Alice, Age: 30
