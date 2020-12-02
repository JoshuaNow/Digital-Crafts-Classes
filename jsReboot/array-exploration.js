/* 
-hello to an array of names, one at a time
    -for () loops
        -for of loops
        -.foreach()
        -hello to names longer than 5 letters
            -.filter()
    -hello to a name if it's inthe array, otherwise "hello world"
//         -.find()
// */

// const names = ["Alice", "Bob", "Charlie", "Dom", "Elle"];
// //for loop is if you need more control
// for (let i = 0; i < names.length; i++) {
//   const oneName = names[i];
//   //   console.log(i);
//   console.log(`${i} : ${oneName}`);
// }

// //for-of iss when you only need the array elements , one at a time
// for (let oneName of names) {
//   console.log(`Hello ${oneName}`);
//   console.log(`Goodbye ${oneName}`);
// }

// const hello = (whom) => console.log(`Hello ${whom}`);
// const bye = (whom) => console.log(`Bye ${whom}`);

// names.forEach(hello);

// // for (let b = 99; b > 0; b--) {
// //   console.log(`${b} bottles of coca-cola`);
// // }

// const combo = (name) => {
//   hello(name);
//   bye(name);
// };
// combo("Alice");
// names.forEach(combo); // this and
//call back function
// names.forEach((name) => {//this do the exact smae thing,
//   hello(name);
//   bye(name);
// });

// demo of .filter
const helloLongName = (n) => {
  //n is the name of the person
  if (n.length > 4) {
    hello(n);
  }
};

const isNameLong = (n) => {
  if (n.length > 4) {
  }
};

//implement out own version .filter and .forEach
