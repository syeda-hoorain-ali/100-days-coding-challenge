// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

let alien_color: string = 'green';

function checkTheColor(color: string) {
    if (color == 'green') {
        console.log('Congratulations! you earned 5 points.');
    } else if (color == 'yellow') {
        console.log('Congratulations! you earned 10 points.');
    } else if (color == 'red') {
        console.log('Congratulations! you earned 15 points.');
    }
}

checkTheColor(alien_color);

alien_color = 'red';
checkTheColor(alien_color);

alien_color = 'yellow';
checkTheColor(alien_color);


