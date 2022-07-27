// Lesson 16. JavaScript & forms. Properties, events, methods.

// 0:11 Form properties and methods.

// 0:20 All form collection on page. 
//document.forms

// Getting all forms collection on page.
// console.log(document.forms);

// 0:38 Getting a form on page.
/*
Is couple methods.
Way 1.
Поскольку метод document.forms является коллекцией (по сути массивом),
можно указать ключ внутри квадратных скобок. Ключ = порядковому номеру
опредерлённой формы. Нумерация начинается с нуля [0].
При наличии нескольких и более форм, используя перебор ключей можно
обратиться к определённой форме.
*/
/*
const mainForm = document.forms[0];
console.log(mainForm);
*/

// 1:20 Way 2.
/*
Данный способ удобнее предыдущего. Но требует
манипуляций в html-коде. Для тега форм нужно указать атрибут 
name и присвоить ему некое значение. 
Например main: <form name="main"...
Теперь в JS-коде можно получить конкретную форму по этому
имени (main).
*/
/*
const mainForm = document.forms.main;
console.log(mainForm);
*/

// 1:52 Difference between document.forms and document.querySelectorAll('form')
/*
Ещё один хорошо известный способ получения списка всех форм на странице.
Это метод querySelectorAll('form'). В качестве селектора указан тег form.
Оба этих метода представляют собой коллекцию.
Принципиальная разница в типе коллекций. 
querySelectorAll создаёт обычную коллекцию. А document.form это живая коллекция.
*/

// 2:30 Example

// Simple collection
console.log(document.querySelectorAll('form'));
// Live collection
console.log(document.forms);

// Добавление новой формы на страницу
/*
document.body.insertAdjacentHTML(
    "beforeend",
    `<form name="some" class="some-form" action="#"></form>`
);
*/
// 2:56 Результат
/*
document.forms в отличии от querySelectorAll вернёт две формы
(1+1 добавленная) т.к. коллекция - живая.
Именно поэтому стоит использовать метод document.forms
*/

// 3:05 Элементы форм 
// documents.forms.elements

/*
Получения списка всех элементов некой конкретной формы.
При выводе константы в консоль, после точки
добавляется слово elements.
В результате при выводе в консоль будет
получен список всех элементов, которые расположены
внутри данной формы.
*/
/*
const mainForm = document.forms.main;
console.log(mainForm.elements)
*/

// 3:30 Получение элемента с определённым именем
// Пример получение элемента с именем nameInput
//const mainFormInput = mainForm.elements.nameInput;
/*
Данную запись можно упростить, убрав ключевое слово elements 
и обратившись напрямую к значению (nameInput) атрибута name=""
*/
/*
const mainFormInput = mainForm.nameInput;
console.log(mainFormInput);
*/

// 4:40 Получение коллекции радиокнопок (с именем nameRadio)
//const mainFormRadioButtons = mainForm.nameRadio;
// или расширенный вариант записи: mainForm.еlements.nameRadio;
//console.log(mainFormRadioButtons);
/*
Далее, тем или иным способом (см. 0:38) можно обращаться к конкретному
элементу из коллекции.
*/

// 5:05 Обратная ссылка element.form 
/*
Работая с любым элементом формы можно легко и быстро
получить объект родительской формы этого элемента.
Для этого нужно обратиться к элементу формы, например mainFormInput,
который был получен раннее (см. 3:03).
Затем поставить .  и написать ключевое слово form.
При воводе значения в консоль будет получен объект родительской формы элемента.
*/
//console.log(mainFormInput.form)

// 5:30 Работа с input и textarea
/*
Значения таких элементов можно получить через свойство
input.value(строка) или input.checked (boolean) для 
чекбоксов и радиокнопок.
*/
/*
const mainForm = document.forms.main;

const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;
*/

// 6:00 Получение зачений из Input и textarea
// Получение значение (содержимое) поля:
//console.log(mainFormInput.value);
// Получить значение (содержимое) текстового поля:
//console.log(mainFormTextarea.value);


// 7:05 Заполнение/изменение значения поля средствами JS.
// Присовоение значения (содержимое) поля. Перезаписывает значение placeholder
//mainFormInput.value = "До свидания";
// Присвоение значения текстового поля (перезапись)
//mainFormTextarea.value = "До встречи"

// 7:30 Работа с другими типами тега input: radio, checkbox и file.
/*
const mainForm = document.forms.main;

const mainFormRadioBtn = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;
*/
