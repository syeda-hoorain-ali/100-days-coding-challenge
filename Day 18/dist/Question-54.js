// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
const createObjectWithDynamicKey = (key, value) => {
    let object = {};
    object[key] = value;
    return object;
};
const userPreference = createObjectWithDynamicKey("color", "blue");
console.log(userPreference);
export {};
