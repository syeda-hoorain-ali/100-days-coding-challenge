"use strict";
//******************
//*     Task 4     *
//******************
// Define a numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// Create a function that takes an enum as a parameter
function move(direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving up");
            break;
        case Direction.Down:
            console.log("Moving down");
            break;
        case Direction.Left:
            console.log("Moving left");
            break;
        case Direction.Right:
            console.log("Moving right");
            break;
    }
}
// Call the function with different enum values
move(Direction.Left); // Output: "Moving left"
move(Direction.Right); // Output: "Moving right"
