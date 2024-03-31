// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magicians = ['Harry Houdini', 'David Copperfield', 'Ricky Jay', 'Teller'];
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
// Function to make magicians great
function make_great(magicians) {
    return magicians.map(element => element + " the Great");
}
const great_magicians = make_great(magicians); // Modifies the original
console.log("Magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(great_magicians); // Show modifies names
export {};
