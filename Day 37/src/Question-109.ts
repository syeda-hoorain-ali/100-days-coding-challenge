// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

const greetByTime = (): string => {
    const time = new Date().getHours();

    if ((time >= 5) && (time < 12)) return 'Good morning';
    else if ((time >= 12) && (time < 17)) return 'Good afternoon';
    else if ((time >= 17) && (time < 20)) return 'Good evening';
    else return 'Good night';
}

console.log(greetByTime());

