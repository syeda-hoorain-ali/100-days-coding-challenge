//******************
//*     Task 1     *
//******************

// Using type[] syntax
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["a", "b", "c"];

// Using Array<type> syntax
let moreNumbers: Array<number> = [6, 7, 8, 9, 10];
let moreStrings: Array<string> = ["d", "e", "f"];

console.log(numbers);
console.log(strings);
console.log(moreNumbers);
console.log(moreStrings);


//******************
//*     Task 2     *
//******************

// Define a 2D array (array of arrays) with specific types
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access elements in the multidimensional array
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6

// Manipulate the multidimensional array
matrix[2][1] = 10;
console.log(matrix); // [[1, 2, 3], [4, 5, 6], [7, 10, 9]]

// Example of iterating through a 2D array
for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}] is ${matrix[i][j]}`);
    }
}

// Flatten an array
let flatArray: number[] = matrix.flat();
console.log(flatArray);

