// Домашняя работа. Home work. 
// Урок 9. Lesson 9.

// Задача №1
// Верна ли запись?
/*
const userInfo = {
    name: "Вася"
    age: 30
}
*/
//Ответ:
/* 
Не верна. Потому, что после
значений нет запятых.
*/

// Задача №2
// Что будет в консоли?
/*
let userInfo = {
    name: "Вася",
    age: 30,
    "58": 'Значение свойства'
}
console.log(userInfo[58]);
*/
// Ответ:
/* 
В консоль будет выведено
сообщение "Значение свойства"
*/

// Задача №3
// Что будет в консоли?
/*
let userInfo = {
    name: "Вася",
    age: 30
}
let user = userInfo;
user.age = 45; // меняем значение

console.log(userInfo.age);
*/
// Ответ: 45

// Задача №4
// Что будет в консоли?
/*
let userInfo = {
    name: "Вася",
    age: 30,
    showInfo() {
        console.log(`${this.name}`);
    }
}

let user = userInfo;
userInfo = null;
user.showInfo();
*/
// Ответ: Вася
/*
Потому, что вызываемая функция
находится внутри объекта user (бывший userInfo).
*/

// Задача №5
// Что будет в консоли?
/*
let userInfo = {
    name: "Вася",
    age: 30,
}
for (const key in userInfo) {
    const value = userInfo[key];
    console.log(value);
}
*/
// Ответ: Вася 30
/*
Метод for in последовательно выведет
в консоль все значения, находящиеся
внутри объекта userInfo
*/

// Задача №6
// Что будет в консоли?
/*
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
    }
}
for (const key in userInfo.address) {
    console.log (userInfo.address[key]);
}
*/
// Ответ: Uzhhorod
/* 
В консоль будет выведено значение 
свойства city. Свойство city вложено в 
дочерний объект address.
*/

// Задача №7
// Что будет в консоли?
/*
const userInfo = {
    name: "Вася",
    age: 30,
    "likes js": true
};
console.log(userInfo."likes js");
*/
// Ответ: Нет, запись не верна.
/*
Что бы вызвать многословное свойство нужно
заключить его имя (ключ) в дополнительные 
прямые скобки [ ]
*/
// Правильный вариант
/*
const userInfo = {
    name: "Вася",
    age: 30,
    "likes js": false
};
console.log(userInfo["likes js"]);
*/

// Задача №8
/*
1. Создать пустой объект userInfo.
2. Добавить свойство name со значением Вася.
3. Добавить свойство age со значением 30.
4. Изменить значение свойства name на Лена.
5. Удалить свойство name из объекта.
*/

// 1. Создание пустого объекта userInfo:
userInfo = {
}
// вывод значений свойств в консоль
console.log(userInfo);

// 2. Добавление в объект userInfo свойства name со значением Вася:
userInfo = {
  name: "Вася",
}
// вывод значений свойств в консоль
console.log(userInfo);

// 3. Добавление в объект userInfo свойства age со значением 30:
userInfo = {
    name: "Вася",
    age: 30,
  }
// вывод значений свойств в консоль
console.log(userInfo);

// 4. Изменение значения для свойства name
userInfo.name = "Лена";
// вывод значений в консоль с учётом изменений
console.log(userInfo);

// 5. Удаление свойства из name из объекта userInfo
delete userInfo.name;
// вывод объекта (значения внутри) в консоль
console.log(userInfo);
