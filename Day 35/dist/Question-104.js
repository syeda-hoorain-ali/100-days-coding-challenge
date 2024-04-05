// Question : Create a function that generates a random hexadecimal color code.
const randomColor = () => {
    const color = '#' + Math.random().toString(16).slice(2, 8).padEnd(6, 'f');
    return color;
};
console.log(randomColor());
export {};
