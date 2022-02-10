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
Добавить "Оля" в конец.
2.2. Замените значение в "Дима" на "Петя".
2.3. Код поиска значения должен работать
для массива любой длины.
2.4. Удалить первый элемент массива и показать его.
2.5. Вставить "Маша" и "Паша" в начало массива.
*/

// Решение:
let arrUsers = ['Ваня', 'Дима',];
console.log (arrUsers);

// Добавление "Оля" (метод push)
let arrUsers2 = arrUsers
arrUsers2.push('Оля'); 
console.log(arrUsers2)

// Замена значения "Дима" на "Петя"
arrUsers2[1] = 'Петя';
console.log(arrUsers2)

// Поиск значения в массиве. Результат - позиция в массиве.
console.log(arrUsers2.indexOf('Петя'));

// Удаление первого элемента массива с выводом значения в консоль
arrUsers2.splice(0,1);
console.log(arrUsers2);


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
