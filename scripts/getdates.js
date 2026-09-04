const currentYear = document.querySelector("#currentyear");
const today = new Date();
currentYear.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").textContent = document.lastModified;