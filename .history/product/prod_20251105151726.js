let h1 = document.querySelector("h1");

function colo(color, delay) {
  setTimeout(() => {
    h1.style.color = color;
  }, delay);
}

// calling them with increasing delays
colo("red", 1000);
colo("orange", 2000);
colo("blue", 3000);
colo("yellow", 4000);
colo("green", 5000);
