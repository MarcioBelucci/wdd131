// club-page.js
// Renders upcoming events and handles the membership sign-up form.

import { events } from "./events.js";

const eventsList = document.querySelector("#events-list");
const form = document.querySelector("#signup-form");
const confirmation = document.querySelector("#form-confirmation");
const nameInput = document.querySelector("#member-name");
const welcomeBanner = document.querySelector("#welcome-banner");

const MEMBER_KEY = "pla-member-name";

function formatDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function buildEventCard(event) {
  return `
    <article class="event-card">
      <img src="${event.image}" alt="${event.name}" loading="lazy" width="320" height="180">
      <h3>${event.name}</h3>
      <p class="event-date">${formatDate(event.date)} &middot; ${event.location}</p>
      <p>${event.description}</p>
    </article>
  `;
}

function renderEvents() {
  eventsList.innerHTML = events.map(buildEventCard).join("");
}

function showWelcomeBanner() {
  const storedName = localStorage.getItem(MEMBER_KEY);

  if (storedName) {
    welcomeBanner.textContent = `Welcome back, ${storedName}! Thanks for being part of Piracicaba Lures Anglers.`;
    welcomeBanner.hidden = false;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const name = nameInput.value.trim();
  const interest = document.querySelector("#interest").value;

  localStorage.setItem(MEMBER_KEY, name);

  confirmation.textContent = `Thanks, ${name}! Your sign-up for ${interest} has been received. We'll be in touch with details for our next event.`;
  confirmation.hidden = false;

  form.reset();
}

renderEvents();
showWelcomeBanner();
form.addEventListener("submit", handleSubmit);
