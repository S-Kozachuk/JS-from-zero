/*
В JS существует 2 вида чисел: 
- обычные числа в 64 — битном формате
- bigInt - числа, позволяющие работать 
с целыми числами произвольной длинны.

В данном уроке речь пойдёт об обычных числах
типа number и их применении.
*/

// Запись простых чисел в JS
// Числа 
//let someNum = 458;
//console.log(someNum);

// Десятичные числа
// Обязательно записывать через точку .
//let someNums = 4.58;
//console.log(someNum);

// Числа с большим количесвом  0
// Стандартная запись
/*
let someBigNum = 1000000;
console.log(someBigNum);

let someLittleNum = 0.000001;
console.log(someLittleNum);
*/

// Сокращённая запись
/* 
Если число состоит из множества 0,
в которых легко запутаться можно
использовать сокращённую запись.
*/
/*
let someBigNum = 1e6; // 1*1000000;
console.log(someBigNum);

let someLittleNum = 1e-6 // 1 / 1000000;
console.log(someLittleNum);
*/

// 1:40 Шестнадцатиричные, двоичные и восьмиричные числа
/* 
Шестнадцатиричные числа широко используются
в JavaScript для представления цветов, 
кодировки символов других операций.
*/

//console.log(0xFF); // 0xff = 255;

/* 
0х - указывает на использование
шестнадцатиричной системы
ff - кодировка 
Регистр не имеет значения
*/

/* 
Реже используются двоичные и 
восьмиричные числа.
*/

// Двоичная кодировка числа 255
// console.log (0b11111111);
// Восьмиричная кодировка числа 255
// console.log (0o377);

// 2:40 Метод toString(base)
/* 
Возвращает строковое представление
числа в той или иной системе. 
base может принимать значения 
от 2 до 36 (по умолчанию 10)
*/
/*
Пример перекодирования числа 255
в другие системы исчисления.
*/

// let num = 255;
// шестнадцатиричная
// console.log(num.toString(16));
// восьмиричная
// console.log(num.toString(8));
// двоичная
// console.log(num.toString(2));

// 3:05 Округление чисел
/*
В JavaScript встроен объект Math,
который содержит несколько функций
для работы с округлением:
*/

// Math.floor - округление в меньшую сторону
/*
let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

// Math.ceil - округление в большую сторону
/*
let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

// 4:00 Math.round - округление до ближайщего целого
/*
let numOne = Math.round(5.8);
let numTwo = Math.round(2.2);
let numThree = Math.round(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

// 4:10 Оругление до 10-ой или 100-ой доли
/* 
Все вышеперечисленные функции округляют
до целого числа.
Каким образом можно округлить число 
с 10-ой (например до 5.8)
или 100-ой (например до 5.85) частью?
*/

// 4:25 1-й способ. Умножение и деление.
/*
let numOne = Math.round(5.845 * 10) / 10;
// 58.45 > 58 > 5.8
console.log(numOne);

let numTwo = Math.round(5.845 * 100) / 100;
// 584.5 > 585 > 5.85
console.log(numTwo);

let numThree = Math.round(5.8449 * 100) / 100;
// 584.49 > 584 > 5.84
console.log(numThree);
*/

// 5:20 Метод toFixed(n)
/* 
Округляет числа до n знаков после запятой
и возвращает строковое представление
результата.
*/
/*
let numOne = 5.845;
console.log(numOne.toFixed(1));
*/
/*
В скобках, после названия метода 
указывается желаемое количество 
цифр после запятой.
В результате получается строчное
значение.
*/

/* 
Для преобразования строки в число
можно использовать унарный
оператор сложения или спец.
функцию number
*/
/*
console.log (+numOne.toFixed(1));
console.log (Number(numOne.toFixed(1)));
*/

// 6:05 Проблема неточных вычислений
/*
let numOne = Math.round(1.005 * 100) / 100; // Ожидаем 1.01
console.log(numOne);

let numTwo = 12.35;
console.log(numTwo.toFixed(1)); // Ожидаем 12.4

let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);
*/

// 7:52 Решение проблемы с помощью Number.EPSILON
/* 
Number.EPSILON - это очень маленькое число. 
Прибавляя его к исходному, получается компенсация
неточности в вычислении.
*/
/*
let sourceNum = 1.005 +Number.EPSILON ;
let numFour = Math.round (sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));
*/

