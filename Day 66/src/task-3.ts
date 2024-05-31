//******************
//*     Task 3     *
//******************

let someValue: any = "This is a string";

// Using type assertion
let strLength: number = (someValue as string).length;

console.log(strLength); // Outputs: 16
