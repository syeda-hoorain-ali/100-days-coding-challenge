// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

const printFruits = (fruit: string) => {
    switch (fruit.toLowerCase()) {
        case "apple":
            console.log("It's an apple.");
            break;
        case "orange":
            console.log("It's an orange.");
            break;
        case "banana":
            console.log("It's a banana.");
            break;
        default:
            console.log("It's something else.");
    }
}

printFruits("kiwi");
