// Урок 13.Document object model (DOM). Изменение HTML CSS. Атрибуты и свойства.

/*
0:34
Окружение Java Script.
На данный момент JS это мультиплатформенный язык программирования.
Поэтому может использоваться в разных средах (веб-браузер, веб-сервер или в любой другой среде).
Каждая среда предоставляет свою функциональность, которую спецификация JS называет окружением.
Окружение предоставляет свои объекты и доплнительные функции к уже имеющемуся базовому
функционалу JS. 
Например браузеры предоставяют возможность управления веб-страницами, а Node.js некоторые
серверные функцииби т.д.
*/

/*
1:15
Браузерное окружение.
Основным в браузерном окружении является объект Window (глобальный объект). Кроме этого
Window представляет собой окно браузера и обладает методами для управления им (браузером).
*/

// Пример. С помощью метода innerWidth можно получить значение ширины окна браузера.
// const windowWidth = window.innerWidth;
// console.log(`Ширина окна браузера: ${windowWidth} px`);

// Внутри объекта Window находится JavaScript со своими сущностями (object, array, function и т.д.).

/*
1:58 
BOM (browser object model) - объектная модель браузера. Это дополнительные
объекты, предоставляемые браузером. Используется для работы со всеми
объектами, кроме документов.
*/

// Пример. Благодаря объекту navigator становится доступна информация о самом браузере и ОС.
// Информация о браузере.
/*
console.log(navigator.userAgent);

if(navigator.userAgent.includes("Chrome")) {
    console.log('Браузер Chrome');
} else if (navigator.userAgent.includes("Firefox")) {
    console.log('Браузер Firefox');
}
*/

// Информация о платформе.
// console.log(navigator.platform);

// 2:15 Объект Location
/*
Используя объект location можно получить текущий URL,
либо перенаправить браузер по новому адресу.
*/
// Получение URL
// console.log(location.href);
// Изменение URL
// location.href = "https://fls.guru";

// 2:25 Объект History
/*
Объект history позволяет управлять историей браузера,
передвигаться по посещённым ранее страницам.
*/
// history.back();
// history.forward();

// 2:50 Объекты alert, confirm, prompt
/*
Указанные ниже диалоговые окна не поддаются стилизации,
поэтому используются редко.
*/

// Alert
// alert("Привет!");

// Confirm
/*
const confirmResult = confirm("Хочешь научиться верстать?");
console.log(confirmResult);
*/

// Prompt
/*
const promptResult = prompt("Кто ты по жизни?");
console.log(promptResult);
*/

// 4:20 Спецификация CSS object model (CSSOM)
/*
Спецификация CSS object model объясняет как стили должны
представляться в виде объектов, как их читать и писать.
*/

// 4:30 Что такое DOM?
/*
Основой любого html-документа являются теги. В соответствии
с объектной моделью документа каждый тег является объектом.
Вложенные теги являются дочерними (потомками) своего
родителя.
Текст, а также комментарии являются объектами. JS может
управлять всеми объектами из дерева DOM.
*/

// 5:30 
/*
html-документы представлены в браузере в виде дерева DOM.
Теги становятся узлами-объектами, формируя структуру документа.
Текст становится текстовым узлом. Всё, что написано в html-документе
является частью DOM-дерева, даже комментарии.
*/

// 5:50 Взаимодействие с деревом документа.
/*
Все операции с DOM начинаются с объекта document.
Это основная "точка входа" в DOM. Через него можно 
получить доступ к любому узлу.
*/

// 6:00 Навигация по DOM-элементам.
/*
Самые верхние элементы дерева доступны как свойства
объекта document. Самые "верхние" это html, head и body.
Применяя определённые свойства можно получить
эти объекты в переменную. Например const.
*/

// получение объекта html со всем его содержимым
/*
const htmlElement = document.documentElement;
console.log(htmlElement);
*/

// получение объекта head со всем его содержимым
/*
const headElement = document.head;
console.log(headElement);
*/

// получение объекта body со всем его содержимым
/*
const bodyElement = document.body;
console.log(bodyElement);
*/

// 7:00 Получение объекта body
// const bodyElement = document.body;
// Первый и последний дочерние элементы (объявляется константа, ей присваивается значение)
/*
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);
*/

