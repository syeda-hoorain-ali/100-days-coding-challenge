// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

type Laptop = {
    make: string;
    model: string;
    year: number;
    describe: () => void;
}

const laptop: Laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};

laptop.describe();
