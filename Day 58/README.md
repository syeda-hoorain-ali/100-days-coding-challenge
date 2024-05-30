## 🚀 Day 57 Challenge: Start Coding! 🚀

## Contents
- [Logical Operators](#logical-operators)
- [Nullish Coalescing Operator '??'](#nullish-coalescing-operator-)

## Logical Operators

The "Logical Operators" tutorial explains how to use `&&` (AND), `||` (OR), and `!` (NOT) operators to control the flow of logic in JavaScript programs.

### Tasks

1. What will be the output of the following code?

    - What's the result of OR?  
        ```js 
        alert( null || 2 || undefined ); 
        ```

    - What's the result of OR'ed alerts?  
        ```js 
        alert( alert(1) || 2 || alert(3) ); 
        ```

    - What is the result of AND?  
        ```js 
        alert( 1 && null && 2 ); 
        ```

    - What is the result of AND'ed alerts?  
        ```js 
        alert( alert(1) && alert(2) ); 
        ```

2. Check the range between
    - Write an if condition to check that age is between 14 and 90 inclusively.
    - “Inclusively” means that age can reach the edges 14 or 90.

3. Check the range outside
    - Write an if condition to check that age is NOT between 14 and 90 inclusively.
    - Create two variants: the first one using NOT !, the second one – without it.

4. A question about "if"
    - Which of these alerts are going to execute?
    - What will the results of the expressions be inside if(...)?
    ```js
    if (-1 || 0) alert( 'first' );
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 1) alert( 'third' );
    ```

5. Check the login
    - Write the code which asks for a login with prompt.
    - If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

    - The password is checked as follows:
        - If it equals “TheMaster”, then show “Welcome!”,
        - Another string – show “Wrong password”,
        - For an empty string or cancelled input, show “Canceled”

    - Please use nested if blocks. Mind the overall readability of the code.
    - **Hint:** passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.


## Nullish Coalescing Operator '??'

The "Nullish Coalescing Operator" tutorial covers how to use `??` to provide default values when dealing with `null` or `undefined`.

### Tasks

1. Providing Default Values with `??`
    - What happens if a variable is `null`?
    - What happens if a variable is `undefined`?
    - How does `??` handle these situations?

2. Difference Between `??` and `||`
    - How does `||` treat falsy values like `0` or `""`?
    - How does `??` treat `null` and `undefined` specifically?
    - Why might you choose `??` over `||` in certain situations?


## References
- [Logical Operators in JavaScript](https://javascript.info/logical-operators)
- [Nullish Coalescing Operator '??' in JavaScript](https://javascript.info/nullish-coalescing-operator)
---