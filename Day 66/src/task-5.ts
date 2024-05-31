//******************
//*     Task 5     *
//******************


// Union type: a value can be one of several types
type StringOrNumber = string | number;
let unionValue: StringOrNumber = "Hello";
unionValue = 42;

// Intersection type: a value must satisfy all combined types
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

let person: Person = { name: "Alice", age: 30 };

console.log(unionValue);
console.log(person);


