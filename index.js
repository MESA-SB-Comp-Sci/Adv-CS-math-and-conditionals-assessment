/**
 * Q1: 
 * Tommy’s parents implemented a star system so that Tommy can only play on their PC if they have an even number of stars. 
 * Write a conditional statement that will log “you can not play yet” if tommy has an odd number of stars and logs “have fun” if he has an even number. 
 * Case 1: Tommy has 3 stars on Monday so he will not be able to play
 * Case 2: Tommy has 6 stars on Tuesday so he will be able to play
 * 
 * P: 
 * E: 
 * D: 
 * A: 
 * C: Write the code outside of this comment!
 */

let tommyStarCount = Math.floor(Math.random() * 20);

/**
 * Q2: Rock Paper Scissors 
 * 
 * Build rock, paper, scissors 
 * Remember that rock wins scissors, paper wins rock, and scissors wins paper. 
 * If player 1 picks rock, and player 2 picks paper; player 2 will win!
 * 
 * P: 
 * E: 
 * D: 
 * A: 
 * C: Write the code outside of this comment!
 */

const choices = ["rock", "paper", "scissors"];
const playerOneChoice = choices[Math.floor(Math.random() * 3)]
const playerTwoChoice = choices[Math.floor(Math.random() * 3)]
console.log(playerOneChoice, playerTwoChoice)