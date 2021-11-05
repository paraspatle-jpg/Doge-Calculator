class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
    this.updateDisplay();
  }

  clear() {
    this.currentOperand = "0";
    this.previousOperand = "";
    this.operationString = "";
  }
  addNumber(number) {
    if (number.toString() === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand + number.toString();
  }

  operator(action) {
    this.currentOperand = this.currentOperand + " ";
    this.operationString = this.operationString + action.toString();
  }

  delete() {
    if (this.currentOperand[this.currentOperand.length - 1] === " ") {
      this.operationString = this.operationString.slice(0, -1);
    }

    this.currentOperand = this.currentOperand.slice(0, -1);

    if (this.currentOperand === "") {
      this.currentOperand = "0";
    }
  }

  calculateResult() {
    let arr = [];
    let str = "";
    const temp = this.currentOperand;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === " ") {
        arr.push(Number(str));
        str = "";
        i++;
      }
      str = str + temp[i];
    }
    arr.push(Number(str));
    str = "";
    let answer = arr[0];
    for (let i = 0; i < this.operationString.length; i++) {
      if (this.operationString[i] === "+") {
        answer = answer + arr[i + 1];
      }
      if (this.operationString[i] === "-") {
        answer = answer - arr[i + 1];
      }
      if (this.operationString[i] === "*") {
        answer = answer * arr[i + 1];
      }
      if (this.operationString[i] === "/") {
        answer = answer / arr[i + 1];
      }
      if (this.operationString[i] === "%") {
        answer = answer % arr[i + 1];
      }
    }
    this.currentOperand = answer.toString();
    this.operationString = "";
  }

  updateDisplay() {
    if (
      this.currentOperand[0] === "0" &&
      this.currentOperand[1] !== " " &&
      this.currentOperand.length > 1
    ) {
      this.currentOperand = this.currentOperand.substring(1);
    }
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
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cal.operator(button.innerText);
    cal.updateDisplay();
  });
});

equalButton.addEventListener("click", () => {
  cal.calculateResult();
  cal.updateDisplay();
});
