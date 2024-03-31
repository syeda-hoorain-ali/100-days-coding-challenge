// Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "JavaScript is awesome!");
export {};
