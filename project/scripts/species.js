// species.js
// Data module: species catalog for Piracicaba Lures Anglers.
// Exported as an array of plain objects so it can be imported
// by species.js (catalog page) and reused by index.js (highlights).

export const species = [
  {
    id: 1,
    name: "Dourado",
    scientificName: "Salminus brasiliensis",
    habitat: "river",
    difficulty: "hard",
    bestLures: ["Jerkbait (long minnow)", "Spinner", "Marabou jig"],
    season: "Autumn and Spring (March-May and September-October)",
    image: "images/species/dourado.webp",
    description:
      "Known as the \"King of the River,\" the Dourado is the most prized trophy in the Piracicaba River basin because of its spectacular jumps. It requires a steel leader and a fast retrieve in strong currents. Always check local closed-season (piracema) dates before targeting this species."
  },
  {
    id: 2,
    name: "Traíra",
    scientificName: "Hoplias malabaricus",
    habitat: "both",
    difficulty: "easy",
    bestLures: ["Weedless soft frog", "Spinnerbait", "Propeller lure"],
    season: "Spring and Summer (warmer months)",
    image: "images/species/traira.webp",
    description:
      "A voracious predator that ambushes prey near calm banks and submerged vegetation. Its topwater strike is one of the most violent hits in sport fishing, making it a favorite for anglers who enjoy explosive surface bites."
  },
  {
    id: 3,
    name: "Tucunaré",
    scientificName: "Cichla kelberi",
    habitat: "both",
    difficulty: "medium",
    bestLures: ["Topwater stick bait", "Popper", "Soft plastic jig"],
    season: "Spring and Summer (October-March)",
    image: "images/species/tucunare.webp",
    description:
      "Although introduced to the region, the yellow peacock bass has become a favorite among sport anglers for its aggressive strikes on surface lures. It stays close to structure such as logs and rocks and defends its territory fiercely."
  },
  {
    id: 4,
    name: "Tambacu / Tambaqui",
    scientificName: "Piaractus mesopotamicus Colossoma macropomum (hybrid) / Colossoma macropomum",
    habitat: "pond",
    difficulty: "hard",
    bestLures: ["Foam pellet imitation", "Small topwater plug"],
    season: "Summer and hot Spring days",
    image: "images/species/tambaqui.webp",
    description:
      "Famous for fighting deep and testing tackle to its limit because of its size and strength, this species is a staple of fee-fishing ponds. Lure anglers use floating pellet imitations to trigger visual surface strikes."
  },
  {
    id: 5,
    name: "Matrinxã",
    scientificName: "Brycon cephalus",
    habitat: "both",
    difficulty: "medium",
    bestLures: ["Small minnow plug", "Spinner", "Spoon lure"],
    season: "Summer and Spring",
    image: "images/species/matrinxa.webp",
    description:
      "Extremely fast and acrobatic, the Matrinxã often jumps clear out of the water as soon as it feels the hook. It strikes lures at high speed, demanding quick reflexes from the angler while working the line."
  },
  {
    id: 6,
    name: "Pirarara",
    scientificName: "Phractocephalus hemioliopterus",
    habitat: "pond",
    difficulty: "hard",
    bestLures: ["Large soft plastic shad (jig head)", "Heavy jig"],
    season: "Spring and Summer (evening or late afternoon)",
    image: "images/species/pirarara.webp",
    description:
      "One of the largest catfish found in fee-fishing ponds, recognizable by its robust body and reddish tail. It demands heavy tackle to handle its tremendous strength near the bottom of the lake."
  }
];
