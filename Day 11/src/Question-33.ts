// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(num => {
    if (num === 1) {
        console.log(`${num}st`);

    } else if (num === 2) {
        console.log(`${num}nd`);

    } else if (num === 3) {
        console.log(`${num}rd`);

    } else {
        console.log(`${num}th`);
    }
})

