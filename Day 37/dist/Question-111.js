// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
const categorizeAge = (age) => {
    if (age < 13)
        return "child";
    else if (age < 18)
        return "teenager";
    else
        return "adult";
};
console.log(categorizeAge(10));
console.log(categorizeAge(15));
console.log(categorizeAge(25));
export {};
