let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateDisplay();
}

function appendOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

function calculateResult() {
  if (previousNumber !== "" && operator !== "" && currentNumber !== "") {
    let result = 0;
    if (operator === "+") {
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
    } else if (operator === "-") {
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
    } else if (operator === "*") {
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
    } else if (operator === "/") {
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
    }
    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentNumber;
}
