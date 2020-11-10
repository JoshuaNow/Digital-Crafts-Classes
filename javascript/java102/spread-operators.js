let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5];
console.log(...array1);
console.log(array2);

let array3 = [...array1, 100, 200, ...array2];
console.log(array3);

//syntax
//   {...iteratableObject, key1:value1, key2:value2}

let me = {
  firstName: "Clint",
  lastName: "Fleetwood",
  email: "clint@digitalcrafts.com",
};

let newPerson = { age: 39, ...me };
console.log(newPerson);
