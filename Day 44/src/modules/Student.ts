// Default export

class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, My name is ${this.name} and i am ${this.age} years old.`);
    }
}

export default Student;

