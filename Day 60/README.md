## 🚀 Day 60 Challenge: Start Coding! 🚀

## Contents
- [Functions in JavaScript](#functions-in-javascript)
- [Function Expressions in JavaScript](#function-expressions-in-javascript)

## Functions in JavaScript

Functions are fundamental building blocks in JavaScript, allowing you to encapsulate code for reuse and better organization. This section covers the basics of function declaration, parameters, and returning values.

### Tasks
1. Is "else" required?
    - The following function returns true if the parameter age is greater than 18.
    - Otherwise it asks for a confirmation and returns its result:
    ```js
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            // ...
            return confirm('Did parents allow you?');
        }
    }
    ```
    - Will the function work differently if else is removed?
    ```js
    function checkAge(age) {
        if (age > 18) {
            return true;
        }
        // ...
        return confirm('Did parents allow you?');
    }
    ```
    - Is there any difference in the behavior of these two variants?

2. Rewrite the function using '?' or '||'
    - The following function returns true if the parameter age is greater than 18.
    - Otherwise it asks for a confirmation and returns its result.
    ```js
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return confirm('Did parents allow you?');
        }
    }
    ```
    - Rewrite it, to perform the same, but without if, in a single line.
    - Make two variants of checkAge:
        1. Using a question mark operator ?
        2. Using OR ||

3. Function min(a, b)
    - Write a function min(a,b) which returns the least of two numbers a and b.
    - For instance:
    ```js
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
    ```

4. Function pow(x,n) 
    - Write a function `pow(x,n)` that returns `x` in power `n`. Or, in other words, multiplies `x` by itself `n` times and returns the result.
    ```js
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
    ```
    - Create a web-page that prompts for x and n, and then shows the result of `pow(x,n)`.
    - P.S. In this task the function should support only natural values of `n`: integers up from `1`.


## Function Expressions in JavaScript

Function expressions allow you to define functions within expressions, providing more flexibility in how functions are used and stored in variables. This section explores the syntax and use cases of function expressions.

### Tasks
1. Define a function expression that multiplies two numbers and stores it in a variable.
2. Convert the following function declaration to a function expression and use it.
    ```js
    function add(a, b) {
        return a + b;
    }
    ```

## References
- [Functions in JavaScript](https://javascript.info/function-basics)
- [Function Expressions in JavaScript](https://javascript.info/function-expressions)
---
