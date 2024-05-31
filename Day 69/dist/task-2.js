"use strict";
//******************
//*     Task 2     *
//******************
// Define a string enum
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
// Use the enum in your code
let currentStatus = Status.Success;
console.log(currentStatus); // Output: "SUCCESS"
console.log(Status.Failure); // Output: "FAILURE"
