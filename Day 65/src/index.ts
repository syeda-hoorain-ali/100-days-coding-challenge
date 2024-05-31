//******************
//*     Task 1     *
//******************

const add = (a: number, b: number): number => a + b;

console.log(add(2, 3));   // 5
console.log(add(10, 20)); // 30


//******************
//*     Task 2     *
//******************

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Hoorain")); // Hello, Hoorain!
console.log(greet("Kitty", "Good morning")); // Good morning, Kitty!


//******************
//*     Task 3     *
//******************

const multiply = (a: number, b: number = 1): number => a * b;

console.log(multiply(5));    // 5 (5 * 1)
console.log(multiply(5, 2)); // 10 (5 * 2)


//******************
//*     Task 4     *
//******************

function average(...numbers: number[]): number {
    let total = numbers.reduce((total, num) => total + num, 0);
    return total / numbers.length
}

console.log(average(1, 2, 3));       // 2
console.log(average(4, 5, 6, 7, 8)); // 6
console.log(average(10));            // 10
