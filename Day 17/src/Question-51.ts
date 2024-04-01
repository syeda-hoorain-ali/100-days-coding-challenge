// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.


function calculateArea(width: number, height: number): number {
    return width * height;
}

// Convert into an arrow function
const calculateAreaArrow = (width: number, height: number): number => {
    return width * height
};

console.log(calculateArea(9, 4)); 
console.log(calculateAreaArrow(9, 4)); 
