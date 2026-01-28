const awesome = document.querySelector('[data-element="awesome"]');
    const intrinsicSwitch = document.querySelector("#intrinsic-switch");
    const switcher = document.getElementById("switcher");
    const container = document.querySelector(".contain");

    intrinsicSwitch.addEventListener("change", () => {
      awesome.setAttribute(
        "data-sizing",
        intrinsicSwitch.checked ? "intrinsic" : "extrinsic"
      );
    });

    switcher.addEventListener("change", (evt) => {
      container.style.flexDirection = evt.target.value;
    });