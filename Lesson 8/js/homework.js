// Домашняя работа. Home work. 
// Урок 8. Lesson 8.

// Задача №1. 
// Кто попадёт в консоль первым, Вася или Коля?
/*
function showName() {
    console.log('Вася!')
}
setTimeout(showName,0);
console.log('Коля!');
*/
/* 
Ответ: Коля. Потому, что к этому значению 
применена функция setTimeout (задержка).
*/

// Задача №2.
// Верно ли вызвана функция?
/*
showMessage();
function showMessage() {
    console.log('Сообщение');
}
*/
// Ответ: да, верно. Соответствует базовому синтаксису.

// Задача №3.
// Верно ли вызвана функция
/*
showMessage();
let showMessage = function () {
    console.log('Сообщение');
}
*/
/*
Ответ: нет, потому что это функциональное выражение.
Сначала нужно создать функция и присвоить ей
переменную. Затем вызвать.

Как правильно:
*/
/*
let showMessage = function () {
    console.log('Сообщение');
}
showMessage();
*/
// Присвоить функции имя, вызвать её.

// Задача №4
// Как решить проблему?
/*
'use strict'
if (2 > 1) {
    function showMessage() {
        console.log ('Сообщение');
    }
}
showMessage(); // Error (show Message is not defined)
*/
/* 
В примере применён строгий режим. 
В этом случае, функция, объявленная внутри блока
if не может быть вызвана за его(блока) пределами.

Решение: переместить команду 
вызова showMessage() функции внутрь 
блока.
*/
/*
'use strict'
if (2 > 1) {
    function showMessage() {
        console.log ('Сообщение');
    }
    showMessage();
}
*/