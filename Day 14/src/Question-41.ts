// Question 41: Magicians: Display magician names from an array.

const magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Ricky Jay', 'Teller'];

function show_magicians(magicians: string[]) {
    magicians.forEach(element => {
        console.log(element);
    })
}
show_magicians(magicians);