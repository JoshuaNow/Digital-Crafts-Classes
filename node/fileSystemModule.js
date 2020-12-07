const fs = require("fs");

// //usage PSUDO Code
// fs.readFile("/path/to/file", callbackFn);

// // use utf8 makes it human readable
// fs.readFile("text.txt", "utf8", (err, data) => {
//   console.log(data);
// });

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) throw err; // returning an error and console logging just states error , throw makes functions stop
  console.log(data);
  console.log(typeof data);
});

fs.readFile("stuff.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data)); // this is how we can make it into an object and use it as data

  let output = JSON.parse(data);
  output.map(
    (value, index) => console.log(` the item number ${index} is ${value}`), //this is how you use it .
  );

  console.log(typeof ["bear", "soda", "microphone", "keyboard"]);
});

//always use it as as call back unless initializing an app
//
fs.readFileSync("stuff.json", "utf8");
console.log(JSON.parse(data)); // this will make it delay if to many users try to access, when you are initially loading a page or app this is acceptable other wise the other way