/*
Возможна ситуация при которой в документе 
есть ещё html-код. Но на момент выполнения
скрипта браузер до него "не дошёл".
Именно поэтому стоит размещать скрипт в самом конце
html-документа (перед закрывающим тегом </body>).
*/
/*
Результатом получение и вывода в консоль первого дочернего элемента
объекта body является значение (узел) text (содержит перевод строки, находится перед n1)
*/

// 8:30 Свойство childNodes 
/*
Свойство (коллекция) содержит список всех 
дочерних элементов (включая текстовые узлы) данного объекта (в данном примере тег body).
*/

// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

/*
Для быстрой проверки наличия дочерних узлов
используется специальная функция 
hasChildNodes()
Если узлы есть, функция вернёт true.
*/
// console.log(bodyElement.hasChildNodes());


// 10:30 Перебор коллекции
/*
Свойство childNodes похоже на массив. 
На самом деле это коллекция.
Коллекция - особый перебираемый объект, псевдомассив.

Отличия коллекции от массива:
1. Для перебора коллекции можно использовать for..of.
2. Методы массивов не будут работать, потому что коллекция это не массив.
*/

// Пример, перебор коллекции с выводом в консоль всех дочерних узлов объекта body
// Получение (присвоение) в константу с именем bodyElement объекта body.
// const bodyElement = document.body;

// Получение коллекции дочерних узлов.
// const childNodes = bodyElement.childNodes;

// Запуск цикла for of д/перебора коллекции
/*
for (let node of childNodes) {
    console.log(node); // Вывод в консоль всех узлов коллекции
}
*/

// 11:17 "Живые" коллекции.
/*
Практически все DOM-коллекции за небольшим исключением "живые".
Это значит, что они отражают текущее состояние DOM.
Пример. После присвоения переменной или константе коллекции, 
далее внесения тем или иным способом изменений в дерево DOM,
в переменной или константе будет актуальное (с учётом изменений)
состояние всего дерева DOM.
*/

// 11:50 Только для чтения
/*
DOM-коллекции, а также все навигационные свойства доступны
только для чтения. Это означает то, что нельзя заменить
один дочерний узел на другой просто написав childNodes[i] = ...
Для изменения дерева DOM применяются другие методы.
*/

// 12:20 Обращение к передыдущему, следующему и текущему узлу объекта.
// Получение (присвоение) в константу с именем bodyElement объекта body.
//const bodyElement = document.body;

// Соседние и родительский узлы
// Получение предыдущего узла объекта, находящегося на том же уровне вложенности
//const previousSiblingNode = bodyElement.previousSibling;
// Получение следующего узла объекта, находящегося на том же уровне вложенности
//const nextSiblingNode = bodyElement.nextSibling;
// Получение родителя текущего узла объекта, находящегося на том же уровне вложенност
//const parentNode = bodyElement.parentNode;

//console.log(previousSiblingNode);
//console.log(nextSiblingNode);
//console.log(parentNode);

// 13:50 Навигация только по элементам.
/*
Навигационные свойства, описанные выше относятся ко всем узлам
в документе. В частности, в childNodes находятся текстовые
узлы, узлы-элементы и узлы комментарии (если они есть).
*/

// Получение коллекции всех дочерних узлов.
//const childNodes = bodyElement.childNodes;
//console.log(childNodes);

/*
Для большинства задач текстовые узлы и узлы-комментарии не нужны.
Интерес представляют манипуляции узлами-элементами 
(теги, формирующие структуру html-страницы).
*/

// 14:30 Свойство children
// Получение (присвоение) в константу с именем bodyElement объекта body.
//const bodyElement = document.body;
// Получение коллекции всех дочерних элементов.
/*
Свойство children напоминает childNodes, тем что
создаёт коллекцию. Но в отличие от childNodes,
children создаёт коллекцию всех дочерних элементов, а не узлов.
*/
//const bodyChildren = bodyElement.children;
//console.log(bodyChildren);

// 15:05 
/*
Для каждого навигационного свойства рассмотренного ранее
существует аналоги, которые возвращают именно элементы (html-теги).
*/

