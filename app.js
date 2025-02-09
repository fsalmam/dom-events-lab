let num1 = ''; // First number
let num2 = ''; // Second number
let operator = null; // Current operator
const resultDisplay = document.querySelector('.display'); // Display element
const buttons = document.querySelectorAll('.button'); // All calculator buttons

// Add event listeners to all buttons
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const buttonValue = button.innerText;

    if (button.classList.contains('number')) {
      handleNumber(buttonValue); // Handle number inputs
    } else if (button.classList.contains('operator')) {
      handleOperator(buttonValue); // Handle operators
    } else if (buttonValue === '=') {
      calculateResult(); // Perform the calculation
    } else if (buttonValue === 'C') {
      clearCalculator(); // Reset everything
    }
  });
});

// Handle number inputs
function handleNumber(value) {
  if (resultDisplay.textContent === '0' || operator === null && num1 === '') {
    resultDisplay.textContent = value; // Replace initial display
  } else {
    resultDisplay.textContent += value; // Append number to the display
  }
  console.log("Current display:", resultDisplay.textContent);
}

// Handle operator inputs
function handleOperator(op) {
  if (num1 === '') {
    num1 = resultDisplay.textContent; // Store the first number
  } else if (operator) {
    num2 = resultDisplay.textContent; // Store the second number
    num1 = calculate(num1, num2, operator); // Perform intermediate calculation
    resultDisplay.textContent = num1; // Update display with result
  }
  operator = op; // Save the operator
  console.log("Operator set to:", operator);
}

// Perform the final calculation
function calculateResult() {
  if (!num1 || !operator) return; // Skip if no valid inputs
  num2 = resultDisplay.textContent; // Store the second number
  resultDisplay.textContent = calculate(num1, num2, operator); // Show the result
  num1 = resultDisplay.textContent; // Save result as num1
  operator = null; // Reset operator
  console.log("Final result:", num1);
}

// Clear the calculator
function clearCalculator() {
  num1 = '';
  num2 = '';
  operator = null;
  resultDisplay.textContent = '0'; // Reset display to 0
  console.log("Calculator cleared");
}

// Perform the calculation
function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);

  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return b !== 0 ? a / b : 'Error'; // Handle division by zero
  return null; // Return null for invalid operators
}
