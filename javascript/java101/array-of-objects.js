let pppl = [
  {
    name: "Clint",
    age: 38,
  },
];

// let people = [
//     {   name:"Clint", age: 38} // sometimes it can look like this and this ia just fine.
// ]

let people = [
  {
    name: "Clint",
    age: 38,
  },
  {
    name: "Anna",
    age: 37,
  },
  {
    name: "Olivia",
    age: 11,
  },
  {
    name: "Alle",
    age: 9,
  },
  {
    name: "Mark",
    age: 7,
  },
];

console.log(people[0].name + " is " + people[0].age + " years old");

let cur = people[1];
console.log(cur.name + " is " + cur.age + " years old");

// loop through array
people.forEach(function (person) {
  console.log(person.name + " is " + person.age + " years old");
});
