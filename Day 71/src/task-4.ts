//******************
//*     Task 4     *
//******************

// Base class
class Animal {
    constructor(public name: string) { }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

// Subclass
class Cat extends Animal {
    constructor(name: string, public color: string) {
        super(name); // Call the constructor of the base class
    }

    // Override method
    makeSound(): void {
        console.log(`${this.name} meows.`);
    }
}

// Create an instance of the Cat class
const cat = new Cat("Kitty", "white");
cat.makeSound(); // Output: Kitty meows.

