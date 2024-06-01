//******************
//*     Task 4     *
//******************

// Define a base interface
interface Shape {
    color: string;
}

// Extend the base interface to add more properties
interface Circle extends Shape {
    radius: number;
}

// Create an object that adheres to the extended interface
let myCircle: Circle = {
    color: "red",
    radius: 10
};

console.log(myCircle); // Output: { color: "red", radius: 10 }


