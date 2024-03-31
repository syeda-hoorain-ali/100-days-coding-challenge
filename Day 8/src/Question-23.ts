// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

const car: string = 'subaru';

//Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

//Test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

//Test 3
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

//Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

//Test 5
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

//Test 6
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

//Test 7
console.log("Is car.length < 7? I predict True.");
console.log(car.length < 7);

//Test 8
console.log("Is car.charAt(0) === 'i'? I predict False.");
console.log(car.charAt(0) === 'i');

//Test 9
console.log("Is car.includes('bar')? I predict True.");
console.log(car.includes('bar'));

//Test 10
console.log("Is car.startsWith('Sub')? I predict False.");
console.log(car.startsWith('Sub'));

