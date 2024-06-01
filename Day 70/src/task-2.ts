//******************
//*     Task 2     *
//******************

// Define an interface with optional properties
interface Vehicle {
    make: string;
    model: string;
    year?: number; // Optional property
}

// Create objects that adhere to the interface
let car: Vehicle = {
    make: "Toyota",
    model: "Corolla"
};

let bike: Vehicle = {
    make: "Honda",
    model: "CBR",
    year: 2020
};

console.log(car);  // Output: { make: "Toyota", model: "Corolla" }
console.log(bike); // Output: { make: "Honda", model: "CBR", year: 2020 }

