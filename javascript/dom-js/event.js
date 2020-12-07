// events are objects

//Event Object
//Created Event Object
let myEvent = new Event("random");
console.log(myEvent);
//its an object like everything else
//the attribute is the event 'type' with on in front of it.
window.onresize = function (evt) {
  console.log(evt); // the event object is passed!
  //do more things!
};

//Setting HTML attribute
let clicked = 0;
let button = document.querySelector("#more-info");
button.onclick = function (evt) {
  clicked++;
  button.innerText = clicked;
};
//JUst for fun
let color = 254;
let body = document.querySelector("body");
//again the browser passes the event to the function
body.onscroll = function (e) {
  body.style.background = `rgb(${color}, ${color}, ${color})`;
  color--;
  color = color < 0 ? 0 : color;
};
//color gets darker as your scroll
//asynchronous
let profilePic = document.createElement("img");
profilePic.onload = function (evt) {
  console.log("picture src is downloaded Now I can add it");
  document.body.append(profilePic);
};
console.log("trying to load the image");
profilePic.src =
  "https://www.desktopbackground.org/download/1920x1200/2015/12/13/1056660_top-large-hd-wallpapers-landscape-wallpapers_1920x1200_h.jpg";

// Event Target
//event target
let button = document.querySelector("#more-info");
button.onclick = function (event) {
  console.log(event.target);
};
//no need to set a variable
document.querySelector("#more-info").onclick = function (evt) {
  console.log(evt.target);
  evt.target.classList.toggle("primary");
};
//using a single function on multiple items
let ideas = document.querySelectorAll(".child-idea");
const toggleBackground = function (evt) {
  evt.target.classList.toggle("primary");
};
ideas.forEach(function (idea) {
  idea.onclick = toggleBackground;
});
