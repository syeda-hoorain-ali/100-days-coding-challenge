//* Question 147: Explain how to handle errors in a callback pattern.
const fetchData = (callback) => {
    // Simulate fetching data with a chance of error
    setTimeout(() => {
        const data = "Some data";
        if (Math.random() < 0.8) { // 80% chance of success
            callback(null, data); // No error, data is fetched successfully
        }
        else {
            callback(new Error("Failed to fetch data")); // Passes error to the callback
        }
    }, 1000);
};
// Using the fetchData function with error handling in the callback
fetchData((error, result) => {
    error ? console.error("Error: ", error) // Handles the error
        : console.log("Success: ", result); // Processes the data
});
export {};
