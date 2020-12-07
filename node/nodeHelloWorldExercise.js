//1
for (i = 0; i <= 100; i++) {
  console.log(i);
}
//

function myFunc(a) {
  console.log(`The cowboy says ${"'" + a + "'"} `);
}
myFunc("put them up cowboy");
myFunc("this town ain't big enough for the two of us");
myFunc("buzz light year sucks");

let people = [
  { name: "batman", powers: "none" },
  { name: "iron man", power: "rich" },
  { name: "The Hulk", powers: "being green" },
  { name: "Superman", powers: "Being an Alien" },
];

let justPeople = people.map(function (a) {
  console.log(a.name);
});
