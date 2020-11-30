const fs = require("fs");

fs.writeFile("myFile.txt", "hello node file!", "utf8", (err) => {
  if (err) throw err;
  console.log("file written without errors.");
});
