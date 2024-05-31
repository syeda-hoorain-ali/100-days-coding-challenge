//******************
//*     Task 2     *
//******************

// Define a type alias for a complex type
type Point = {
    x: number;
    y: number;
};

type User = {
    name: string;
    age: number;
    isAdmin?: boolean; // Optional property
};

// Using the type alias
let point: Point = {
    x: 10,
    y: 20
};

let user: User = {
    name: "Alice",
    age: 30
};

console.log(point);
console.log(user);
