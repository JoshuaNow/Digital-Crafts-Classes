const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data); // this is the same data but not usable because it is not parsed.
  let list = JSON.parse(data);
  console.log(list);
  list.forEach((person) => {
    console.log(person);
    console.log(`${person.name} is ${person.age} years old`);
  });
});
