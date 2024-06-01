//******************
//*     Task 1     *
//******************

class Product {
    // Properties
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) { }

    // Method to display product's info
    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

// Create an instance of the Product class
const watch = new Product(1, "Watch", 15);

// Access class properties and call a method
console.log(watch.getProductInfo()); // Output: ID: 1, Name: Watch, Price: $15

