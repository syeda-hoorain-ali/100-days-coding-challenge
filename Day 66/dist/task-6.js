"use strict";
//******************
//*     Task 6     *
//******************
let rect;
let box = { width: 20, height: 30, depth: 40 };
// A Box can be assigned to a Rectangle because it has all the properties of Rectangle
rect = box;
console.log(rect);
// However, the opposite is not true
// box = rect; //! Error: Property 'depth' is missing in type 'Rectangle' but required in type 'Box'
