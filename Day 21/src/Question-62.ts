// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
    name: string;
    age: number;
    classes: string[];
}

const student1:Student = {
    name: "Hoorain",
    age: 10,
    classes: ["Gen AI", "Web 3.0"],
}

console.log(student1);
