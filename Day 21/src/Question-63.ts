// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.


type Shape = {
    shape: 'circle' | 'rectangle';
    radius?: number;
    width?: number;
    height?: number;
}

const circle: Shape = {
    shape: 'circle',
    radius: 5,
}

const rectangle: Shape = {
    shape: 'rectangle',
    width: 20,
    height: 10,
}

console.log(circle);
console.log(rectangle);

