// Question 42: Great Magicians: Add "the Great" to magician names.

let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Ricky Jay', 'Teller'];

// Function to show magicians
function show_magicians(magicians: string[]) {
    magicians.forEach(element => {
        console.log(element);
    })
}

// Function to make magicians great
function make_great(magicians: string[]) {
    return magicians.map(element => element + " the Great");
}

console.log("Magicians name:");
show_magicians(magicians);

magicians = make_great(magicians); // Modifies the original

console.log("\nGreat magicians name:");
show_magicians(magicians); // Show modifies names
