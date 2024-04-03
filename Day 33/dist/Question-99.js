// Question 99: Generate a date object representing your next birthday and log it to the console.
const getNextBirthday = (month, day) => {
    const today = new Date();
    const year = today.getFullYear();
    const birthday = new Date(year, (month - 1), day);
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
};
const nextBirthday = getNextBirthday(10, 31);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
export {};
