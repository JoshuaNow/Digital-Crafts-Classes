const employees = require("/Users/joshualopez/DigitalCrafts/2020-10-Immersive/02-json-obj-arrays/employees-array.json");
const employee = employees[0]; // this is an object since we going through just the first object of the array employees

// /* key/value pairs are called:
// - objects in JS
// - Dictionary in Python
// */
// //dot syntax is used 99% of the time
// // Use thjis when you know what key(s) you are looking for
// console.log(employee.jobTitle);

// //bracket syntax
// console.log(employee["jobTitle"]);

//how do i get all the keys?
console.log.apply(Object.keys(employee));
//console.log(k) // just prints out the  the keys
for (let k of Object.keys(employee)) {
  //print value for the key
  console.log(employee[k]);
}
