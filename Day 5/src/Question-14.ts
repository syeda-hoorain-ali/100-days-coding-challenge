// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


const guests: string[] = ["Olivia", "Emma", "Ava", "Sophia", "Isabella"];

guests.forEach(guest => {
    console.log(`Hello ${guest}, would you like to come to dinner tonight.`);
});

