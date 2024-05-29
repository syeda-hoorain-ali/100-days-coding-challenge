## 🚀 Day 56 Challenge: Start Coding! 🚀

## Contents
- [Type Conversions](#type-conversions)
- [Basic operators, maths](#basic-operators-maths)

## Type conversions

The "Type Conversions" tutorial explains how to convert values between different data types in JavaScript.

### Numeric conversion rules:
<table border='2'>
    <tr> 
        <th>undefined</th>
        <td>NaN</td>
    </tr>
    <tr> 
        <th>null</th>
        <td>0</td>
    </tr>
    <tr> 
        <th>true and false</th>
        <td>1 and 0</td>
    </tr>
    <tr> 
        <th>string</th>
        <td>Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.</td>
    </tr>
</table>


## Operators
The "Operators" tutorial covers the different types of operators in JavaScript, including arithmetic, assignment, comparison, and logical operators.


### Tasks

1. What are the final values of all variables `a`, `b`, `c` and `d` after the code below?
    ```js
    let a = 1, b = 1;
    let c = ++a; // ?
    let d = b++; // ?
    ```
    
2. What are the values of `a` and `x` after the code below?
    ```js
    let a = 2;
    let x = 1 + (a *= 2);
    ```

3. What are results of these expressions?
    ```js
    "" + 1 + 0
    "" - 1 + 0
    true + false
    6 / "3"
    "2" * "3"
    4 + 5 + "px"
    "$" + 4 + 5
    "4" - 2
    "4px" - 2
    "  -9  " + 5
    "  -9  " - 5
    null + 1
    undefined + 1
    " \t \n" - 2
    ```

4. Fix the bug
    - Here’s a code that asks the user for two numbers and shows their sum.
    - It works incorrectly. The output in the example below is 12 (for default prompt values).
    - Why? Fix it. The result should be 3.

    ```js
    let a = prompt("First number?", 1);
    let b = prompt("Second number?", 2);

    alert(a + b); // 12
    ```


## References
- [Data Types](https://javascript.info/type-conversions)
- [Interaction: alert, prompt, confirm](https://javascript.info/operators)

---