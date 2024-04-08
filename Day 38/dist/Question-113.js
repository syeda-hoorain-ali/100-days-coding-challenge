// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
const checkCanada = (countries) => {
    if (countries.has("Canada")) { // Check if canada exits in the map
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
};
const countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("Germany", "Berlin");
countries.set("USA", "Washington, D.C.");
console.log(countries);
checkCanada(countries);
export {};
