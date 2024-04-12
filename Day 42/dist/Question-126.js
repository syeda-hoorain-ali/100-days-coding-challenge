// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
const student = {
    name: 'Hoorain',
    welcome() {
        console.log(this.name);
        const innerArrowFunction = () => {
            console.log(this.name);
        };
        innerArrowFunction();
    }
};
student.welcome();
export {};
