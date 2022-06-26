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
Use a setTimeout (make delay)
*/

const allPage = document.getElementsByTagName('body');
const buttons = document.querySelectorAll('yellow-button');
console.log(buttons);
/*
function setElementScrollBy() {
    allPage.scrollBy({
        bottom: 20,
        left: 0,
        behavior: "smooth"
    });
}

console.log (setElementScrollBy())
*/


// Задача №3.
/*
Получить координаты любых трёх элементов на странице.
*/