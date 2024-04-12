// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

const student = {
    name: "Hoorain",
    getName() {
        return this.name;
    }
};

console.log(student.getName());

