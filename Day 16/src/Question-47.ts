// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

type Laptop = {
    make: string;
    model: string;
    year: number;
}

const laptops:Laptop[] = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];

const [laptop1, laptop2] = laptops;

console.log(laptop1);
console.log(laptop2);

