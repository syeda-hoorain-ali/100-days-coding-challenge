// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


const personName: string = "Hoorain";
console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);
console.log(`Titlecase: ${personName.charAt(0).toUpperCase()}${personName.slice(1).toLowerCase()}`);



