// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
const webDeveloper = {
    languages: ['HTML', 'CSS', 'JavaScript'],
    frameworks: ['React', 'Angular', 'Vue'],
    tools: ['Github', 'Git', 'VS Code'],
};
const { languages, frameworks, tools } = webDeveloper;
console.log(`Language: ${languages[2]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
export {};
