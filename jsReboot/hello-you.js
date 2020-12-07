//a function is like a recipeD
const whom = "Oakley"; //this outter scope is a global scope

function helloLiz() {
  console.log("Hello Liz");
}

function helloTurkey() {
  console.log("hello turkey");
}

function hey() {
  const whom = "Oakley";
}

// function helloWhom(person) {
//   console.log(`hello  ${person}`); //this is a function scope
// }

// //you have to "make" the recipe (call the fn)
// helloLiz();
// helloTurkey();
// //Function expression assigned to a variable.
// //1. use function name as a const variable
// //2.on the RHS, copt and paste the functions
// //3. delete the name from the RHS
// const helloWhom = function (person) {
//   console.log(`hello  ${person}`);
// };

// //fucntion expression as an arow functions
//1.copy/paste your fn expr as var
//2.edelete the word fucntion from RHS
//3. put an arrow after the parentheses
const helloWhom = (person) => {
  console.log(`hello  ${person}`);
};
helloWhom("Jeff");

////////
//implicit return is even shorter-hand
const makeSandwich = (toppings) => {
  `[bread]${toppings} [bread]`;
};
const makeSandwich = (toppings) => {
  return `[bread]${toppings} [bread]`;
};
const mySandwich = makeSandwich("tofu");

console.log(mySandwich);
