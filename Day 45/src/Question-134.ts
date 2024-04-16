// Question 134: Take a JSON string and parse it into a JavaScript object.

const jsonString = `{ 
    "name": "Hoorain", 
    "age": 10, 
    "city": "Karachi" 
}`;

const student = JSON.parse(jsonString);
console.log(student);

