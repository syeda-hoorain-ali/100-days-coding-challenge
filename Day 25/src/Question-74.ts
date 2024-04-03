// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

const swapValues = () => {
    let a = 5;
    let b = 10;
    console.log(`Before swap: a = ${a} b = ${b}`);
    
    let c = a; //c = 5
    a = b // a = 10
    b = c // b = 5
    console.log(`After swap: a = ${a} b = ${b}`);
}

swapValues();
