const result = document.getElementById("result");
const buttonPanel = document.querySelector(".btn");
const allowedPattern = /^[0-9+\-*/.()\s]+$/;

function appendValue(value) {
  result.value += value;
}

function clearDisplay() {
  result.value = "";
}

function clearLast() {
  result.value = result.value.slice(0, -1);
}

function allClear() {
  result.value = "";
}

function calculate() {
  const expression = result.value.trim();
  if (!expression) {
    return;
  }

  if (!allowedPattern.test(expression)) {
    result.value = "Error";
    return;
  }

  try {
    result.value = Function(`"use strict"; return (${expression})`)();
  } catch {
    result.value = "Error";
  }
}

buttonPanel.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  const { value, action } = button.dataset;

  if (value) {
    appendValue(value);
    return;
  }

  if (action === "clear" || action === "all-clear") {
    allClear();
    return;
  }

  if (action === "delete") {
    clearLast();
    return;
  }

  if (action === "equals") {
    calculate();
  }
});

document.addEventListener("keydown", (event) => {
  if (/[0-9+\-*/.()]/.test(event.key)) {
    appendValue(event.key);
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    calculate();
    return;
  }

  if (event.key === "Backspace") {
    clearLast();
    return;
  }

  if (event.key === "Escape") {
    clearDisplay();
  }
});
