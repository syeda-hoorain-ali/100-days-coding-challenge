//* Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

const fetchData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/syeda-hoorain-ali');
        const data = await response.json();
        // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.

        console.log(`ID: ${data.id}`);
        console.log(`Username: ${data.login}`);
        console.log(`Name: ${data.name}`);
        console.log(`URL: ${data.html_url}`);
        console.log(`Repositories: ${data.public_repos}`);

    } catch (error) {
        console.log(`Error: ${error}`);   
    }
}

await fetchData();

console.log("\nThe 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");


