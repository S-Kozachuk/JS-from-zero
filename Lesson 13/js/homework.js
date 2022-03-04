// Домашняя работа. Home work.

// Задача №1.
/*
Получить в переменную элемент с атрибутом data-say-hi
и прочитать значение этого атрибута.
*/
//<div data-say-hi="yes">Привет!</div>
// Решение. Solution.
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
// Первый способ. First method.
// Важно. Нужно получить именно елемент, а не просто его содержимое (content).
// Получение в константу list 14-ого элемента списка (сквозной посик)
//const list = document.querySelectorAll('li')[14];
// Используя свойство outerHTML получаю html-разметку элмента + содержимое.
/*
const yonchi = list.outerHTML;
console.log(yonchi);
*/

// Нестандартный вариант решения 2-ой задачи отдугого пользователя 
/*
"Там во втором задании нужно элемент с текстом целиком в переменную получить, насколько я понял (с тегами и контентом).
Я такую функцию прикольную сделал:"
*/
/*
const yonchiElem = tagFinder("li","Йончи");
function tagFinder(tagName, text)
{
	let result;
	const element = document.querySelectorAll(`${tagName}`);
	for (let name of element)
	{
		if (name.textContent == `${text}`)
			result = name;
	}
	return result;
}
console.log(yonchiElem);
*/
/*
Вбиваешь нужный тег и текст и она возвращает тебе элемент))
*/

// Задача №3. Task number 3.
// Получить в переменную коллекцию элементов с классом Like
// Get in variable collection of elements with like class
/*
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>
*/
// Решение задачи. Task solution.

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