//15:20 Первый и последний дочерние элементы.
/*
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastChild;

console.log(firstChild);
console.log(lastChild);
*/

// Соседниe и родительский элементы
// предыдущий элемент
//const previousSibling = bodyElement.previousElementSibling;
// следующий элемент
//const nextSibling = bodyElement.nextElementSibling;
// родительский элемент (в данном случае html)
//const parentElement = bodyElement.parentElement;
/*
console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);
*/

// 17:30 Получение произвольного объекта

// 18:00 Первый метод поиска elem.querySelectorAll(CSS);
/*
Самый универсальный метод поиска объектов. Возвращает все 
элементы внутри некого объекта, удовлетворяющие указанному
CSS - селектору.
Наиболее мощный метод, т.к. можно указать любой CSS-селектор.
*/

// 18:30 Поиск по селектору классов
//const elemsOne = document.querySelectorAll('.lesson__list');
//console.log(elemsOne);

// 19:25 Поиск по селектору тега
//const elemsTwo = document.querySelectorAll('li');
//console.log(elemsTwo);

// 19:55 Поиск по смешанному селектору тега и класса
//const elemsThree = document.querySelectorAll('li.lesson__item-list');
//console.log(elemsThree);

// 20:15 Поиск по тегу первого уровня вложенности
//const elemsFour = document.querySelectorAll('lesson__list>li');
//console.log(elemsFour);

// 20:35 Поиск по нескольким классам
//const elemsFive = document.querySelectorAll('lesson__list, lesson__text');
//console.log(elemsFive);

// 20:50 Поиск по вложенным классам
//const elemsSix = document.querySelectorAll('lesson__list lesson__text');
//console.log(elemsSix);

// 21:00 Поиск по ID 
//const elemsSeven = document.querySelectorAll('#listItem');
//console.log(elemsSeven);

// 21:25 Поиск по атрибуту
//const elemsEight = document.querySelectorAll('[data-item]');
//console.log(elemsEight);

// 21:40 Поиск по атрибуту со значением (в скобках)ф
//const elemsNine = document.querySelectorAll('[data-item="85"]')
//console.log(elemsNine);

// 21:50 querySelectorAll - поиск произвольного элемента.
/*
Наиболее универсальный метод поиска, он возвращает все 
элементы внутри elem, удовлетворяющие данному CSS-селектору.
Позволяет использовать любой CSS-селектор.
*/

// querySelectorAll - возвращает статичную коллекцию.

// 22:00 Получение конкретного элемента коллекции 
/*
const elems = document.querySelectorAll('li');
console.log(elems[2]);
*/

// 22:20 Т.к. elems - коллекция, значи её можно перебрать.
/*
for (const item of elems) {
    console.log(item);
}
*/

// Не смотря на то, что elems не является массивом можно использовать метод перебора forEach
/*
elems.forEach(item => {
    console.log(item);
});
*/

// 22:50 Поиск можно проводить не только в объекте document
// Пример с описанием:
/*
const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);
*/
/*
Объявляется константа subList. Ей присваивается коллекция объектов
имеющих класс.lesson__sub-list. Затем, объявляется вторая константа subItems,
которой приcваивается константа subList. Эта конструкция позволяет искать теги li
только внутри объекта subList. 0 в квадратных скобках указывается что бы "взять"
первый объект.
В консоль будут выведены только теги li, находящиеся внутри объекта .lesson__sub-list (subList)
*/

// 23:30 Неожиданные результаты поиска
// Пример:
/*
const subList = document.querySelectorAll('.lesson__sub-list');
const listItems = subList[0].querySelectorAll('.lesson__list .lesson__item-sub-list');
console.log(listItems);
*/
// Описание 
/*
Первым шагом в константу subList присваивается объект с классом .lesson__sub-list (вложенный список).
Далее объявляется новая константа listItems. В неё присваиваются (фактически идёт поиск) объекты, начиная 
с первого элемента [0], находящиеся внутри объекта subList. Фактически внутри объекта с классом .lesson__sub-list
идёт поиск объектов, имеющих сразу 2 класса: .lesson__list .lesson__item-sub-list, начиная с первой позиции ([0]).
Поскольку объект с классом .lesson__list является родителем (находится вне зоны поиска объекта .lesson__sub-list, см.DOM)
для всех указанных объектов, это значит, что в консоль выводить нечего. 
Но, несмотря на это в консоль будут выведены все три элемента (пункты вложенного списка)
с классом lesson__item-sub-list.
Почему так произошло? Ведь условие (наличие у искомого элемента сразу 2-х классов .lesson__list и .lesson__item-sub-list)
не выполнено.
Причина в том, что по умолчанию querySelectorAll проверяет только последний элемент, без учёта контекста. А последним
элементом в данном случае является объект(-ы) имеющий класс .lesson__item-sub-list.
*/

