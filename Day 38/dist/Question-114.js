// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
const students = new Map();
students.set(1, "Olivia");
students.set(2, "Emily");
students.set(3, "Sophia");
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
export {};
