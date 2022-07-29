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
// console.log(document.querySelectorAll('form'));
// Live collection
// console.log(document.forms);

// Added the new form on page (test live and simple collections)
/*
document.body.insertAdjacentHTML(
    "beforeend",
    `<form name="some" class="some-form" action="#"></form>`
);
*/
// 2:56 Output result
/*
document.forms в отличии от querySelectorAll вернёт две формы
(1+1 добавленная) т.к. коллекция - живая.
Именно поэтому стоит использовать метод document.forms
*/

// 3:05 Forms elements 
// documents.forms.elements

/*
Получения списка всех элементов некой конкретной формы.
При выводе константы в консоль, после точки добавляется слово elements.
В результате при выводе в консоль будет
получен список всех элементов, которые расположены внутри данной формы.
*/
/*
const mainForm = document.forms.main;
console.log(mainForm.elements)
*/

// 3:30 Getting an element with specific name
// Example: gettig element with nameInput
//const mainFormInput = mainForm.elements.nameInput;
/*
Данную запись можно упростить, убрав ключевое слово elements 
и обратившись напрямую к значению (nameInput) атрибута name=""
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
console.log(mainFormInput);
*/

// 4:40 Getting the radio buttons collection (with name nameRadio)
/*
const mainForm = document.forms.main;
const mainFormRadioButtons = mainForm.nameRadio;
*/
// or advanced record variant: mainForm.еlements.nameRadio;
// console.log(mainFormRadioButtons);

// Next, refer to a specific element from collection in one way or another (see 0:38) 
/*
const secondRadioBtn = mainForm.nameRadio[1];
console.log(secondRadioBtn);
*/

// 5:05 Backlink element.form 
/*
Работая с любым элементом формы можно легко и быстро
получить объект родительской формы этого элемента. Обратная операция (подъём к родителю).
Для этого нужно обратиться к элементу формы, например mainFormInput.
Затем поставить .  и написать ключевое слово form.
При воводе значения в консоль будет получен объект родительской формы элемента.
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
console.log(mainFormInput.form)
*/

// 5:30 Work with input and textarea
/*
Значения таких элементов можно получить через свойство
input.value(string) или input.checked (boolean) для 
чекбоксов и радиокнопок.
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;
const mainFormRadio = mainForm.nameRadio;
*/

// 6:00 Getting value from Input и textarea
// Получение значение (содержимое) поля:
// console.log(mainFormInput.value);
// Получить значение (содержимое) текстового поля:
// console.log(mainFormTextarea.value);
// console.log(mainFormRadio.value);


// 7:05 Filling/changing field values by means of JS.
// Assign a value (content) field. Overwriting the value of placeholder attribute.
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;
mainFormInput.value = "Good buy!";
mainFormTextarea.value = "See you"
*/

// 7:30 Work with other type of input tag: radio, checkbox и file.
/*
const mainForm = document.forms.main;
const mainFormRadioBtn = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;
*/
// Getting value of field type radio
/*
console.log(mainFormRadioBtn[0].value);
console.log(mainFormRadioBtn[1].value);
console.log(mainFormRadioBtn[0].checked);
console.log(mainFormRadioBtn[1].checked);
*/

// 9:00 Getting value of field type checkbox
// console.log(mainFormCheckBox.value);
// console.log(mainFormCheckBox.checked);

// 9:25 Getting value of field type file
// console.log(mainFormFile.value);

// 9:40 Assign value for field type radio
/*
mainFormRadioBtn[0].value = 'left';
mainFormRadioBtn[1].value = 'right';
mainFormRadioBtn[1].checked = true;

console.log(mainFormRadioBtn[0].value);
console.log(mainFormRadioBtn[1].value);
*/

// 10:10 Assign value of field type checkbox
/*
mainFormCheckBox.value = 'save';
mainFormCheckBox.checked = true;

console.log(mainFormCheckBox.value);
*/

// 10:20 Assign value of field type file (only empty string)
// mainFormFile.value = '';

// 10:35 Work with element select and option
/*
Elem select have a three important properties:
select.options - collection of pseudo-elements <option>,
select.value - the value of the currently selected <option> element,
select.selectedIndex - number of current <option> element.

They give a three different ways set the value of elem <select>:
- search the appropriate element <option> and set in option.selected
value true,
- set to select.value the value of the desired <option>,
- set to select.selectedIndex number of desired <option>.

The 1-st method is the most undersandable, but 2-nd & 3-rd ways
are more comfortable in work.
*/
/*
const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

// Getting the all options
console.log(mainFormSelect.options);

// Get the index of the selected "option" element
const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);

// Get the value of the selected "option" element
const mainFormSelectValue = mainFormSelect.value;
// console.log(mainFormSelectValue);

// Get the text of the selected "option" element
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);
*/

// 12:52 Elements <options>
/*
Elements <option> have the next properties:
option.selected - Is the option selected,
option.index - Option number between oher in the <select> list,
option.text - Option content (what the user sees)
*/

//  Choose some <option>
// mainFormSelect.options[2].selected = true;
// mainFormSelect.selectedIndex = 2;
// mainFormSelect.value = 2;

// 13:55 Added the new option (new Option)
// option = new Option (text, value, defaultSelected, selected);
/*
Parameters:
text - text inside <option>,
value - meaning,
defaultSelected - if true, add HTML-attribute "selected",
selected - if true, <option> element will selected

There may be confusion here with defaultSelected & selected.
All simple: defaultSelected asign HTML- attribute.
His get as option.getAttribute('selected'),
selected - defines selected value or no. It is 
important to correctly set.
Usually both this properties have a true value
*/

// 14:45 Example
/*
const mainForm = document.main;
const mainFormSelect = mainForm.nameSelect;
let newOption = new Option('120', '4', true, true);
mainFormSelect.append(newOption);
*/

// 15:25 Multi select
/*
const mainForm = document.main;
const mainFormSelect = mainForm.nameSelect;
console.log(mainFormSelect)
*/
// Getting all the selected values from <select> with "multiple"
/*
let selectedOptions = Array.from(mainFormSelect.options)
	.filter(option => option.selected)
	.map(option => option.value);
console.log(selectedOptions);
*/

// 16:15 Events of forms ot their elements
// Focusing focus and blur 
/*
Element getting the focus, when user clicking of this or use 
Tab key.
Also exist a HTML-attribute "autofocus", which set focus on
element, when page is loading. There are other ways to get focus.

Usually focusing means:
"get ready to enter data on this element", this is a
good moment to initialization or loading something.

Moment for focus losing (blur) - it's moment, when user clicking
somewhere more or pushing Tab, to toggle for next form field.
There are other reasons to losing focus.

In moment of event "losing focus" we can make a checking of 
entries data or sending this datas on server etc.
*/
