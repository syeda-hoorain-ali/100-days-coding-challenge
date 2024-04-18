//* Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Creates a Promise that either resolves or rejects based on a condition
const conditionalPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5; // 50% chance of success
        success ? resolve("Operation successful!") : reject(new Error("Operation failed!"));
    }, 1000); // Resolves after 1 second
});
conditionalPromise
    .then((result) => console.log("Success:", result)) // Handles successful resolution
    .catch((error) => console.error("Error:", error.message)); // Handles rejection
export {};
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
