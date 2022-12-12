let buffer = "0";
let total = 0;
let previousOperator;
const screen = document.querySelector(".display-box");


// This function get's triggered when button is clicked
function buttonClicked(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  reRender();
}

// Handles symbols and re-Routes mathematical operations
function handleSymbol(symbol) {
  switch (symbol) {
    case "×":
      mathOps(symbol);
      break;
    case "-":
      mathOps(symbol);
      break;
    case "+":
      mathOps(symbol);
      break;
    case "=":

      break;
    case "÷":
      mathOps(symbol);
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "C":
      buffer = "0";
      break;
    default:
      console.log("Symbol Handling failed :(");
  }
}

// Mathematical Operations
function mathOps(symbol) {
  switch (symbol) {
    case '×':
    
  }
}

// Handles numbers
function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
}

// Re-Rendering is required in order to save the calculator info on screen during process
function reRender() {
  screen.innerText = buffer;
}

// Init everything
function init() {
  console.log("Hi");
  document
    .querySelector(".calculator")
    ?.addEventListener("click", (event) => {
      buttonClicked(event.target.innerText);
    });
}

init();