// 24:45 Метод поиска querySelector
/*
Напоминает querySelectorAll.
Основное отличие в том, что querySelector возвращает первый элемент внутри elem,
соответствующий данному CSS-селектору.
При поиске через querySelectorAll даже, если нужно получить только один объект
приходится сначал получать всё коллекцию. Затем с помощью ключа в квадратных скобках
[0] брать первый объект. Соответственно querySelector работает быстрее.
В константу попдаёт не коллекция, а один объект.
*/
//const lessonList = document.querySelectorAll('lesson__list')[0];
//const lessonList = document.querySelector('.lesson__list');
//console.log(lessonList);

// 26:00 Метод document.getElementById(ID)
/*
Применяется к элементам, имеющим атрибут id.
Расположение искомого элемента в документе значения не имеет.
Условия:
1. id - должен быть уникальным
2. Поиск ведётся только в объекте document
*/
/*
const elem = document.getElementById('listItem')
console.log(elem);
*/

// 26:50 Методы поиска getElementsBy
//'getElementsByTagName(tag)
/*
Важно, синтаксис, окончание 's'!
getElementsBy... а не getElementsBy...
Ищет элементы с данным тегом и возвращает
их коллекцию. Передав "*" вместо тега можно
получить все дочерние элементы.
*/
/*
const elems = document.getElementsByTagName('li');
console.log(elems);
*/

// 27:50 Поиск (возврат) элемента по классу
// getElementsByClassName(className)
/*
Перед именем класса не нужно указывать "." т.к. уже
ясно, что поиск идёт по имени класса.
*/
/*
const elems = document.getElementsByClassName('lesson__item-list');
console.log(elems);
*/

// 28:20 getElementsByName(name)
/*
Возвращает элементы с заданным атрибутом name
Используется очень редко. Поиск только внутри
объекта document.
Результат - "живая" коллекция объектов.
*/
/*
const elems = document.getElementsByName('list');
console.log(elems);
*/

/*
Живая коллекция отличается тем, что при изменении на лету дерева DOM
она будет содержать в себе актуальную информацию.
При этом querySelectorAll будет содержать информацию на момент вызова функции
*/

// 29:15 Отличие живой коллекции от статической

// Получение статической коллекции
//const listStatic = document.querySelectorAll('.lesson__item-list');

// Получение "живой" коллекции
//const listLive = document.getElementsByClassName('lesson__item-list');
/*
console.log(listStatic);
console.log(listLive);
*/

// Создание нового HTML-объекта
/*
const lessonList = document.querySelector('.lesson__list');
lessonList.insertAdjacentHTML(
    "beforeend",
    '<li class="lesson__item-list">Новый пункт</li>'
);
*/

// 30:35 Поиск произвольного элемента
/*
На практке чаще всего используется querySelectorAll т.к. это
позволяет указать любой CSS-селектор.

const elems = document.querySelectorAll('.class');

Другие методы поиска используются только тогда,
когда нужны их уникальные возможности.
*/

// 30:55 Таблица возможностей методов (законспектировать)

// 31:00 Метод поиска closest
/*
Метод elem.closest(css) ищет ближайщего предка,
который соответствует CSS-селектору.
Сам элемент также включается в поиск.

Предки элемента это родитель, родитель родителя,
его родитель и т.д. Вместе они образуют цепочку
иерархии от элемента до вершины.

Другими словами, метод closest поднимается вверх
от элемента и проверяет каждого из родителей.
Если, он соответствует селектору, поиск прекращается.

Метод возвращает предка или null, если такой элемент
не найден.

Важно! Свойство parentElement возвращает только
непосредственного родителя элемента.
*/
/*
const elem = document.querySelector('.lesson__item-sub-list');
const parentList = elem.closest('.lesson__list');
console.log(parentList);
*/
/* ^^^
Данный метод очень полезен для проверки на существование
того или иного родителя. Или для изменения родителя
конкретного элемента.
*/

