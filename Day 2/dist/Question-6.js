// Question 2: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
const name = "\n\n\t Hoorain \t\n";
console.log(`Before stripping ${name}`);
console.log(`After stripping ${name.trim()}`);
export {};
