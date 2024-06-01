"use strict";
//******************
//*     Task 3     *
//******************
class Car {
    // Properties
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Public method to get car details
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
    // Private method (only accessible within the class)
    getModel() {
        return this.model;
    }
}
// Create an instance of the Car class
const car = new Car("Toyota", "Corolla", 2020);
console.log(car.getDetails()); // Output: Make: Toyota, Model: Corolla, Year: 2020
// console.log(car.getModel()); //! Error: Property 'getModel' is private and only accessible within class 'Car'
