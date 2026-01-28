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

     if (days < 0) {
    // get number of days in the previous month of 'today'
    // (month index for Date(year, month, 0) is 1-based for previous month)
    const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days = prevMonthDays + days; // since days is negative, this subtracts birth.day from prevMonthDays then add today's date
    months -= 1;
  }

  // if months negative, borrow from years
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  // final output
  output.textContent = `Age: ${years} years, ${months} months, ${days} days`;
    console.log("clicked");

});