//******************
//*     Task 3     *
//******************

// Define an interface with readonly properties
interface Book {
    readonly author: string;
    title: string;
}

// Create an object that adheres to the interface
let myBook: Book = {
    author: "Imran Khan",
    title: "Indus Journey"
};

console.log(myBook); // Output: { author: "Imran Khan", title: "Indus Journey" }

// Attempting to modify a readonly property will cause an error
// myBook.author = "Khan"; //! Error: Cannot assign to 'author' because it is a read-only property

myBook.title = "Cricket Skill's";
console.log(myBook); // Output: { author: "Imran Khan", title: "Cricket Skill's" }

