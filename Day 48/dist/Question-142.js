//* Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
const helloPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Hello, World!"), 2000); // Resolves after 2 seconds
});
helloPromise.then(message => console.log(message));
export {};
