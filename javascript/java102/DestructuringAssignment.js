// /* Looks odd but [x,y] is not an actual array it is assigning the variables */
// let [x, y] = [20, 30];
// console.log(x, "x");
// console.log(y, "y");

// //you do not need everything
// let me = ["Clint", 29, "clint@digitalcrafts.com", 160];
// // let [name, age] = me;
// // console.log(name, age);

// let [name, age, , weight] = me; //this will skip the email because empty string
// console.log(name, age, weight);

//rest of the items returned as an array
let [x, y, ...rest] = [20, 30, 40, 50];
console.log(x, y, rest);

// //rest is not a keyword
