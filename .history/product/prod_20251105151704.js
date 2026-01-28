h1 = document.querySelector("h1");

function colo(color,delay) {
     setTimeout(()=>{
 h1.style.color = color;
     },delay)
};
colo("red",1000);
colo("orange",1000);
colo("blue",1000);
colo("yellow",1000);
colo("green",1000);