// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

type Car = {
    make: string;
    model: string;
    year: number;
    color?: string;
}

const car:Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
}

car['color'] = 'Black';
car.year = 2021;

console.log(car);
