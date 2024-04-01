// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.


const grades:number[] = [78, 32, 90, 46];

const averageGrade:number = grades.reduce((accum, value) => accum += value) / grades.length;

console.log(averageGrade);

