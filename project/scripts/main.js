// main.js
// Shared behavior across all pages: mobile nav toggle and footer year.

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = `${new Date().getFullYear()}`;
}
