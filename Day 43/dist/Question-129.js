// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
const student = {
    name: "Hoorain",
    traditionalFunction: function () {
        console.log(`I am ${this.name}`);
    },
    arrowFunction: () => {
        console.log(`I am ${this.name}`); // This will cause an error
    }
};
student.traditionalFunction();
student.arrowFunction();
export {};

