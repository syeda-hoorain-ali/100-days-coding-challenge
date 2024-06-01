//******************
//*     Task 3     *
//******************

// Define a generic class
class Box<T> {
    constructor( public content: T) { }

    getContent(): T {
        return this.content;
    }
}

// Use the generic class with a number
let numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // Output: 123

// Use the generic class with a string
let stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // Output: Hello
