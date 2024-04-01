// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
const priceSet1 = [3468, 7855, 1200];
const priceSet2 = [900, 6209, 1240];
const totalPrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(totalPrices);
export {};
