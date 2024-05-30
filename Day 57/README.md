## 🚀 Day 57 Challenge: Start Coding! 🚀

## Contents
- [Comparisons](#comparisons)
- [Conditional Operators: if, '?'(Ternary Operator)](#conditional-operators-if-ternary-operator)

## Comparisons

The "Comparisons" tutorial covers how to compare values in JavaScript using various operators such as equality, inequality, and relational operators.

### Tasks
1. What will be the result for these expressions?
    ```js
    5 > 4
    "apple" > "pineapple"
    "2" > "12"
    undefined == null
    undefined === null
    null == "\n0\n"
    null === +"\n0\n"
    ```

## Conditional Operators: if, '?'(Ternary Operator)

The "Conditional Operators" tutorial explains how to use `if`, `else if`, and `else` statements, along with the ternary operator for conditional logic in JavaScript.

### Tasks
1. Will alert be shown?
    ```js
    if ("0") {
    alert( 'Hello' );
    }
    ```

2. The name of JavaScript
    - Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
    - If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

3. Show the sign
    - Using if..else, write the code which gets a number via prompt and then shows in alert:
    1. 1, if the value is greater than zero,
    2. -1, if less than zero,
    3. 0, if equals zero.
    - In this task we assume that the input is always a number.

4. Rewrite this if using the conditional operator '?':

    ```js
    let result;

    if (a + b < 4) {
        result = 'Below';
    } else {
        result = 'Over';
    }
    ```

5. Rewrite 'if..else' into '?'
    - Rewrite if..else using multiple ternary operators '?'.
    - For readability, it’s recommended to split the code into multiple lines.
    ```js
    let message;

    if (login == 'Employee') {
        message = 'Hello';
    } else if (login == 'Director') {
        message = 'Greetings';
    } else if (login == '') {
        message = 'No login';
    } else {
        message = '';
    }
    ```


## References
- [Comparisons in JavaScript](https://javascript.info/comparison)
- [Conditional Operators: if, '?'(Ternary Operator) in JavaScript](https://javascript.info/ifelse)

---