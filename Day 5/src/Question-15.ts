// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.


const guests: string[] = ["Olivia", "Emma", "Ava", "Sophia", "Isabella"];

const unableToAttend: string = "Eva";
console.log(`${unableToAttend} can't come to dinner.`);

// Replace the guest
const newGuest: string = "Grace";
guests[guests.indexOf(unableToAttend)] = newGuest;


guests.forEach(guest => {
    console.log(`Hi ${guest}, would you like to come to dinner tonight`);
})

