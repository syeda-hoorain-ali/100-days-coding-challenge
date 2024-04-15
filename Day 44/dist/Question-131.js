// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
import Student from "./modules/Student.js";
const student1 = new Student("Hoorain", 12);
student1.greet();
