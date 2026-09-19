const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const calculateWindChill = (temp, windSpeed) =>
    13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
let temp = 31;
let windSpeed = 12;
const windChill = document.querySelector("#windChill");
if (temp <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temp, windSpeed).toFixed(1)}°C`;
} else {
    windChill.textContent = `N/A`;
}