// 32:50 Проверка matches
/*
Ничего не ищет, а проверяет удовлетворяет ли
элемент CSS-селектору. Возвращает true или false.
*/
/*
const elems = document.querySelectorAll('.lesson__item-list');
for (let elem of elems) {
    if (elem.matches('[class$="lesson__item-list_red"]')) {
        console.log('Красный');
    } else if (elem.matches('[class$="lesson__item-list_blue"]')) {
        console.log('Синий');
    }
}
*/

// 33:40
/*
При получении объекта тем или иным способом 
можно применять ранее изученные свойства навигации.
*/
/*
const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);
*/

// 34:50 Изменение документа. Содержимое элемента innerHTML
// Получение объекта
//const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть" вместе с HTML-разметкой
/*
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
*/
// 35:45 Перезапись содержимого объекта
//textElement.innerHTML = "Живи, а работай в свободное время";
/*
Важно то, что "старая" константа (const textElementСontent) не изменилась 
(внутри по прежнему оригинальное содержимое). ЭЭто позволяет не полностью
менять содержимое, а дрписывать новое.
*/

// 36:15 Дописывание содержимого объекта
/*
С помощью обратных кавычек вставляем контстанту 
${textElementContent}, которая ранее получила 
содержимое нашего объекта.
После дописываем некое своё содержимое.
*/
/*
textElement.innerHTML = `<p>${textElementContent}</p> 
<p>Живи, а работай в
	 <span class="color">свободное</span> время
</p>`;
 
console.log(textElement.innerHTML);
*/

// 37:20 Получение и изменение объекта целиком с помощью outerHTML
// Получаем объект
//const textElement = document.querySelector('.lesson__text');
/*
Получаем содержимое объекта "как есть" вместе с HTML,
а также сам объект (.lesson__text) - его оболочку. Это главное отличие
от метода innerHTML.
*/
/*
const textElementContent = textElement.outerHTML;
console.log(textElementContent);
*/
// Add changed to document (content)
/*
textElement.outerHTML = `<p>Живи, а работай в
    <span class="color">свободное</span> время!</p>`;
*/
// Output to console old origin content
//console.log(textElement.outerHTML);

/*
При выводе в консоль пропадает .lesson__text 
Остаётся только содержимое тега p.
Интересная особенность заключается в том, что
если снова будет нужно получить outer НTML,
то старая оригинальная запись будет доступна.
Включая объект .lesson-text
*/

// 38:45 Управление текстом элемента с помощью свойства textContent 
// Получаем объект .lesson__text
/*
const textElement = document.querySelector('.lesson__text');
// Get a content using textContent method
const textElementContent = textElement.textContent;
console.log(textElementContent);
*/
/*
Полезная возможность textContent - записывать текст "безопасным способом".
Выводит в консоль только текстовое содержимое без html тегов.
*/

// Попытка изменить содержимое
/*
textElement.textContent = `<p>Живи, а работай в
    <span class="color">свободное</span> время!</p>`;

console.log(textElement.textContent);
*/
/*
В результате вывода в консоль теги превратились в строку.
В этом и заключается суть "безопасного способа" -
защита от появления на сайте произвольного HTML-кода.

Например, при попытке отправить любой код через форму 
обратной связи он будет интерпретирован как текст при
условии использования свойства textContent.

В противном случае код, добаленный через форму
может частично или полностью нарушить работу сайта.
*/

// 40:15 Свойство data. Работа с текстовыми узлами или комментариями
// Возвращает содержимое текстового узла или комментария.
/*
const textElement = document.querySelector('.lesson__text');
const getComment = textElement.nextSibling;
*/
//console.log(getComment);
// Для получения только текста комментария нужно добавить свойство data
//console.log(getComment.data);

