class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  addNumber(number) {
    this.currentOperand = number;
  }

  updateDisplay() {
    this.currentOperandandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.getElementsByClassName("numbers");
const operationButtons = document.getElementsByClassName("operations");
const allClearButton = document.getElementsByClassName("all-clear");
const equalButton = document.getElementsByClassName("equals");
const deleteButton = document.getElementsByClassName("delete");
const previousOperandTextElement = document.getElementsByClassName("previous");
const currentOperandTextElement = document.getElementsByClassName("current");

const cal = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cal.addNumber(button.innerText);
    cal.updateDisplay();
  });
});
