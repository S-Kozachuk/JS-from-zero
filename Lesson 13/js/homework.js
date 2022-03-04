// Домашняя работа. Home work.

// Задача №1.
/*
Получить в переменную элемент с атрибутом data-say-hi
и прочитать значение этого атрибута.
*/
//<div data-say-hi="yes">Привет!</div>
// Solution
// The 1-st method
// Get attribute to constant "data"
//const data = document.querySelector('[data-say-hi]');
// Get a value from attribute
//const result = data.getAttribute('data-say-hi');
// Output(reading) value from this attribute
//console.log(result);

// The 2-nd method (2-ой способ)
/*
const dataElem = document.querySelector('[data-order]');
console.log(dataElem.dataset.order);
*/

// Задача №2. Task number 2.
// Получить в переменную элемент с текстом Йончи
// Get element to variable with "Yonchi" text
/*
<ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul>
*/
// Решение задачи. Task solution.

// Задача №3.
// Получить в переменную коллекцию элементов с классом Like
/*
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>
*/
// Задача №4
//Куда добавится элемент <li>Текст</li>?

// JS
/*
const list = document.querySelectorAll('ul');
list.insert.AdjacentHTML(
    'beforeend',
    '<li>Текст</li>'
);

// HTML
<ul>
    <li>Пункт №1</li>
    <li>Пункт №2</li>
</ul>
*/


