// Объявление функции (function declaration)
/*
functiom имя(параметры) {
    // тело (код) функции 
}
*/

// 0:55 Имена функции
/* Как правило, в имени функции используются 
определённые префиксы (show, get, calc) обозначающие действие,
после которых следует объект действия.

Например, функции, начинающиеся с префиксов:
"show..." - обычно что-то показывают,
"get..." - возвращают значение,
"calc..." - что-то вычисляют,
"create..." - что-то создают,
"check..." - что-то проверяют и возвращают
логическое значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/

// Функция вывода сообщения
/*
function showMessage() {
    console.log('Сообщение');
}
*/

/*
function showDer() {
    console.log('Игра')
}
showDer();
*/

// 1:50 Запуск функции.
/* 
Для выполнения кода
внутри функции её нужно вызывать
т.е. запустить
*/
/*
showMessage(); 
*/

/* Вызов функции можно делать до 
и после её объявления.
Функция будет выполняться
при каждом вызове. Одно из предназначений
функций - исключение дублирования кода.
Например, изменения достаточно вынести
в теле функции и это сразу же отразиться
во всех точках её вызова.
*/
// Второй вызов (запуск) функции
//showMessage(); 

// 2:50 Вложенность и видимость функции
/* Функцию можно вкладывать в другую функцию.
Запускать её там.
*/
/*
function getSumm() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 1;
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();
    
    let numSumm = numOne + numTwo;
    console.log(numSumm);
}

getSumm();
*/

/* 
Попытка вызвать дочернюю (вложенную)
функцию за пределами родительской 
вызовет ошибку.
*/
/*
getNumOne(); // Вызов дочерней функции

getSumm(); // Вызов родительской функции
*/

// 3:12 Вызов функции в строгом режиме
/* В строгом режиме (use strict), если 
функция объявлена внутри блока (например if),
то за его пределами вызвать функцию не получиться.
*/
/*
"use strict"
if (2 > 1) {
    function getSumm() {
        let numOne, numTwo;

        function getNumOne() {
            numOne = 1;
        }
        function getNumTwo() {
            numTwo = 2;
        }
        getNumOne();
        getNumTwo();
    
        let numSumm = numOne + numTwo;
        console.log(numSumm);
    }
}
getSumm();
*/

// 3:15 Локальные и внешние переменные
// Локальная переменная
/* 
Если объявить переменную внутри функции,
то за её пределами она не будет видна.
Попытка взаимодействия с ней вызовет ошибку.
Такая переменная называется локальной.
*/
/*
function showMessage () {
    // Локальная переменная
    let message = "Сообщение";
    console.log(message);
}

console.log(message);
*/

// Внешняя переменная
/* Если переменная объявлена за пределами
функции то она будет видна внутри функции
и за её пределами.
Такая переменная называется внешней.
*/
/*
let message; // переменная объявлена без значенмя

function showMessage() {
    // Используется внешняя переменная
    message = "Сообщение";
    // переменной присваивается значение
}
showMessage();
console.log(message);
*/
/* Внешние переменные удобны при 
использовании за пределами функции.
Одновременно, функции наполняют их значениями.
*/

/*
Если вывести переменную в консоль
до выполнения функции, то 
функция вернёт значение undefined
*/
/*
let message; // переменная объявлена без значенмя

function showMessage() {
    // Используется внешняя переменная
    message = "Сообщение";
    // переменной присваивается значение
}

console.log(message); // вывод в консоль
showMessage(); // выполнение функции
*/

/*
4:28 Одновременное объявление локальной и 
внешней переменной.
Если объявить локальную и внешнюю
переменную с одним именнем, то при 
выводе это будут две разные
переменные, не связанные друг с другом.
*/
/*
let message = "Сообщение №1"; // Внешняя переменная 
function showMessage() {
    // Локальная переменная 
    let message = "Сообщение №2";
    console.log(message);
}
showMessage();
console.log(message);
*/

// 4:35 Глобальные переменные
/*
Внешние переменные, объявленные за
пределами всех функций называются
глобальными. Их видно внутри каждой
вложенной (дочерней) функции и 
за их пределами.
*/
/*
let globalVar = "Я глобальная переменная";

function getSumm() {
    let numOne, numTwo;
    
    function getNumOne() {
        numOne = 1;
        console.log(globalVar);
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();
    
    let numSumm = numOne + numTwo;
    console.log(globalVar);
    
    console.log(numSumm)
}

console.log(globalVar);

getSumm();
*/
/* 
В современном коде стараются свести
к минимому использование глобальных
функций. Однако они могут быть очень
полезны для хранения общей
информации для всей программы.
*/

