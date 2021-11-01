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
    this.currentOperand = this.currentOperand + number.toString();
  }
  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll(".numbers");
const operationButtons = document.querySelectorAll(".operations");
const allClearButton = document.querySelector(".all-clear");
const equalButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const previousOperandTextElement = document.querySelector(".previous");
const currentOperandTextElement = document.querySelector(".current");

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
deleteButton.addEventListener("click", () => {
  cal.delete();
  cal.updateDisplay();
});

allClearButton.addEventListener("click", () => {
  cal.clear();
  cal.updateDisplay();
});
operationButtons.addEventListener("click", () => {
  cal.updateDisplay();
});
