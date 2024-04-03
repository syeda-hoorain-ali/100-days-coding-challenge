// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
const daysUntilNewYear = () => {
    const today = new Date();
    const newYear = new Date((today.getFullYear() + 1), 0, 1);
    const diff = Math.abs(today.getTime() - newYear.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
};
console.log(`${daysUntilNewYear()} days until New Year.`);
export {};
