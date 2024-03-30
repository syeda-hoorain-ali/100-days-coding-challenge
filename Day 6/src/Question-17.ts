// Question 17:Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

// 1• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// 2• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// 3• Print a message to each of the two people still on your list, letting them know they’re still invited.
// 4• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

const guests: string[] = ["Olivia", "Emma", "Ava", "Sophia", "Isabella"];
console.log("Unfortunately, I can only invite two people for dinner.");

// Remove the guests
const removedGuests = guests.splice(2);
removedGuests.forEach(guest => {
    console.log(`Sorry, ${guest}, I can't invite you to dinner.`);
});


guests.forEach(guest => {
    console.log(`Hi ${guest}, would you like to come to dinner tonight`);
})

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list