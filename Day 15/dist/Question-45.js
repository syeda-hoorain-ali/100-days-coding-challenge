// Question 45: Cars: Create detailed car objects with flexible properties.
// Function to store information about a car
function make_car(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Store additional options if provided
    if (!(options.length === 0)) {
        options.forEach(([key, value]) => {
            car[key] = value;
        });
    }
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "blue"], ["year", 2022]));
console.log(make_car("Ford", "Fiesta", ["color", "red"], ["sunroof", true]));
export {};
