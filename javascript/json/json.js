// let myJsonArray = '["string1", "string2", "string3"]';

// let moreJSONArray = '[7, false, true, 42, "more text"]';
// //numbers and booleans do not require double quotes

// //JSON objects are more like python dictonaries. They require the key to have double quotes.

// let myJsonObject = `{
//       "name":"Clint",
//       "age":39,
//       "email":"clint@digitalcrafts.com"
//   }`;
//JSON objects are more like python dictonaries. They require the key to have double quotes.
let arrayOfObjectJSON = `[
      {
          "name":"Clint",
          "age":39,
          "email":"clint@digitalcrafts.com"
      },
      {
          "name":"Anna",
          "age":37,
          "email":"anna@noneya.com"
      },
      {
          "name":"Olivia",
          "age":11,
          "email":"olivia@noneya.com"
      }
  ]`;
//Arrays and objects are allowed to be nested in JSON

// myJSONArray, moreJSONArray,myJsonObject,arrayOfObjectJSON from above

// let realArray = JSON.parse(myJSONArray);
// console.log(realArray); //array of strings

// look it up on JSON MDN
console.log(arrayOfObjectJSON);
arrayOfObjectJSON;
JSON.stringify(arrayOfObjectJSON); // this is how we turn it into a  string

console.log(arrayOfObjectJSON);
