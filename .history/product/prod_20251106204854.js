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


function savetodb(data){
    return new Promise((success,failure) => {
        let internet = Math.floor(Math.random()*10 )+1;
        if(internet >4){
            success("data is saved");

        }else{
            failure("not saved week connection");
        }
    });
}
// savetodb("apna college").then(() => {
//   console.log("promis was resolved");
//   console.log(request);
// })
// .catch(() => {
//   console.log("promise is rejected");
//   console.log(request);
// })


savetodb("apna college").then((result) => {
  console.log("promis was resolved");
  console.log("promise :",result)
  return savetodb("heelo world");

})
.then((result) => {
  console.log("data2 is saved");
  console.log("result of 2 : ",result);
})
.catch((error) => {
  console.log("promise is rejected", error);
  console.log(error);
})


function num(){
  return new Promise ((resolve, reject)=>{
    setTimeout(() => {
      let num =Math.floor(Math.random() *10)+1;
      console.log(num);
    },2000);
  })
}
async function demo() {
  await num();
  await num();
  num();
}


let url = "https://catfact.ninja/fact";

fetch(url).then((res) =>{
  console.log(res);
  return res.json();
  console.log(res.json()); 
})
.then((data)=>{
  console.log(data);
  return fetch(url);
})
.then((data2)=>{
  console.log(data2);
  return 
})
.catch((err)=>{
  console.log("error",err);
})