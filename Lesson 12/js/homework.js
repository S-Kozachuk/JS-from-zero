// Домашняя работа. Home work.

// Задача №1.
// Какое число (длина) получится?
/*
let arr = ['Ваня', 'Дима', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
*/
/* 
Решение: 4 
С помощью метода push добавлен новый 
элемент в конец массива.
*/

// Задача №2.
/*
2.1. Создать массив users с элементами "Ваня" и "Дима".
2.2. Добавить "Оля" в конец.
2.3. Замените значение в "Дима" на "Петя".
2.4. Код поиска значения должен работать
для массива любой длины.
2.5. Удалить первый элемент массива и показать его.
2.6. Вставить "Маша" и "Паша" в начало массива.
*/

// Решение.
// 2.1. Создание массива users с элементами "Ваня" и "Дима"

let arrUsers = ['Ваня', 'Дима',];
console.log (arrUsers);

// 2.2. Добавление "Оля" (метод push)
let arrUsers2 = arrUsers
arrUsers2.push('Оля'); 
console.log(arrUsers2)

// 2.3. Замена значения "Дима" на "Петя"
arrUsers2[1] = 'Петя';
console.log(arrUsers2)

// 2.4. Поиск значения в массиве. Результат - позиция в массиве.
console.log(arrUsers2.indexOf('Оля'));

// 2.5. Удаление первого элемента массива с выводом значения в консоль
/*
Первый вариант - скорее всего неверный, зачем использовать метод splice c позиц 0 и 1?
arrUsers2.splice(0,1);
console.log(arrUsers2);
*/

//Второй вариант
/*
// удаление 1-ого эл. из массива arrUsers, запись значения удалённого эл. в перем. arrRemove
arrRemove=arrUsers2.shift();
// вывод массива без удалённого элемента
console.log(arrUsers2);
// вывод значения удалённого элемента - Ваня
console.log(arrRemove);
*/

// 2.6. Добавить "Маша" и "Паша" в начало массива


// Задача №3
/*
Удалить элемент "Дима" и возвратить его в переменную
let arr = ['Ваня', 'Дима', 'Оля',];
*/
// Решение:
/*
удаление элемента 'Дима' с помощью метода splice
с одновременным присвоением (возвратом) его переменной removed
*/
/*
let arr = ['Ваня', 'Дима', 'Оля',];
let removed = arr.splice(1, 1);
// вывод массива после удаления элемента 'Дима'
console.log(arr)
// вывод в консоль удалённого элемента 'Дима'
console.log(removed)
*/

// Задача №4
// Сделать из строки массив
// let str ='Ваня,Дима,Оля';

// Решение:
// Применить метод split
/*
let str ='Ваня,Дима,Оля'
let arr = str.split(',');
console.log(arr);
*/

// Задача №5
// Чему равен previousValue в начале работы метода reduce (см. 742 строку)?
/*
let arr = [9, 2, 8,];
let reduceValue = arr.reduce(function (previousValue, item, index, array) {
    console.log(previousValue);
});
*/
/*
Решение:
previousValue равен 9 - первому элементу массива, потому, что
начальное значение для параметра (аргумента) previousValue не указано.
*/
/*
let arr = [10, 9, 2, 8,];
let reduceValue = arr.reduce(function (previousValue, item, index, array) {
  return item + previousValue;
});
console.log(reduceValue);
*/
