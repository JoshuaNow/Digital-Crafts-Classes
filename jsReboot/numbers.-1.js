const likes = require("/Users/joshualopez/DigitalCrafts/2020-10-Immersive/02-json-obj-arrays/numbers.json");

// if (likes[0] % 2 === 0) {
//   console.log("it is even");
// } else {
//   console.log("its odd");
// }

// function isEven(n) {
//   return n % 2 === 0;
//   //     if (n % 2 === 0) {
//   //         return true
//   //     }
//   // }else {
//   //     return false
// }

// // const isEven = (n) => n % 2 === 0; // if the arrow function only has 1 arguments we can leave the brackets off
// // const isEven = (n) => n % 2 === 0;

// console.log(`likes[0] is even? ${isEven(likes[0])}`);

// if (i = 0 ; likes[i] > 20000; i++) {
//   console.log(likes);
// }
const hasLotsOfLikes = (n) => n > 20000;

const highLotsOfLikes = likes.filter(hasLotsOfLikes);
console.log(highLotsOfLikes.length);
