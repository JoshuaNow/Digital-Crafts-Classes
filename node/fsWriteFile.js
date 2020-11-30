const fs = require("fs");

let cars = [
  {
    name: "toyota",
    speed: 100,
    year: 2011,
  },
  {
    name: "kia",
    speed: 70,
    year: 2015,
  },
  {
    name: "Freighter",
    speed: "medium",
    year: "large",
  },
];

let paragraph = `I'm not afraid to take a stand. Everybody, come take my hand. We'll walk this road together, through the storm. Whatever weather, cold or warm. Just lettin' you know that you're not alone. Holla if you feel like you've been down the same road.`;

fs.writeFile("paragraph.txt", paragraph, "utf8", (err) => {
  if (err) throw err;
  console.log("file written without errors.");
});

fs.writeFile("paragraph.txt", paragraph, "utf8", (err) => {
  if (err) throw err;
  console.log("file written without errors.");
});
