// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDay()).padStart(2, '0');
    const month = String((date.getMonth() + 1)).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};
console.log(getCurrentDate());
export {};
