// /script.js
// Purpose: Render cards that always open in the same tab (no _blank target)

const cards = [
  { title: "Dalux", url: "https://build.dalux.com/client/login?_gl=1*1lurcdq*_gcl_au*MTgzNjQ1Nzg0MS4xNzYxOTE0MTE5" },
  { title: "TBI", url: "https://www.tbi.nl" },
  { title: "Go Plek", url: "https://go.plek.co/login?mobileWeb=true" },
  { title: "Buienradar", url: "https://www.buienradar.nl/" },
  { title: "SharePoint", url: "https://tbiholding.sharepoint.com/" },
  { title: "ERA Contour", url: "https://www.eracontour.nl/" },
];

// Render grid
const grid = document.getElementById("grid");

// Create one card
const createCard = ({ title, url }, idx) => {
  const a = document.createElement("a");
  a.className = "card";
  a.href = url;
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", `${title} – ga naar ${new URL(url).hostname}`);
  a.dataset.index = String(idx);

  const h2 = document.createElement("h2");
  h2.className = "card__title";
  h2.textContent = title;

  a.appendChild(h2);
  return a;
};

// Render all cards
grid.innerHTML = "";
cards.forEach((c, i) => grid.appendChild(createCard(c, i)));

// Keyboard: Enter to open same tab
grid.addEventListener("keydown", (e) => {
  const anchor = e.target.closest("a.card");
  if (!anchor) return;
  if (e.key === "Enter") {
    e.preventDefault();
    window.location.href = anchor.href;
  }
});
