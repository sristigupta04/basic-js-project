const heading = document.querySelector("h1");
const countryInput = document.getElementById("countryInput");
const searchButton = document.getElementById("searchButton");
const list = document.getElementById("list");
const headingColors = ["#ef4444", "#f59e0b", "#3b82f6", "#10b981"];
let colorIndex = 0;

setInterval(() => {
  heading.style.color = headingColors[colorIndex];
  colorIndex = (colorIndex + 1) % headingColors.length;
}, 1200);

async function getUniversities(country) {
  const response = await fetch(
    `https://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch universities.");
  }

  return response.json();
}

function renderMessage(message) {
  list.innerHTML = "";
  const item = document.createElement("li");
  item.textContent = message;
  list.appendChild(item);
}

function show(universities, country) {
  list.innerHTML = "";

  if (!universities.length) {
    renderMessage(`No universities found for "${country}".`);
    return;
  }

  universities.slice(0, 10).forEach((university) => {
    const li = document.createElement("li");
    li.textContent = university.name;
    list.appendChild(li);
  });
}

async function searchUniversities() {
  const country = countryInput.value.trim();

  if (!country) {
    renderMessage("Please enter a country name first.");
    return;
  }

  renderMessage("Searching...");

  try {
    const universities = await getUniversities(country);
    show(universities, country);
  } catch (error) {
    renderMessage("Something went wrong while loading universities.");
    console.error(error);
  }
}

searchButton.addEventListener("click", searchUniversities);

countryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchUniversities();
  }
});
