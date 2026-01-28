// Express yahan use nahi ho raha, isliye hata diya
// const express = ...

let result = document.getElementById('input');

function appendValue(value){
  result.value += value;
}

function clearDisplay(){
  result.value = '';
}

function clearLast(){
  let val = result.value;
  result.value = val.slice(0, -1);
}

function allClear(){
  result.value = '';
}
