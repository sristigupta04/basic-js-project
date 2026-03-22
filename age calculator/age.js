const form = document.querySelector("#ageForm");
const dateInput = document.querySelector("#eventDate");
const result = document.querySelector("#realage");

dateInput.max = new Date().toISOString().split("T")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = dateInput.value;
  if (!inputValue) {
    result.textContent = "Please select your date of birth.";
    return;
  }

  const birthDate = new Date(inputValue);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "Please choose a valid past date.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    const previousMonthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += previousMonthDays;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});
