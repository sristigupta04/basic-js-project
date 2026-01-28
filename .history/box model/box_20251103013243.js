const awesome = document.querySelector('[data-element="awesome"]');
const intrinsicSwitch = document.querySelector("#intrinsic-switch");
const switcher = document.getElementById("switcher"); // renamed
const container = document.getElementById("container");
intrinsicSwitch.addEventListener("change", () => {
  awesome.setAttribute(
    "data-sizing",
    intrinsicSwitch.checked ? "intrinsic" : "extrinsic"
  );
});

switcher.addEventListener("change", (evt) => {
    container.style.flexDirection = evt.target.value;
});
