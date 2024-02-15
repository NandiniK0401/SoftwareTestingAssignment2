const readline = require('readline-sync');

// Get the user input
console.log("Imperial To Metric Conversion");
let tons = readline.questionInt('Enter the number of tons: ');
let stones = readline.questionInt('Enter the number of stone: ');
let pounds = readline.questionInt('Enter the number of pounds: ');
let ounces = readline.questionInt('Enter the number of ounces: ');

    // Convert all units to ounces
    let totalOunces = 35840*tons+224*stones+16*pounds+ounces;

    // Convert ounces to kilograms
    let totalKilos = totalOunces / 35.274;

    // Get the number of metric tons
    let metricTons = parseInt(totalKilos / 1000);

    // Get the remaining kilograms
    let kilos = parseInt(totalKilos - metricTons * 1000);

    // Calculate the total Kilos subtracting from Metric Tons
  let totalKilosMinusMT = (totalKilos - (metricTons*1000));

  //Calculate the total Kilos minus Metric Tons minus Kilos
  let totalKilosMinusMTMinusKilos = totalKilosMinusMT - kilos;

    // Get the number of grams
    let grams = parseFloat((totalKilosMinusMTMinusKilos*1000).toFixed(1));

    // Format the output
    console.log(`The metric weight is ${metricTons} metric tons, ${kilos} kilos, and ${grams} grams.`);
