console.log("we are live baby");
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
// console.dir(paragraphs);

//("this is how you get eit by classes");

let paragraphs = document.getElementsByClassName("child-idea");
console.log(paragraphs);

let heading = document.querySelector("h1"); //tag
console.log(heading);
let main = document.querySelector("#main-idea"); // id
let idea = document.querySelector(".child-idea"); // class
let notHere = document.querySelector("#not-here"); //not in document

let ideas = document.querySelectorAll(".child-idea");
console.log(ideas);
console.dir(ideas);
ideas.forEach(function (idea) {
  console.log(idea);
});
