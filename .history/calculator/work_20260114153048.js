let result = document.getElementById("result");

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
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}
