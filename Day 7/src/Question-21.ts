// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


type Book = {
    title: string; 
    author: string; 
    yearPublished: number;
}

const book: Book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    yearPublished: 1997,
}


console.log(`The ${book.title} was written by ${book.author}, and publish in ${book.yearPublished}.`);


