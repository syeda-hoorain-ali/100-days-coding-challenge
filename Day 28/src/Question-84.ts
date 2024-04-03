// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".


const javascriptReplacer = (text: string) => {
    return text.replaceAll('JavaScript', 'TypeScript');
}

console.log(javascriptReplacer("I love JavaScript and JavaScript is awesome!"));

