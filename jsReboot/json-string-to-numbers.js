const likesAsString = require("/Users/joshualopez/DigitalCrafts/2020-10-Immersive/02-json-obj-arrays/numbers-as-strings.json");

const stringToNumber = (s) => parseInt(s, 10); // pass 10 as the second argument

// function stringToNumber(s) {
//   return parseInt(s, 10);
// }

// console.log(likesAsString[0]);
// console.log(stringToNumber(likesAsString[0])); // I can do type of to make sure that it is a number and not a string anymore

const likes = likesAsString.map(stringToNumber);
console.log(likes);

// // this is the equivilant of map
// // const newArray = [];
// for (let i of likes) {
//   newArray.push(likesAsStrings(i));
// }
