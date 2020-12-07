//(exercise 9 event listeners)
// declaring variable for func button increase. initializing var with value of 0.
let num = 0;
// button variable from html doc with more-info class
// query selector picks first element with specified class
let button = document.querySelector(‘.more-info’);
// adds class ‘btn’ to first HTML element w/ class ‘child-idea’
button.classList.add(‘btn’);
let childIdea = document.querySelector(‘.child-idea’);
childIdea.classList.add(‘btn’);
// assign function that increases button text when clicked.
// added if statement, once click reaches 10, event is removed and button turns red
const func1 = function () {
    num++;
    if (num == 10) {
        button.removeEventListener(‘click’, func1);
        button.style.backgroundColor = ‘#A8323C’;
    }
    button.innerHTML = num;
};
// adds event, when click occurs, func 1 is called
// ‘click’ is built-in event in JS
button.addEventListener(‘click’, func1);
