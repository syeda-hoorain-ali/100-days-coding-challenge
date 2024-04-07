// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
const getGrades = (score) => {
    if (score > 94)
        return 'A+';
    else if (score > 89)
        return 'A';
    else if (score > 79)
        return 'B';
    else if (score > 69)
        return 'C';
    else if (score > 59)
        return 'D';
    else
        return 'F';
};
console.log(getGrades(39));
console.log(getGrades(98));
export {};
