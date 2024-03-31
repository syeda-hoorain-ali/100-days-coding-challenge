// Question 30: Hello Admin: Greet users differently, especially 'admin'.


const usernames: string[] = ['olivia', 'emma', 'admin', 'amelia', 'ava', 'sophia', 'isabella'];

usernames.forEach(name => {
    if (name == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
})


