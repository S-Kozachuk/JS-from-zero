// Home work.

// Task №1.
// Getting the width of the scroll bar
/*
const fullWidth = window.innerWidth;
const userWidth = document.documentElement.clientWidth;
let scrollWidth = fullWidth - userWidth;
console.log(scrollWidth+'px');
*/

// Task №2.
/*
Браузер должен прокрутить страницу на 100px вниз,
спустя секунду после открытия страницы.

Solved.
Use a setTimeout (make delay) and scrollTo (6:55)
*/
//
// Standard version
/*
setTimeout(()=>{
	window.scrollTo(0,100);
	console.log('Shift')
}, 5000);
*/

// Extension version (arrow function)
/*
setTimeout(()=> {
		window.scrollTo({
			top: 100,
			left: 0,
			behavior: "smooth"
		});
}, 5000);
*/

// Extension version (named function)
/*
function scrollPage(){
	window.scrollTo ({
		top: 100,
		left: 0,
		behavior: "smooth"
	});
	console.log('Scrolling down');
};

setTimeout(scrollPage, 10000);
*/

// Task №3.
// Getting coordinates any threes elements on page
/*
const firstElem = document.querySelector('.color');
const secondElem = document.querySelector('.btn-two');
const thirdElem = document.querySelector('.btn-seven');
console.log(firstElem);
console.log(secondElem);
console.log(thirdElem);

const getElemCoordsOne = firstElem.getBoundingClientRect();
console.log(getElemCoordsOne);
const getElemCoordsTwo = secondElem.getBoundingClientRect();
console.log(getElemCoordsTwo);
const getElemCoordsThree = thirdElem.getBoundingClientRect();
console.log(getElemCoordsThree);
*/

// Tasks from learn.javascript.ru
// Link: https://learn.javascript.ru/coordinates

let coords = document.getElementById('coords');
let field = document.getElementById('field');
let elemCoords = field.getBoundingClientRect();
let coordsOut = document.getElementById('output');

document.onclick = function(e){
	coords.innerHTML = e.clientX + ':' + e.clientY;
};

let answer1 = [elemCoords.left, elemCoords.top];
let answer2 = [elemCoords.right, elemCoords.bottom];
let answer3 = [elemCoords.left + field.clientLeft, elemCoords.top + field.clientTop];
let answer4 = [elemCoords.right - field.clientLeft, elemCoords.bottom -field.clientTop];

/*
resultArr.forEach((item)=> {
	coordsOut.innerHTML += `${ item} <br>`;
});
*/
console.log(elemCoords);
console.log(answer1, answer2, answer3, answer4);

// console.log(resultArr)
// coordsOut.innerHTML = 'Poit 1: ' + answer1 + ' Point 2: ' + answer2;

