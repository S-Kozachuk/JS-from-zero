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
// Важно. Нужно получить именно елемент, а не просто его содержимое (content).
// Получение в константу list 14-ого элемента списка (сквозной посик)
//const list = document.querySelectorAll('li')[14];
// Используя свойство outerHTML получаю html-разметку элмента + содержимое.
/*
const yonchi = list.outerHTML;
console.log(yonchi);
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
/*
const like = document.querySelectorAll('.like');
console.log(like);
*/

// Задача №4. Task number 4.
// Куда добавится элемент <li>Текст</li>?
// Where add <li>Текс</li> элемент?

// JS
/*
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
    'beforeend',
    '<li>Текст</li>'
);
*/

// HTML
/*
<ul>
    <li>Пункт №1</li>
    <li>Пункт №2</li>
</ul>
*/

// Решение задачи. Task solution.
/*
Если выполнять код по условию задачи то объект <li>Текст</li>
никуда не добавиться. Консоль вернёт ошибку.
Причина в совместной работе метода поиска querySelectorAll и
методе вставки insertAdjacentHTML.
Метод посика ищет все доступные объекты в соответсвии с указаным селектором.
Затем метод вставки пытается вставить новый объект во все найденные методом 
поиска объекты.
Но это метод вставки, он применяется единожды одному выбранному объекту.
Это не функция с циклом, которая вновь и вновь будет вставлять новый объект
в во все ранее найденные. 
Как решить эту проблему. Есть два пути.
1. Добавить к методу поиска номер (индекс []) конкретного объекта к которому
нужно применить метод вставки.
2. Изменить метод поиска на .querySelector. Данный метод будет перекращать поиск
сразу же после того как найдёт первый соответсующий селектору объект.
Остальные объекты с таким же селектором этот метод уже искать не будет.

Поэтому, если нужно добавить новый объект к определённомму узлу, то удобнее
воспользоваться 1-ым способом. Либо использоать id.
*/
/*
const list = document.querySelectorAll('ul')[5];
list.insertAdjacentHTML(
    'beforeend',
    '<li>Текст</li>'
);
*/

