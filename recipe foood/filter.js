const searchInput = document.getElementById("recipeSearch");
const recipeCount = document.getElementById("recipeCount");
const recipeCards = document.querySelectorAll(".toast");

function updateRecipes(query = "") {
  const searchText = query.trim().toLowerCase();
  let visibleCount = 0;

  recipeCards.forEach((card) => {
    const content = card.textContent.toLowerCase();
    const isVisible = content.includes(searchText);
    card.hidden = !isVisible;

    if (isVisible) {
      visibleCount += 1;
    }
  });

  recipeCount.textContent = `${visibleCount} recipe${visibleCount === 1 ? "" : "s"} shown`;
}

searchInput.addEventListener("input", (event) => {
  updateRecipes(event.target.value);
});

updateRecipes();
