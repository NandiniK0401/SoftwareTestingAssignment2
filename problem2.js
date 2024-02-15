const readline = require('readline-sync');

// Get user input for loan amount, annual interest rate, and number of years
const loanAmount = readline.questionInt("Enter the loan amount in dollars:");
const annualInterestRate = readline.questionFloat("Enter the annual interest rate (in percentage):");
const years = readline.questionInt("Enter the number of years:");

// Calculate the interest rate
let interestRate = annualInterestRate/5200;

// Calculate the weekly payment
let weeklyPayment = (interestRate/(1-(Math.pow(1+interestRate, -52*years)))) * loanAmount;

// Display the result
console.log(`Your weekly payment will be: $${weeklyPayment.toFixed(2)}`);