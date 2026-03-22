const searchInput = document.getElementById("searchAmazon");
const productArea = document.querySelector(".area");
const footerYear = document.getElementById("footerYear");

if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()}`;
}

if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      productArea.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
