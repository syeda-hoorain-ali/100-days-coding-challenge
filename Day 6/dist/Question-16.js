// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// 1• Add one new guest to the beginning of your array.
// 2• Add one new guest to the middle of your array. 
// 3• Use append() to add one new guest to the end of your list. 
// 4• Print a new set of invitation messages, one for each person in your list.
const guests = ["Olivia", "Emma", "Ava", "Sophia", "Isabella"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Alice");
guests.splice(2, 0, "Amelia");
guests.push("Emily");
guests.forEach(guest => {
    console.log(`Hello ${guest}, would you like to come to dinner tonight.`);
});
export {};
