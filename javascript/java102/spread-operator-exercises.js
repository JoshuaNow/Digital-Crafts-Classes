let letters = ["a", "b", "c", "d", "e"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr1 = [...letters, ...numbers];
console.log(arr1);

const cars = [
  {
    make: "Chevy",
    model: "Corvette",
    year: 2019,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2018,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2020,
  },
  {
    make: "GMC",
    model: "h2",
    year: 2010,
  },
];

let volvo = {
  make: "Volvo",
  model: "sedan",
  year: 2025,
};

let jeep = {
  make: "jeep",
  model: "willy",
  year: 1965,
};

let newCars = [...cars, volvo, jeep];
console.log(newCars);
