// Question 57: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
const userProfile = (function () {
    const name = "Hoorain";
    const age = 10;
    return {
        displayInfo: () => {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
export {};
