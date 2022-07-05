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
document.onclick = function(e){
	coords.innerHTML = e.clientX + ':' + e.clientY;
};

// left top outside corner
const firstTriangle = document.querySelector('.trl-one');
const getLeftTopCorner = firstTriangle.getBoundingClientRect();
const getItemLeftCorner = getLeftTopCorner + window.pageXOffset;
console.log(getItemLeftCorner);
