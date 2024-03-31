// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items: string[]) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with:");
        items.forEach(item => {
            console.log("\t- " + item);
        });
    }
    console.log("-----------------------------");
}

make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Ketchup", "Swiss Cheese");
make_sandwich();


