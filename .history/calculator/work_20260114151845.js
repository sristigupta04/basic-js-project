let result = document.getElementById("result");

function appendValue(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = "";
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function clearLast(){
 result.value = result.onselectionchange(0,-1);
}
function allClear() {
  document.getElementById("display").value = "";
}
