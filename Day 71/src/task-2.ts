//******************
//*     Task 2     *
//******************

class Person {
    // Properties
    constructor(
        public name: string,
        public age: number
    ) { }

    // Method to display person's details
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Create an instance of the Person class
const person = new Person("Alice", 30);
console.log(person.getDetails()); // Output: Name: Alice, Age: 30

