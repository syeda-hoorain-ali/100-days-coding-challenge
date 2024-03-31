// Question 32: Checking Usernames: Ensure uniqueness in usernames.
const current_users = ["olivia", "emma", "amelia", "ava", "sophia"];
const new_users = ["Amelia", "Isabella", "Emma", "Cinderella", "Sara"];
new_users.forEach(new_user => {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    const lowercase_current_users = current_users.map(user => user.toLowerCase());
    const lowercase_new_user = new_user.toLowerCase();
    // Check if the new username already exists
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`The username "${new_user}" is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_user}" is available.`);
    }
});
export {};
