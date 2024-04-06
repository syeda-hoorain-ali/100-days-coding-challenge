// Question 106: Determine if a given year is a leap year using comparison operators.

const isLeapYear = (year: number): string => {
    const leapYear = (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0));
    return leapYear ? `${year} is leap year` : `${year} is not leap year`
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
