//******************
//*     Task 2     *
//******************

// Define a string enum
enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
}

// Use the enum in your code
let currentStatus: Status = Status.Success;

console.log(currentStatus);  // Output: "SUCCESS"
console.log(Status.Failure); // Output: "FAILURE"
