const awesome = document.querySelector('[data-element="awesome"]');
const intrinsicSwitch = document.querySelector("#intrinsic-switch");
const switch = document.querySelector("#switcher");


intrinsicSwitch.addEventListener("change", ()  =>{
    awesome.setAttribute("data-sizing",intrinsicSwitch.checked ? "intrinsic" : "extrinsic" );
});




