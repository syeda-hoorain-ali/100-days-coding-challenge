// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};
const showObject = (object) => {
    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
    }
};
showObject(car);
export {};
