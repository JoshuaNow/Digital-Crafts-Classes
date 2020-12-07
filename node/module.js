// https://nodejs.org/api/

// //This is psudo code ... there is not a module called module name
// const moduleName = require("moduleName");

//real example
const os = require("os"); // you can name the modules anything and you can use let and or var but standard practice name the same os and require os

const http = require("http");

const fs = require("fs");

//many more

console.log(os.hostname());

const getInfo = () => {
  console.log(os.platform(), os.homedir(), os.hostname());
};
getInfo();
