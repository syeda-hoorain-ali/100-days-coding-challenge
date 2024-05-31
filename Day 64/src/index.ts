//******************
//*     Task 1     *
//******************

let person: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "Hoorain",
    age: 12,
    isStudent: true,
}

console.log(person);


//******************
//*     Task 2     *
//******************

type Book = {
    title: string;
    author: string;
    publishedYear?: number; // optional property
};

let book1: Book = {
    title: "Indus Journey",
    author: "Imran Khan",
};

let book2: Book = {
    title: "Harry Potter",
    author: "J.K Rowling",
    publishedYear: 1997,
};

console.log(book1);
console.log(book2);

//******************
//*     Task 3     *
//******************

let car: {
    readonly brand: string;
    readonly model: string;
    year: number;
} = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car);
// car.brand = "Honda"; //! Error: Cannot assign to 'brand' because it is a read-only property

// Modifying non-readonly property is allowed
car.year = 2021;
console.log(car);
