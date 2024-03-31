// Question 31: No Users: Ensure your user list isn’t empty.
const usernames = ['olivia', 'emma', 'admin', 'amelia', 'ava', 'sophia', 'isabella'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach(name => {
        if (name == 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${name}, thank you for logging in again.`);
        }
    });
}
usernames.splice(0, usernames.length);
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
export {};
