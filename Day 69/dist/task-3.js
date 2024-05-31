"use strict";
//******************
//*     Task 3     *
//******************
// Define a heterogeneous enum
var Result;
(function (Result) {
    Result[Result["No"] = 0] = "No";
    Result["Yes"] = "YES";
})(Result || (Result = {}));
// Use the enum in your code
let response = Result.Yes;
console.log(response); // Output: "YES"
console.log(Result.No); // Output: 0
