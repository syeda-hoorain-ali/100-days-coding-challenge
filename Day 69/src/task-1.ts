//******************
//*     Task 1     *
//******************

// Define a numeric enum
enum Rating {
    VeryPoor = 1,
    Poor,
    Average,
    Good,
    Excellent,
}

// Use the enum in your code
let userExperience: Rating = Rating.Excellent;

console.log(userExperience);  // Output: 5
console.log(Rating.Average);  // Output: 3
