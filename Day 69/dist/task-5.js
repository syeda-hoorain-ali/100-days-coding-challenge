"use strict";
//******************
//*     Task 5     *
//******************
// Define an enum with constant members
var ConstantEnum;
(function (ConstantEnum) {
    ConstantEnum[ConstantEnum["A"] = 1] = "A";
    ConstantEnum[ConstantEnum["B"] = 2] = "B";
    ConstantEnum[ConstantEnum["C"] = 3] = "C";
})(ConstantEnum || (ConstantEnum = {}));
// Define an enum with computed members
var ComputedEnum;
(function (ComputedEnum) {
    ComputedEnum[ComputedEnum["X"] = "X".length] = "X";
    ComputedEnum[ComputedEnum["Y"] = "Hello".length] = "Y";
    ComputedEnum[ComputedEnum["Z"] = 30] = "Z";
})(ComputedEnum || (ComputedEnum = {}));
console.log(ConstantEnum.A); // Output: 1
console.log(ConstantEnum.B); // Output: 2
console.log(ConstantEnum.C); // Output: 3
console.log(ComputedEnum.X); // Output: 1
console.log(ComputedEnum.Y); // Output: 5
console.log(ComputedEnum.Z); // Output: 30
