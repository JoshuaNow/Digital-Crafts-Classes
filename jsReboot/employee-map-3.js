const employees = require("/Users/joshualopez/DigitalCrafts/2020-10-Immersive/02-json-obj-arrays/employees-array.json");

/*.map() transforms the elements of one array into another array
 */

// const numbers = [1, 2, 3, 4, 5];
// const squareItBaby = (n) => n * n;

// console.log(squareItBaby);
// // [1,4,9,16,25]

// function myMap(arr, callback) {
//   const newArr = [];

//   for (let n of arr) {
//     const newVal = callback(n);

//     newArr.push(newVal);
//   }

//   return newArr;
// }
// // const square;

// const squares2 = myMap(numbers, squareItBaby);
// console.log(squares2);

// // .map( ) over the employess array

function summarize(e) {
  const newObj = {
    lastName: e.lastName,
    jobTitle: e.jobTitle,
  };
  return newObj;
}
// const summaryOfEmployees = employees.map(summarize);
// console.log(summaryOfEmployees);

const isLastNameLong = (e) => e.lastName.length > 5;
if (isLastNameLong(employees[0])) {
  console.log("yep");
} else {
  console.log("nope");
}

function capTitle(e) {
  return {
    lastName: e.lastName,
    jobTitle: e.jobTitle.toUpperCase(),
  };
}

const emps2 = employees.filter(isLastNameLong);
console.log(emps2);

const emps3 = emps2.map(summarize);
console.log(emps3);

emps4 = emps3.map(capTitle);

console.log(emps4);