// 41:00 Изменение текстового узла\комментария
/*
getComment.data = 'Hello';
console.log(getComment.data);
*/

// 41:25 Создание элементов и узлов
// Create a new element (tag) with createElement method
/*
const newElement = document.createElement('div');
console.log(newElement);
*/

// 41:50 Fill the new element

// Create a new element (tag) with createElement method
//const newElement = document.createElement('div');
// Assign a new string with method innerHTML
/*
newElement.innerHTML = `Живи, а работай в
 <span class="color">свободное</span> время!`;
console.log(newElement);
*/

// 42:10 Create a new text node
/*
const newText = document.createTextNode('Привет');
console.log(newText);
*/

/*
Созданные объекты находятся в константах,
но не являются частью html-документа.
Как их вставить в html-документ?
*/

// 42:35 Inserts method.
// Get an object in constant. See the html layout
//const textElement = document.querySelector('.lesson__text');

// Create a new element (tag)
//const newElement = document.createElement('div');
// Fill a new object
/*
newElement.innerHTML =`Живи, а работай 
<span class="color">свободное</span> время!`;
*/
// Other variants
// Insert the new element before object
//textElement.before(newElement);
// After object
//textElement.after(newElement);
// Inside & to the beginning
//textElement.prepend(newElement);
// Inside & to the end
//textElement.append(newElement);

// 44:50 Insert multiple fragments at once
//textElement.append(newElement, "Привет!");

// May insert string (as simple text)
/*
textElement.append(`Живи, а работай в
    <span class="color">свободное</span> время!`);
*/
/*
Особенность данных методов в том, что строки вставляются 
безопасным методом, как это делает textContent. 
Поэтому эти методы могут использоваться только для
вставки DOM-узлов или текстовых фрагментов.
Как быть, если мы хотим вставить HTML код именно "как HTML"
со всеми тегами и прочим как это делает innerHTML?
*/

// 45:45 Insert method insertAdjacentHTML

// Get an object in constant
//const textElement = document.querySelector('.lesson__text');

// Вставляем текст, html, элемент.
/*
textElement.insertAdjacentHTML(
    'afterend', // parametrs
    `<p>Живи, а работай в
    <span class="color">свободное</span> время!</p>`
);
*/

/*
Варианты параметров (см. html layout, 45 string)
"beforebegin" - вставить html непосредственно перед textElement,
"afterbegin" - вставить html в начало textElement,
"beforeend" - вставить html в конец textElement,
"afterend" - вставить html непосредственно после textElement.
*/

// 47:05 Methods insertAdjacentText и insertAdjacentElement
// Get an object in constant
//const textElement = document.querySelector('.lesson__text');

// Insert text
/*
textElement.insertAdjacentText(
    'beforeend',
    `Живи, а работай в
    <span class="color">свободное</span> время!`
)
*/
// Создание нового элемента (тега)
//const newElement = document.createElement('div');

// Наполнение нового элемента
/*
newElement.innerHTML =`Живи, а работай 
    <span class="color">свободное</span> время!`;
*/

// Вставляем элемент
/*
textElement.insertAdjacentElement(
    'beforeend',
    newElement
)
*/
/*
На практике часто используется только метод insertAdjacentHTML.
Потому, что для элементов и текста есть методы
append/prepend/before/after - они короче в написании.
Они способны вставлять как узлы, так и текст.
*/

// 48:10 Elements transfer
/*
В JavaScript есть возможность вставлять не только новые узлы,
но и переносить существующие.
Все методы вставки автоматически удаляют узлы с прежних мест.
*/

// Get an object to lessonBlock constant
//const lessonBlock = document.querySelector('.lesson');

// Get an object to title constant
//const title = document.querySelector('h3');

// Transfer title to the end of lesson lessonBlock
//lessonBlock.prepend(title);

// 49:10 Method cloneNode
/*
Method is use for cloning, but not for transfering
objects(node).
*/

// Get an object to textElement constant
//const textElement = document.querySelector('.lesson__text');

// Cloning without child elements
//const cloneTextElement = textElement.cloneNode();

// Deep cloning with content
//const cloneTextElement = textElement.cloneNode(true);
/*
const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);
*/

