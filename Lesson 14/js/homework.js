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

// Extension version

setTimeout(()=> {
		window.scrollTo({
			top: 100,
			left: 0,
			behavior: "smooth"
		},  1000);
});


// Задача №3.
// Получить координаты любых трёх элементов на странице.