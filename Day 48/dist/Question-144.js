//* Question 144: Explain the use of the Promise.all() method with an example.
// Example promises
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 resolved"), 2000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2 resolved"), 3000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Promise 3 rejected")), 1500);
});
// Using Promise.all()
Promise.all([promise1, promise2, promise3])
    .then(values => console.log(`All promises resolved: ${values}`))
    .catch(error => console.error(`At least one promise rejected: ${error}`));
export {};
