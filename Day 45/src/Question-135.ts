// Question 135: Explain how you can format a JSON string with proper indentation for readability.

const student = {
    name: "Hoorain",
    age: 10,
    city: "Karachi",
}

const jsonString = JSON.stringify(student, null, 2);
console.log(jsonString);