// 5:02 Параметры (аргументы)
/* 
Работа функции зависит от передаваемых
параметров.
Параметры функции можно передать в
момент её вызова
*/
/*
function calcSumm(numOne = 1, numTwo = 5) { //  переменные по умолчанию
    console.log(`Переменная numOne: ${numOne}`);
    console.log(`Переменная numTwo: ${numTwo}`);
    
    let numSumm = numOne + numTwo;
    
    console.log(`Сумма: ${numSumm}`);
}

// Вызов функции с передачей параметров
calcSumm(1, 3);
*/
/*
Если при вызове функции не указаны параметры,
будут применены значения по умолчанию.
*/

// 5:35 Функции-колбэки
/*
В качестве передаваемых параметров также как 
и значений по умолчанию могут использоваться
другие функции.
*/
/*
function calcSumm (numOne, numTwo, more, less) {
    let numSumm = numOne + numTwo;
    
    if (numSumm > 3) {
        more();
    } else {
        less();
    }
}

function showMoreMessage() {
    console.log('Больше, чем 3')
}

function showLessMessage() {
    console.log('Меньше, чем 3')
}
calcSumm(1, 5, showMoreMessage, showLessMessage);
*/ 

// 7:23 Возврат результата
/*
function calcSumm(numOne, numTwo) {
    let numSumm = numOne + numTwo;
    return numSumm;
}
*/

/*
  Директиву return можно указывать в
  любом месте тела функции, без
  значений. Применяется, когда
  нужно прекратить работу функции.
  Далее код не выполняется. 
  Важно! Дирекххууххх
*/

// Присвоение переменной функции с параметрами
/*
let funcRezult = calcSumm(1, 2)
console.log(`Сумма: ${funcRezult }`);
*/

// 8:25 Рекурсия
/*
Рекурсия - частный случай, при котором функция
вызывает саму себя.
*/
/*
function getSumm(numOne, numTwo) {
    let numSumm = calcSumm(numOne, numTwo);
    
    console.log(numSumm);
}
function calcSumm(numOne, numTwo) {
    return numOne + numTwo;
}
getSumm(5, 22)
*/

// Пример 2
/*
function calcSumm(numOne, numTwo) {
    let result = 1;
    // умножаем result на numOne numTwo раз в цикле
    for (let i = 0; i < numTwo; i++) {
        result *= numOne;
    }
    return result; // Возвращение результата
}
console.log(calcSumm(5, 3)); 
*/
// то же, но с помощью рекурсии
/*
function calcSumm(numOne, numTwo) {
    if (numTwo  === 1) {
        return numOne;
    } else {
        return numOne * calcSumm (numOne, numTwo - 1) 
    }
    
}
console.log(calcSumm(5, 3));
*
/*
Количество вложенных функций называется глубиной рекурсии.
Именно рекурсивный метод позволяет решать 
множество задач наиболее компактным кодом, который легче
поддерживать.
*/

//9:30 Функциональное выражение (function expression)
/* Объявляем переменную и присваиваем
ей функцию без имени*/
/*
let showMessage = function () {
    console.log('Привет')
};

showMessage(); // Вызов функции
*/
/* 10:05 Копирование ранее объявленной функции
в переменную с помощью function declaration
*/
/*
function getSumm() {
      let summ = 2 + 1
      console.log(summ);
};

let someVar = getSumm; // копирование функции (функция не выполняется, нет ())

someVar(); // вызов через переменную
getSumm(); // вызов функции напрямую
*/

/* 10:25 Принципиальное отличие между
объявлением функции (function declaration) и
функциональным выражением (function expression).
*/

//getSumm();

// Объявление функции (function declaration)
/*
function getSumm() {
    let summ = 1 + 2;
    console.log(summ);
};
*/

/* 
При объвлении функции её можно вызвать из
любого места программы 
(до объявления функции, или после объявления).
*/

// Функциональное выражение (function expression)
/*
let showMessage = function () {
    console.log('Привет');
};

showMessage();
*/
/*
При построении функционального выражения
вызов функции возможен только после его
создания.
*/

// 11:04 Объявление функции внутри блока
/*
Стандартная проблема: функция, объявленная 
внутри некого блока абсолютно не видна за
его пределами.
*/
// Пример функции внутри блока
/* 
Наиболее частым способом создания
функции является объявлении функции
(function declaration).
В этом случае появиться ошибка, потому,
что переменную не видно за пределами
блока.
*/
/*
'use strict'
if (2 > 1) {
    function getSumm() {
        let sum = 1 + 2;
        console.log(summ);
    };
}

getSumm();
*/

