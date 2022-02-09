// Домашняя работа.

// Задача №1. Верна ли запись?
/*
let fls = "фрилансер";
let text = 'Привет! Я ${fls}';
// Ожидаемое сообщение: Привет! Я фрилансер
console.log(text);
*/
/*
Ответ: нет, не верна.
Как правильно: при подстановке
в выражение первой переменной 
нужно использовать обратные кавычки
*/
/*
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
// Ожидаемое сообщение: Привет! Я фрилансер
console.log(text);
*/

// Задача №2. Получить символ "н" из строки:
//let text = 'фрилансер';
// Ответ:
/*
let textSymbol = text[5];
console.log(textSymbol);
*/

// Задача №3. 
// Верно ли выражение?
// let text = 123 + "456";
// Ожидаемый результат 579
// console.log(text);

// Ответ: нет, не верно.
/*
В предложенном варианте происходит 
сложение числа и строки. 
В результате получается строка.
Для сложения чисел нужно убрать
скобки у 2-ого числа.
*/
// let text = 123 + 456;
// Ожидаемый результат 579
// console.log(text);

// Задача №4. Получить строку в верхнем регистре
// let text = 'фрилансер'
// Ответ: нужно применить функцию toUpperCase
// console.log(text.toUpperCase());

// Задача №5. Получить подстроку "лан" из:
//let text = 'фрилансер';
/*
Ответ: нужно применить метод str.slice.
В функции указать диапазон в виде цифр, 
соответствующий порядку букв в строке.
*/
// console.log(text.slice(3, 6));

// Задача №6.
/*
Какое значение (true или false)
вернёт представленное 
ниже выражение?
*/
let text = 'фрилансер';
console.log(text.includes('лан', 4));

/*
Ответ: выражение вернёт в консоль 
значение false, потому указанный
фрагмент 'лан' не найдёт. Причина
в том, что поиск фрагмента идёт с
4-ого символа "а".
*/

