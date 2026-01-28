h1 = document.querySelector("h1");

function colo(color,delay) {
     setTimeout(()=>{
 h1.style.color = color;
     })
};
colo("red",2000);