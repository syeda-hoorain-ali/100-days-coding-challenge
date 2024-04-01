// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function printHobbies(...hobbies: string[]) {
    if (hobbies.length === 0) {
        console.log("You haven't entered any hobbies.");
        return;
    }

    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`);
    });
}

printHobbies('codding', 'reading', 'drawing');
