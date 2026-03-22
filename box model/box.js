const awesome = document.querySelector('[data-element="awesome"]');
const intrinsicSwitch = document.querySelector("#intrinsic-switch");
const switcher = document.getElementById("switcher");
const container = document.querySelector(".contain");

function updateSizing() {
  awesome.setAttribute(
    "data-sizing",
    intrinsicSwitch.checked ? "intrinsic" : "extrinsic"
  );
}

function updateDirection() {
  container.style.flexDirection = switcher.value;
}

intrinsicSwitch.addEventListener("change", updateSizing);
switcher.addEventListener("change", updateDirection);

updateSizing();
updateDirection();
