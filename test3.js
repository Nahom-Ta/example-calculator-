const prompt = require('prompt-sync')();

// ask for the operation
function getOperation() {
  const operation = prompt("Choose an operation: +, -, *, /");
  return operation;
}

function getNumbers() {
  const num1 = Number(prompt("Enter first number:"));
  const num2 = Number(prompt("Enter second number:"));
  return { num1, num2 };
}

function calculate(operation, num1, num2) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      
      if (num2 === 0) {
        return "Cannot by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}

// Main function 
function runCalculator() {
  const operation = getOperation();
  const { num1, num2 } = getNumbers();
  const result = calculate(operation, num1, num2);
  console.log(`Result: ${result}`);
}

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
// The calculator app helps people do simple math and figure out their Threshold Heart Rate (THR).
//  It lets users pick a math task, does the sums, and then offers to find their THR based on how old they are. 
//  The special part is working out the THR, showing the best heart rate zone for working out. 
//  The main challenge was 'prompt not defined' in VS Code, which I resolved by watching a YouTube video. 
//  Additionally, I worked to understand the differences between the 'var' and 'let' keywords 
//  for variable declaration, which helped structure the code correctly.