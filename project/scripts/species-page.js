// species-page.js
// Renders the species catalog, handles filtering and favorites.

import { species } from "./species.js";

const grid = document.querySelector("#species-grid");
const emptyMessage = document.querySelector("#empty-message");
const habitatFilter = document.querySelector("#habitat-filter");
const difficultyFilter = document.querySelector("#difficulty-filter");
const favoritesOnlyToggle = document.querySelector("#favorites-only");

const FAVORITES_KEY = "pla-favorite-species";

function getFavorites() {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveFavorites(ids) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

function toggleFavorite(id) {
  const favorites = getFavorites();
  const index = favorites.indexOf(id);

  if (index === -1) {
    favorites.push(id);
  } else {
    favorites.splice(index, 1);
  }

  saveFavorites(favorites);
  renderSpecies();
}

function difficultyLabel(level) {
  if (level === "easy") return "Easy";
  if (level === "medium") return "Medium";
  return "Hard";
}

function habitatLabel(habitat) {
  if (habitat === "river") return "River";
  if (habitat === "pond") return "Pond / Reservoir";
  return "River & Pond";
}

function buildCard(fish, favorites) {
  const isFavorite = favorites.includes(fish.id);
  const lureList = fish.bestLures.join(", ");

  return `
    <article class="species-card" data-id="${fish.id}">
      <img src="${fish.image}" alt="${fish.name} (${fish.scientificName})" loading="lazy" width="320" height="200">
      <div class="card-body">
        <h3>${fish.name}</h3>
        <p class="scientific-name">${fish.scientificName}</p>
        <ul class="card-meta">
          <li><strong>Habitat:</strong> ${habitatLabel(fish.habitat)}</li>
          <li><strong>Difficulty:</strong> ${difficultyLabel(fish.difficulty)}</li>
          <li><strong>Best lures:</strong> ${lureList}</li>
          <li><strong>Best season:</strong> ${fish.season}</li>
        </ul>
        <p>${fish.description}</p>
        <button type="button" class="favorite-btn" data-id="${fish.id}" aria-pressed="${isFavorite}">
          ${isFavorite ? "★ Favorited" : "☆ Add to favorites"}
        </button>
      </div>
    </article>
  `;
}

function getFilteredSpecies() {
  const habitat = habitatFilter.value;
  const difficulty = difficultyFilter.value;
  const favoritesOnly = favoritesOnlyToggle.checked;
  const favorites = getFavorites();

  return species.filter((fish) => {
    const matchesHabitat =
      habitat === "all" || fish.habitat === habitat || fish.habitat === "both";
    const matchesDifficulty = difficulty === "all" || fish.difficulty === difficulty;
    const matchesFavorite = !favoritesOnly || favorites.includes(fish.id);

    return matchesHabitat && matchesDifficulty && matchesFavorite;
  });
}

function renderSpecies() {
  const favorites = getFavorites();
  const filtered = getFilteredSpecies();

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;
  grid.innerHTML = filtered.map((fish) => buildCard(fish, favorites)).join("");

  grid.querySelectorAll(".favorite-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      toggleFavorite(id);
    });
  });
}

[habitatFilter, difficultyFilter, favoritesOnlyToggle].forEach((control) => {
  control.addEventListener("change", renderSpecies);
});

renderSpecies();
