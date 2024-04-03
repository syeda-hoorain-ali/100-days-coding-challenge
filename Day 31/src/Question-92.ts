// Question 92: Write a function to remove the last element from an array and return the removed element.

const removeLastElement = <T>(array:T[]): T | undefined => {
    return array.pop()
}

const fruits: string[] = ['Banana', 'Orange', 'Sapodilla'];
console.log(removeLastElement<string>(fruits));
console.log(fruits);