// 9:30 Специальные числовые значения
/*
В JavaScript существуют специальные числовые
значения. Такие как infinity - бесконечность
и NaN - ошибка вычисления.
Данные значения относятся к типу данных number,
но не являются обычными числами.
Для проверки таких значений применяются
специальные функции.
*/

// Проверка isNaN
/*
Функция number вернёт значение NaN 
(ошибка в вычислении). 
Это происходит потому, что нельзя 
складывать между собой число
и строчное значение.
*/
//console.log(Number(25 + "Привет!"));

/*
Функция isNan проверяет вернёт ли 
выполняемое выражение значение NaN или нет.
В данном примере функция вернёт значение true, т.к. 
это действительно ошибка в вычислении 
(само тело функции вернёт NaN).
Если бы в теле функции происходило сложение
двух чисел, то функция isNaN вернула бы
значение false. Потому, что такой результат
уже не был бы ошибкой вычисления (NaN).
*/
//console.log(isNaN(25 + "Привет!"));


// 10:30 Проверка с помощью операторов
/*
Резонный вопрос: зачем использовать
специальную функцию проверки, если
можно применить операторы 
строгого сравнения, либо строгого 
неравенства?
*/
/*
if (25 + "Привет!" !== NaN){
    console.log("Я не NaN");
}
*/
/*
Описание функции: если выражение
25 + "Привет!" неравно NaN, то
в консоль выводится сообщение:
"Я не NaN".
Проблема этой функции в том, что 
в действительности выражение 
25 + "Привет!" равно (возвращает) NaN.
Но это не верно.

Почему же так происходит?
Причина в том, что NaN это 
уникальное значение. NaN никогда
не будет равен NaN. В таком
случае вернётся значение false
*/
//console.log (NaN === NaN);

// 11:05 Проверка isFinite
/*
Преобразует аргумент в число 
и возвращает true, если это 
обычное число.
*/

// Примеры
/*
console.log(isFinite("25"));// "25" > 25 > true
console.log(isFinite("Привет")); // NaN > false
console.log(isFinite("10 / 0")); // infinity > false
*/

// 11:50 parseImt и parseFloat
/*
Преобразование строки в число происходит
с помощью унарного оператора сложения,
либо через функцию Number
*/
/*
let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);
*/
/*
Часто нужно преобразовывать
значения с единицами 
измерения, например рx
*/
/*
let valueTwo = +"150px";
console.log(valueTwo); // вернёт NaN вместо значения
console.log(typeof valueTwo); // тип данных number
*/
/*
По итогу число 150 в консоли
так и не появиться
*/

/*
12:30
Для получения чисел из подобных строк
существуют функции parseInt и parseFloat.
Если в процессе чтения возникает ошибка,
они возвращают полученное до ошибки число.

Функция parseInt возвращает целое число,
а parseFloat возвращает число с плавающей
точкой.
*/
/*
let valueOne = parseInt("150.58px");
console.log(valueOne);
console.log(typeof valueOne);

let valueTwo = parseFloat("150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);
*/

/*
13:18
Если первым символом строки будет буква,
то функция вернёт значение NaN. Потому,
что извлечь число из подобной строки
не получиться.
*/
/*
let valueTwo = parseFloat("a150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);
*/

// 13:30 2-ой параметр функции parseInt
/* 
Он (2-ой параметр) определяет систему
счисленения, поэтому parseInt может
читать строки с шестнадцатиричными
числами, двоичными числами и т.д.
*/
/*
console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16)); // 0x можно не писать
*/

// 13:55 Другие возможности. Объект Math.
/* 
Объект Math содержит различные 
математические функции и константы.
Вот некоторые из них:
- math.random()
- возвращает псевдослучайное число 
в диапозоне от 0 (включительно)
до 1 (но не включая 1)
*/
/*
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
*/

// 14:20 Math.max и Math.min
/*
Возвращают наименьшее и наибольшее
число из перечисленных
аргументов
*/
/*
console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));
*/

// 14:40 Math.abs
/*
Возвращает абсолютное значение
(модуль) числа.
*/
/*
let num = -58;
console.log(Math.abs(num));
*/

// 14:50 Math.pow(n, power)
/*
Возвращает число n, возведённое
в степень power
*/
// 5 в 8-ой степени
//console.log(Math.pow(5, 8));