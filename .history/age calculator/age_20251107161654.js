let btn= document.querySelector("#button");
let p = document.querySelector("#realage");

btn.addEventListener("click",()=>{
    let input = document.querySelector("#eventdata").ariaValueMax;
    if(!input){
        p.innerText ="enter a age";
        return
    }
    console.log("clicked");

});