// 50:20 Deleting nodes
// Get an object to textElemnt constant
//const textElement = document.querySelector('.lesson__list');
// Deleting object
//textElement.remove();

// 50:50 Classes and styles (CSS)
// Managing classes

// Properties className и classList
/*
Class edited is one of more often action in JavaScript.
For classes managing are used className и classList properties.
*/

// The className property
// Get element to constant
//const element = document.querySelector('.lesson__item-list_red');

// Get all classes name for this object (node)
/*
const elementClassNames = element.className;
console.log(elementClassNames);
*/

// Rerecording class name 
//element.className="red";

/*
The class Name property is uncomfortably use,
because all classes are re-recording.
*/

// 52:08 The classList property
// Special object with add/remove method for single class 

// Get an element to const
//const element = document.querySelector('.lesson__item-list_red');

// Added class
//element.classList.add('active');
// Remove class
//element.classList.remove('active');
// Add class if it no exist, or remove if exist 
//element.classList.toggle('active');
// Check the presence of class, returns true/false 
//element.classList.contains('active');

// 53:05 Example 
// Get element to constant
//const element = document.querySelector('.lesson__item-list_red');

// Added class .active
//element.classList.add('active');
// Checking the class presence (conditional branching)
/*
if(element.classList.contains('active')) {
    console.log(`Element has a class active`);
}
else {
	console.log(`Element didn't has a class active`);
};
*/

// 53:45 Enumeration all classes, for..of method
/* 
The classList property is enumeration, so can enumerated 
all classes by for..of method
*/
// Get element to constant
//const element = document.querySelector('.lesson__item-list_red');
// Add class .active
//element.classList.add('active');
// Iterating through the classes of an object, record to className variable
/*
for (let className of element.classList) {
    console.log(className);
}
*/

// 54:10 Styles managing
// The style property (element.style)

// Get an object to element constant
//const element = document.querySelector('.lesson__item-list_red');

// Setting the style with CSS property: property "color", value "red"
//element.style.color = "red";

// 55:00 Use the camelCase style, if properties consisting from several words.
// Syntax examples.
// Recording "margin-bottom" property
//element.style.marginBottom = "30px";
// Recording "z-index" property
//element.style.zIndex = "10";
// Waring! Every property writing separately (to new string).

// 55:40 Get property value
// Work if condition record in style attribute (in html)
//console.log(element.style.marginBottom);

// 56:10 Style reset.
/*
Add empty value, if need to reset element style. 
After that, property will disappear.
*/
//element.style.marginBottom = "";

// 56:20 Complete styles rewriting 
// style.cssText

// Get an element to constant
//const element = document.querySelector('.lesson__item-list_red');
// New parameters
/*
element.style.cssText = `
	margin-bottom: 30px;
    color: green;
	font-weight: 700;
	`;

/*
Disadvantage of this approach, is that cssText completely
overwrites all CSS properties, that were previously in the style
attribute.
*/
 
// 57:10 Calculating styles. 
// Method getComputedStyle(element, [pseudo]) 
// Get an element to constant
//const element = document.querySelector('.lesson__item-list_red');

// Get a value properties (variants)
// 1. Only if it is written in the style attribute (or get empty string)
//console.log(element.style.fontSize);

// 2. Element style
// Return calculating styles (style attribute doesn't presence in html) 
//const elementStyle = getComputedStyle(element);
//console.log(elementStyle.fontSize);

// 3.Get a pseudo element style
/*
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);
*/

// 58:45 Getting a specific (exact) value
/*
If want get a specific value of properties,
need to write exact (full) name.
*/

// Getting exact value 
//console.log(elementStyle.paddingBottom);
// Getting the unpredictable record
//console.log(elementStyle.padding); 
// ^ In the FireFox will be empty string (empty string)

/*
Work with CSS properties values using getComputedStyle
method is only possible in read mode.
*/
// Example
// Get an element to constant "element"
//const element = document.querySelector('.lesson__item-list_red');

// Element style
//const elementStyle = getComputedStyle(element);

// Only-read property (show a error message in console)
//elementStyle.paddingLeft = "50px";

