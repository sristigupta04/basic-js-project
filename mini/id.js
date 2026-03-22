const sidebarToggle = document.getElementById("check");
const sidebarMenu = document.getElementById("sidebarMenu");
const navLinks = document.querySelectorAll("[data-nav-link]");

function syncSidebarState() {
  const isOpen = sidebarToggle.checked;
  sidebarMenu.setAttribute("aria-hidden", String(!isOpen));
}

sidebarToggle.addEventListener("change", syncSidebarState);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    sidebarToggle.checked = false;
    syncSidebarState();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebarToggle.checked = false;
    syncSidebarState();
  });
});

syncSidebarState();
