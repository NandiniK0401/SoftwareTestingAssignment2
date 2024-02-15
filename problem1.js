const readline = require('readline-sync');

console.log("Hipster's Local Vinyl Records - Customer Order Details");

//Prompt the user for input
const customerName = readline.question("Enter the customer's name: ");
const distanceInKilometers = readline.questionFloat("Enter the distance in kilometers for delivery: ");
const recordsCost = readline.questionFloat("Enter the cost of records purchased: ");

//Calculate the delivery cost
const deliveryCost = distanceInKilometers * 15;

//Calculate the records cost with tax
const salesTaxRate = 0.14;
const recordsCostWithTax = recordsCost * (1 + salesTaxRate);

//Calculate the total cost
// const totalCost = deliveryCost + recordsCostWithTax;

const totalCost = (delCost, recordsCostWithTax) =>{
    return delCost + recordsCostWithTax;
} 

//Display the customer's order details
console.log("Purchase Summary for " + customerName);
console.log("Delivery Cost: $" + deliveryCost.toFixed(2));
console.log("Purchase Cost: $" + recordsCostWithTax.toFixed(2));
console.log("Total Cost: $" + totalCost(deliveryCost, recordsCostWithTax).toFixed(2));

module.exports = totalCost;