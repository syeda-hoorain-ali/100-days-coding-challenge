//******************
//*     Task 5     *
//******************

// Define an enum with constant members
enum ConstantEnum {
    A = 1,
    B = 2,
    C = 3
}

// Define an enum with computed members
enum ComputedEnum {
    X = "X".length,
    Y = "Hello".length,
    Z = 10 + 20
}

console.log(ConstantEnum.A); // Output: 1
console.log(ConstantEnum.B); // Output: 2
console.log(ConstantEnum.C); // Output: 3

console.log(ComputedEnum.X); // Output: 1
console.log(ComputedEnum.Y); // Output: 5
console.log(ComputedEnum.Z); // Output: 30