/* 
Пример. Объявление переменной
за пределами блока. Используя 
функциональное выражение можно 
решить эту проблему.
Нужно объявить переменную вне блока.
*/
/*
let getSumm;

if (6 > 5) {
    getSumm = function () {
        let summ = 1 + 2;
        console.log(summ);
    };
}

getSumm();
*/
/* 
Переменную, объявленную за пределами блока
с присвоенной функцией, можно вызвать
из любого места программы.
*/

// 11:25 Функция стрелки (arrow functions)
/*
Основное отличие в сокращённой записи. Отсутствует слово
function перед перечислением параметров. Далее вместо
фигурных скобок указывается "стрелка" => Затем идёт
тело функции.

// Функциональное выражение (function expression)
/*
let имя переменной = function (параметр, ... параметр) {
    return выражение;
};
*/
// Стрелочная функция (arrow function)
/*
let имя переменной = (параметр, ... параметр) => выражение
*/

// 12:05 Пример стрелочной функции
/*
let getMessage = (text, name) => text + ', ' + name + '!';

console.log(getMessage('Привет', 'Вася'));
*/

// 12:35 Многострочная стрелочная функция
/*
При создании многострочной стрелочной функции
необходимо использовать фигурные скобки для
размещения тела функции. Также обязательно
применять директиву return (возвращает значение).
*/
/*
let getMessage = (text, name ) => {
    let message = text + ', ' + name + '!';
    return message;
};
console.log(getMessage('Привет','Вася'));
*/

// 13:00 Планирование вызова функции
/*
Что бы реализовать планирование существуют два метода:
1. setTimeout позволяет вызвать функцию один раз
через определённый интервал времени.
2. setImterval позволяет вызывать функцию регулярно,
повторяя вызов через определённый интервал времени.
*/
// Синтаксис
/*
setTimeout(функция или код, задержка, параметр, ...параметр);
setInterval(функция или код, задержка, параметр, ...параметр);
*/
// Пример
/*
Простая функция, выводящая сообщение в консоль.
Задача: вывести значение не сразу, а с залержкой.
*/
/*
function showMessage(text, name) {
    console.log(`${text}, ${name}!`);
}
*/

// Вызов функции с задержкой
// setTimeout(showMessage, 3000, `Привет`, `Вася`);
// Вызов функции с интервалом
// setInterval(showMessage, 500, `Привет`, `Вася`);

/* 14:15 Данные методы планирования не обеспечивают
точную задержку
*/

// Более точный вариант задержки с применением рекурсивной фунции.
/*
function showMessage(text, name) {
    console.log(`${text}, ${name}!`);
    setTimeout(showMessage, 500, text, name); 
    // ^ функция вызывает саму себя
}

setTimeout(showMessage, 500, `Привет`, `Вася`);
*/

// Вывод увеличивающегося числа с задержкой
/*
function showNumber(num) {
    console.log(num);
    if (num<5){
        setTimeout(showNumber, 1000, ++num);
    }
}
setTimeout (showNumber, 1000, 1);
*/

// 15:30 Отмена действия функции setTimeout
/*
clearTimeout останавливает работу setTimeout,
объявленного раннее. Для того что бы всё сработало
нужно присвоить setTimeout какой—то переменной.
*/
/*
function showNumber(num) {
    console.log(num);
    let timeId = setTimeout(showNumber, 1000, ++num);
    if (num === 6){
        clearTimeout(timeId);
    }
}
setTimeout (showNumber, 1000, -2)
*/

// 16:10 Отмена действия функции setInterval
/* 
Принцип отмены, такой же,
как и для функции setTimeout.
*/
/*
let result = 0;
function showNumber(num) {
    result += num;
    console.log(result);
    if (result === 5) {
        clearInterval(timeId);
    }
}
let timeId = setInterval(showNumber, 1000, 1);
*/

// 16:30 Применение функций.
/*
Нужно стремиться к использованию
простых, коротких функций, выполняющих
только одно действие.
*/
// Функция соединения строк
 
function createMessage(text, name) {
    return `${text}, ${name}!`;
}

// Функция вывода в консоль

function showMessage(message) {
    console.log(message);
}

// Объединяющая функция

function initMessage(text, name){
    showMessage (createMessage(text, name));
}


initMessage('Привет', 'Фрилансер');