// 59:20 Nuances of working with styles
/*
Method getComputedStyle use for get a current value of property.
*/
// Examples
// Getting an element to constant "element"
//const element = document.querySelector('.lesson__item-list_red');

// Element style
/*
const elementStyle = getComputedStyle(element);
console.log(elementStyle.paddingBottom);
*/

// Getting number (use the parseInt function)
/*
const paddingBottom = parseInt(elementStyle.paddingBottom);
console.log(paddingBottom);
*/
// It is important not to be to forget units of measurement
//element.style.marginleft = 20;
// ^ in this case, nothing will work
//element.style.marginLeft = "50px";
// ^ Record figure as string with unit of measurement, if style to appear.

// 1:00:30 Classes and styles
/*
From JavaScript we can managing both classes and styles of object.
Classes managing is more priority task then styles.

You should manipulate the "style" property only
if the classes can no longer help. 
For example, when object coordinates is changed of the moment ("on the fly").

As a result, if we can solve the problem using CSS,
by manipulating classes, then that's what we need to do.
*/

// 1:01:15 Attributes & properties of DOM-elements.
/*
Different DOM-elements may have different properties.
For example, the tag <a> has propertis associated with links.
And the <input> tag has properties, associated with the	input field, etc.

HTML-tags can have attributes. 
When browser is parsing (scanning) HTML,
to create a DOM-objects for tag, his recognizing a standarts attributes 
and creatig DOM-properties for them.

Each DOM-node belongs to a corresponding built-in class.
*/
/*
const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');

console.log(link.href);
console.log(input.href);

console.log(input.value);
console.log(link.value);
*/

// Получение полного списка доступных свойств
//console.dir(link);

// 1:03:00 Произвольные атрибуты
//const lessonText = document.querySelector('.lesson__text');

// Проверяем наличие атрибута.
//lessonText.hasAttribute('name');
// Получаем значение атрибута.
//lessonText.getAttribute('name');
// Устанавливаем значение атрибута.
//lessonText.setAttribute('name', "value");
// Удаляем атрибут.
//lessonText.removeAttribute('name');

// 1:04:00 Пример
// Получение элемента
//const lessonText = document.querySelector('.lesson__text');
// Установвка значения атрибута
//lesson__text.setAttribute('some-attribute', 'some-value');
// Проверяем наличие атрибута
/*
if(lessonText.hasAttribute('some-attribute')) {
console.log('some-attribute существует!');
}
*/

// 1:05:00 Синхронизация между атрибутами и свойствами
/*
Для обращения к тому или иному свойству применяются
При изменении стандартного атрибута, соответствующее
свойство обновляется автоматически.
Это утверждение работает и в обратном порядке (за некоторыми исключениями).
*/

// Пример
/*
const input = document.querySelector('.lesson__input');
 
input.setAttribute('id', '123');
console.log(input.id);

input.id = "321";
console.log (input.getAttribute('id'));
*/

// 1:06:00 Тестирование со свойством value
//const input = document.querySelector('.lesson__input');
/*
input.setAttribute('value', 'Привет!');
console.log(input.value);

input.value = "Как дела?";
console.log(input.getAttribute('value'));
*/

// 1:06:26 Нестандартные атрибуты, dataset
/*
Ранее мы уже использовали нестандартные атрибуты,
но по ряду причин это рискованно.

Все атрибуты, начинающиеся с префикса «-data»,
зарезервированы для использования программистами.
Они доступны в свойстве dataset.
*/

// Получаем элемент
//const lessonText = document.querySelector('.lesson__text');

// Получаем data-атрибут
//console.log(lessonText.dataset.size);

// Перезаписываем data-атрибут
//lessonText.dataset.size = "5810";
//console.log(lessonText.dataset.size);
/*
Если бы имя data-атрибута состояло из 2-х и более слов, 
то в JavaScript стоило бы указывать имя в стиле lowerCamelCase.
*/
//data-size-value
//console.log(lessonText.dataset.sizeValue);

// 1:07:00 Полезные свойства
//const link = document.querySelector(".lesson__link");

// Получение тега элемента
//console.log(link.tagName);

// Скрыть/показать элемента
//console.log(link.hidden);
//link.hidden = true;


