const prompt = require('prompt-sync')();

// Function to ask for the operation
function getOperation() {
  const operation = prompt("Choose an operation: +, -, *, /");
  return operation;
}

// Function to ask for numbers
function getNumbers() {
  const num1 = Number(prompt("Enter first number:"));
  const num2 = Number(prompt("Enter second number:"));
  return { num1, num2 };
}

// Perform the calculation based on the operation
function calculate(operation, num1, num2) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      // Check for division by zero
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}

// Main function to run the calculator
function runCalculator() {
  const operation = getOperation();
  const { num1, num2 } = getNumbers();
  const result = calculate(operation, num1, num2);
  console.log(`Result: ${result}`);
}

// Run the calculator
runCalculator();

let answer = prompt("Do you want to calculate Threshold Heart Rate? (yes/no)");

if (answer === "yes") {
  function calculateTHR() {
    const age = Number(prompt("Enter your age:"));
    if (isNaN(age)) {
      return "Invalid age";
    }

    var hrMax = 220 - age;
    var lowerTHR = hrMax * 0.70;
    var upperTHR = hrMax * 0.90;
    return [lowerTHR.toFixed(0), upperTHR.toFixed(0)];
  }

  var thrRange = calculateTHR();
  console.log("THR Range: " + thrRange[0] + " to " + thrRange[1] + " beats/min");
}


  let answer = prompt("Do you want to calculate Threshold herat rate? (yes/no)");
  
  if (answer === "yes") {
  
function calculateTHR() {
    const age = parseFloat(prompt("Enter your age:"));
    if (isNaN(age)) {
        return "Invalid age";
    }

    var hrMax = 220 - age;
    var lowerTHR = hrMax * 0.70;
    var upperTHR = hrMax * 0.90;
    return [lowerTHR.toFixed(0), upperTHR.toFixed(0)];
}

// Example usage:
var thrRange = calculateTHR();
console.log("THR Range: " + thrRange[0] + " to " + thrRange[1] + " beats/min");}
