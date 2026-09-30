const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const hambButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hambButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    hambButton.classList.toggle('open', isOpen);
    hambButton.setAttribute("aria-expanded", isOpen);
})

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Cochabamba Bolivia",
    location: "Cochabamba, Bolivia",
    dedicated: "2000, April, 30",
    area: 35500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13685.jpg"
  },
  {
    templeName: "Santa Cruz Bolivia",
    location: "Santa Cruz, Bolivia",
    dedicated: "Not dedicated yet",
    area: 29000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santa-cruz-bolivia-temple/santa-cruz-bolivia-temple-74714.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5206.jpg"
  }
];

function createTempleCard(templeList) {
  const templeCards = document.querySelector("#temple-card");
  templeCards.innerHTML = "";
  templeList.forEach((temple) => {
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const templeInfo = document.createElement("div");
    const image = document.createElement("img");

    name.textContent = temple.templeName;
    templeInfo.classList.add("temple-info");

    const dedicationPending = temple.dedicated === "Not dedicated yet";
    const dedicatedDate = dedicationPending
      ? temple.dedicated
      : new Date(temple.dedicated.replace(
        /^(\d{4}),\s*([^,]+),\s*(\d+)$/,
        "$2 $3, $1"
      )).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }      );

      templeInfo.append(
        createTempleInfo("Location", temple.location),
        createTempleInfo(
          "Dedicated",
          dedicatedDate,
          dedicationPending ? "dedication-status" : ""
        ),
        createTempleInfo("Area", `${temple.area.toLocaleString("en-US")} sq ft`)
      );

    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(templeInfo);
    card.appendChild(image);

    templeCards.appendChild(card);
  });
}

function createTempleInfo(label, value, valueClass = "") {
  const paragraph = document.createElement("p");
  const labelElement = document.createElement("strong");
  const valueElement = document.createElement("span");

  labelElement.classList.add("label");
  labelElement.textContent = `${label}:`;

  valueElement.classList.add("value");
  if (valueClass) {
    valueElement.classList.add(valueClass);
  }
  valueElement.textContent = value;

  paragraph.append(labelElement, " ", valueElement);
  return paragraph;
}

createTempleCard(temples);

function showTemples(event, templeList) {
  event.preventDefault();
  createTempleCard(templeList);
  navigation.classList.remove("open");
  hambButton.classList.remove("open");
  hambButton.setAttribute("aria-expanded", "false");
}

document.querySelector("#home").addEventListener("click", event => {
  showTemples(event, temples);
});

document.querySelector("#old").addEventListener("click", event => {
  const oldTemples = temples.filter(temple => {
    const dedicatedYear = Number(temple.dedicated.split(",")[0]);
    return dedicatedYear < 1900;
  });
  showTemples(event, oldTemples);
});

document.querySelector("#new").addEventListener("click", event => {
  const newTemples = temples.filter(temple => {
    const dedicatedYear = Number(temple.dedicated.split(",")[0]);
    return dedicatedYear > 2000;
  });
  showTemples(event, newTemples);
});

document.querySelector("#large").addEventListener("click", event => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  showTemples(event, largeTemples);
});

document.querySelector("#small").addEventListener("click", event => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  showTemples(event, smallTemples);
});
