# Pt.2: Conditional Practice

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
// TODO: Distribute 300 bags of chips to 50 students 

const studentAmount = 50;
const bagsOfChips = 300; 

console.log(300 % 50)
/*
* I used the modulus operator here to see if 300 is divisible by 50. 
*/

// TODO: Can Ms.Rendon evenly distribute 300 bags of chips to 50 students 

console.log(300 % 50 === 0);

/*
* I used strict equality to determine if there will be any bags of chips remaining. 
* Since I set the evaluation to 0, I am asking Javascript to tell me if there are 0 chips remaining. 
* When I ran the code; I got true so Yes, Ms.Rendon can evenly distribute 300 bags of chips to 50 students. 
*/
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

### Criteria for success 
- Your code follows JS conventions 
- Your console.log is performing a modulus operation 
- Your explanations are concise and answer the questions asked
