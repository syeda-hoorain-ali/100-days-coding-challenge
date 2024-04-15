// Default export
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, My name is ${this.name} and i am ${this.age} years old.`);
    }
}
export default Student;
