// const arrowFunc = (num) => num * num;
// console.log(arrowFunc(2));

// const arrowFunc = (a, b, c, d) => (a + b + c) / d;
// console.log(arrowFunc(5, 5, 5, 5));

// const arrowFunc = (a, b, c, d) =>  {
//   return (a + b + c) / d
// }

arr = ["eunice", "dc students", "dylan"];

const newFunc = () => {
  return arr.forEach((name) => console.log(name));
};

newFunc(arr);
