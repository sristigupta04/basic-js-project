let btn= document.querySelector("#button");
let p = document.querySelector("#realage");

btn.addEventListener("click",()=>{
    let input = document.querySelector("#eventdata").ariaValueMax;
    if(!input){
        p.textContent ="enter a age";
        return;
    }
    let birth = new Date(input);
    let today =  new Date();
    let  years= today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate()-birth.getDate();

    
    console.log("clicked");

});