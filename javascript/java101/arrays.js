// //array and list are very similar

// // let myArr = [] //empty array

//   //create array with items
// let myArr = ['a','b','c']

//   //accessing via index
// console.log(myArr[1]) //b

// myArr.push("d")
// console.log(myArr)

//   //removes the last item and returns the moved item
// let removed = myArr.pop()
// console.log(removed)
// console.log(myArr)

// myArr.unshift('z')//adds to the front of an array
// console.log(myArr)

//   //removes from the front
// let firstItem = myArr.shift()
// console.log(firstItem)
// console.log(myArr)

//old school way
let myArr = ["a", "b", "c", "d", "e"];
// for(let i = 0; i <  myArr.length; i++){
//     console.log(myArr[i])
// }
myArr.forEach(function (letter, idx, sourceArr) {
  console.log(letter, idx, sourceArr);
});
