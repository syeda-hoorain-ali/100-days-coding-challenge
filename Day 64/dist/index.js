"use strict";
//******************
//*     Task 1     *
//******************
let person = {
    name: "Hoorain",
    age: 12,
    isStudent: true,
};
console.log(person);
let book1 = {
    title: "Indus Journey",
    author: "Imran Khan",
};
let book2 = {
    title: "Harry Potter",
    author: "J.K Rowling",
    publishedYear: 1997,
};
console.log(book1);
console.log(book2);
//******************
//*     Task 3     *
//******************
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car);
// car.brand = "Honda"; //! Error: Cannot assign to 'brand' because it is a read-only property
// Modifying non-readonly property is allowed
car.year = 2021;
console.log(car);
