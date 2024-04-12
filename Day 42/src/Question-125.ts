// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

const student = {
    name: "Hoorain",
    age: 12,
    welcome() {
        return `Hi, I am ${this.name} and i am ${this.age} years`
    }
}

console.log(student.welcome());

