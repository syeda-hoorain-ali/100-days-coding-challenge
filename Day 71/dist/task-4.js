"use strict";
//******************
//*     Task 4     *
//******************
// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
// Subclass
class Cat extends Animal {
    constructor(name, color) {
        super(name); // Call the constructor of the base class
        this.color = color;
    }
    // Override method
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}
// Create an instance of the Cat class
const cat = new Cat("Kitty", "white");
cat.makeSound(); // Output: Kitty meows.
