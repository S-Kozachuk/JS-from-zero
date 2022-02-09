// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
/*
JavaScript является динамически типизированным.
То есть тип данных переменной меняется динамически
в момент присвоения либо смены её значения.
А не в момент объявления.

Что бы поучить (узнать) текущий тип данных
переменной, нужно использовать при 
выводе значения в консоль оператор typeof
*/

//Объявляем переменную
let userName; 
//Выводим в консоль тип переменной
console.log(typeof userName);
//Присваиваем значение для переменной
userName = 'Фрилансер по жизни'; 
//Выводим тип данных через консоль
console.log(typeof userName);
//Присваиваем значение для переменной
userName = 58; 
//Выводим тип данных (число / number)
console.log(typeof userName);

/* 
1:20
Сама по себе переменная не привязана
к определённому типу данных. Тип 
данных для переменной присваивается 
(меняется) вместе со значением.
*/

/* 
1:40
В JavaScript существует 8 отдельных типов данных.
Некоторые из них назывются Примитивные:
Undefined
Null 
Boolean
Number
Biglnt
String
Symbol

8-й тип:
Object
Function - по своей сути, это тот же Object, выведенный в отдельный тип
для простоты определения типа для функции.
*/

//2:09 Undefined - неопределённый тип

let userName; //объявляем переменную
console.log(typeof userName); //получаем тип данных
console.log(userName); //получаем значение переменной

// 2:50 Примеры использования 
// Проверяем,определена ли переменная
/*
if (userName === undefined) {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}
*/
// Либо с помощью оператора typeof
/*
if (typeof userName === 'undefined') {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}
*/
// 3:05 Null 
/* 
Null, также как и Undefined
содержит только одно значение null
*/

// Пример
/*
let userName = null;
console.log(userName);
*/

// 3:40
// Пример
// Попытка обратиться к объекту, которого нет
/*
let block = document.querySelector('.block');
// Получаем null
console.log(block);
// Вернет тип object
console.log(typeof block);
*/

// 4:12 Boolean 
/* Boolean - это Булевый или логический тип.
Может принимать только два значения:
true (истина) и false (ложь).
*/

// Пример
/*
let willYouMarryMe = false;
if (willYouMarryMe) {
    console.log(':)');
} else {
    console.log(':(');
}
*/

// Также тип Boolean можно 
// использовать с операторами
// сравнения
/*
let trueOrFalse = 58 > 18;
console.log(trueOrFalse);
*/

// 4:57 Number (число)
/* Number - числовой тип данных 
представляет значения как в виде
целых чисел, так и в виде чисел 
с плавающей точкой.
*/
/*
let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);
*/

// 5:18 Значение Infinity
// Infinity - математическая бесконечность, значение которой больше любого числа.
/*
let getInfinity = 58/0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/

// -Infinity - отрицательное значение
/*
let getInfinity = -58/0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/

// 5:42 Значение NaN
/*
let getNan = 'Фрилансер' / 10;
console.log(getNan);
console.log(typeof getNan);
*/
/*
Если в математическои выражении
присутствует NaN, то результатом
вычислений с его участием
будет NaN.
*/

// 6:14 BigInt
/* 
В JavaScript тип данных "number
не может содержать числа бльше, 9007199254740991,
или меньше, чем 9007199254740991.
Позволяет работать с целыми числами 
прозвольной длины.
*/
/*
const bigInteger = 12345678901234567890123456789n;
console.log(typeof bigInteger);
*/

// 7:10 String (строка)
/*
let userName = "Фрилансер по жизни";
console.log(typeof userName);

let userNameV2 = "Фрилансер по жизни";
console.log(typeof userNameV2);
let userNameV3 = "Фрилансер по жизни";
console.log(typeof userNameV3);

let userAge = 36;
let userAgeInfo = `Возраст: ${userAge}` ;
console.log(userAgeInfo);
*/

// 7:54 Object
/*
let userInfo = {
    name: "Фрилансер по жизни",
    age: 36
}
console.log(userInfo);
console.log(typeof userInfo);
*/

// 8:33 Symbol
/*
let id = Symbol("id");
console.log(typeof id);
*/

// 8:45 Function
/*
let funcVariable = function name(params) {
    // код функции
}
console.log(typeof funcVariable);
*/

// 9:06 Преобразование типов
/*
let userAge = 58;
console.log(userAge);
console.log(typeof userAge);

userAge = String(userAge);

console.log(userAge);
console.log(typeof userAge);
*/

// 9:36 
/*
let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);

console.log(userTrue);
console.log(typeof userTrue);
*/
// Численное преобразование
/*
let userAge = "58";
console.log(userAge);
console.log(typeof userAge);

userAge = Number(userAge);

console.log(userAge);
console.log(typeof userAge);
*/

// 10:13 
/*
let userAge = "Фрилансер";
userAge = Number (userAge);

console.log(userAge);
console.log(typeof userAge);
*/

// 10:22 Автоматическое преобразование без 
//использования специальной функции.
/*
let userAge = "72" / "2";
console.log(userAge);
console.log(typeof userAge);
*/

// 10:37 Логическое преобразование
/*
let userAge = " ";
console.log(userAge);
console.log(typeof userAge);

userAge = Boolean(userAge);

console.log(userAge);
console.log(typeof userAge);
*/

// 11:24 Домашнее задание
/* 
1. Изучить теорию (при необходимости пересмотреть урок)
2. Какой или какие из вариантов не верны:
*/

// Вариант №1
//let userAge = 36;
//let userInfo = "Фрилансер ${userAge}";

//Вариант №2
//let userHeight = 145/0;
// Вернётся значение NaN 
//console.log(userHeight);

//Вариант №3
// let userName;
// Вернётся тип данных Null
// console.log(typeof userName);

//Вариант №4
//let userSize = "45" /+"8";
// Вернётся тип данных Number
//console.log(typeof userSize);