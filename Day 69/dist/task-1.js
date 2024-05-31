"use strict";
//******************
//*     Task 1     *
//******************
// Define a numeric enum
var Rating;
(function (Rating) {
    Rating[Rating["VeryPoor"] = 1] = "VeryPoor";
    Rating[Rating["Poor"] = 2] = "Poor";
    Rating[Rating["Average"] = 3] = "Average";
    Rating[Rating["Good"] = 4] = "Good";
    Rating[Rating["Excellent"] = 5] = "Excellent";
})(Rating || (Rating = {}));
// Use the enum in your code
let userExperience = Rating.Excellent;
console.log(userExperience); // Output: 5
console.log(Rating.Average); // Output: 3
