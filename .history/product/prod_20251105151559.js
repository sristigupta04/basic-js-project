h1 = document.querySelector("h1");

function colo(color,delay) {
     setTimeout(()=>{
 h1.style.color = color;
     })
};
colo("red",2000);
colo("orange",2000);
colo("blue",2000);
colo("yellow",2000);
colo("green",2000);