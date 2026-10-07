# Math and Conditional Assessments

## Directions

-  Create a new codespace
-  Read the README.md file
-  Open your index.js file 

--- 

## In your JS file: 

- You will need to use all of your knowledge up to this point and the material we learned today to solve 3 questions! 
- Use variables 
- Use console.logs
- Use modulus operations and logical operators
- Use conditional statements!

### Example: 

```js 
/**
 * Q1: Make 10! 
 * 
 * You will be given a number from 1-10; 
 * Your job is to log how much needs to be added to the current number to make 10!
 * 
 * Check if, when we add 1 to our current number, we will get 10 
 * Check if, when we add 2 to our current number, we will get 10
 * If both are not true, tell the user how much is missing to make 10. 
 * 
 * P: given a number from 1-10 determine how many more is needed to make 10
 * E: 
 * Input: 2 
 * output: 8
 * 
 * Input: 11
 * Output: -1; This number is MORE than 10!
 * D: Input: Num Output: Num or Error message
 * A: 
 * Initialize a variable with a random number 
 * Check if our randNum is > 10 
 *    log --> This num is MORE than 10!
 * Check if randNum + 1 === 10 // check if randNum === 9 
 *    log --> You only need 1 more to make 10 
 * Check if randNum + 2 === 10 // check if randNum === 8 
 *    log --> You only need 2 more to make 10
 * else 
 *    log --> You need {10-randNum} amount to make 10  
 */

let random1to10 = Math.floor(Math.random() * 20);
console.log(`Q1: Your random number is: ${random1to10}`)

if(random1to10 > 10){
  console.log("YOU HAVE MORE THAN 10!")
} else if(random1to10 === 9){
  console.log("YOU NEED 1 MORE TO MAKE 10")
} else if(random1to10 === 8){
  console.log("YOU NEED 2 MORE TO MAKE 10!")
} else {
  console.log(`You need ${10-random1to10} to make 10.`)
}
```

## Code reminders: 

You can run the JS file by using the following code: 

```bash
node index.js
```

Run the code every time you make a change! 

You can write comments in the following ways:

```js
// This is a single line comment

/*
This a multi-line comment.
You might want to use this one instead for longer comments.
*/
```

### Rubric

Learning Goal | 4 | 3 | 2 | 1 | 
--------------|---|---|---|---|
|LG 2.0 - Arithmetic Operations: Students can solve real world computational problems through the use of JS built in Math functions and operators. | <li> Edge cases are described correctly and accounted for in their code </li> <li> More than 1 math or modulus operator is used </li>  <li> Multiple logic operators are used correctly </li> <li> Code is neat and easy to read </li>  | <li> Solution is correct </li> <li> Math and logic operators are used </li> <li> Code is neat and easy to read </li> | <li> Math and logic operators are used </li> <li> Code is neat and easy to read </li> <li> code does not solve the question </li> | <li> Incomplete solution </li> |
| LG 2.2 - Conditionals: Students show fluency in conditional statements by using proper control flow semantics and covering edge cases in their planning and execution. | <li> if/else if/ else statements are used correctly <li> Problem is solved with correct code <li> edge cases are used correctly <li> code is neat and easy to read  | <li> if/else is/else are used correctly <li> Problem is solved and correct <li> code is neat and easy to read | <li> if and else are used <li> code does not solve the question | <li> incomplete Solution |
---------


