// Урок 12. Массивы в JavaScript. Редактирование, поиск, сортировка.

/*
Массивы это отдельный подвид объектов.
Он позволяет хранить данные. Главным
отличием массивов от объектов является
более гибкий подход к управлению
данными.
*/

// 00:25 Создание массива
/*
let arr = new Array(); // используется редко 
let arr = []; // популярный способ
*/

// 00:35 Значения массива
/*
let arrOne = [
    'Ваня',
    'Иштван',
    'Оля', // Висячая запятая
];
*/
/*
Использование "висячей запятой"это хорошая практика т.к. позволяет
менять порядок элементов без появления ошибок.
*/
// или запись в  одну строку
// let arrOne = ['Ваня', 'Иштван', 'Оля',];

// 1:00 Различные типы значений
/*
let arrTwo = [
    "Коля", // строка
    { // объект
      type: "JS",
      age:36
    },
    true, // логическое значение (boolean	)
    function () { // функция
        console.log('Привет, я Коля'); 
    }
]
*/

// Многомерные массивы
/*
Массивы в которых элемент массива является
отдельными массивами со своими элементами
называются многомерными массивами.
*/
/*
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix);
*/
// 1:20 Получение элементов массива
/*
Для получения элементов массива используются квадратные скобки.
Необходимо обратиться к переменной, которой присвоен данный массив.
Далее, внутри квадратных скобок указать позицию либо ключ-значение,
которое нужно получить. Позиции начинаются с 0.
*/
/*
let arrOne = [
    'Ваня', // 0-я позиция
    'Иштван', // 1-я позиция
    'Оля', // 2-я позиция
];
console.log(arrOne[2]);
console.log(arrOne[7]); // undefined - неопределено
*/

// 2:05 Примеры с более сложными массивами
/*
let arrTwo = [
    "Коля",
    {
      type: "JS",
      age: 36
    },
    true,
    function() {
        console.log('Привет, я Коля');
    }
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].age); // свойство искомого значения
console.log(arrTwo[2]);
console.log(arrTwo[3]);
arrTwo[3](); // вызов функции из массива
*/

// 3:15 Многомерные массивы (получение значений)
/*
В первых [] скобках указывается элемент массива
(который, тоже является массивом).
Во-вторых [] скобках указывается позиция значения 
внутри элемента массива.
*/
/*
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
console.log(matrix[0][1]);
console.log(matrix[2][0]);
*/

// 4:10 Длина массива. Свойство length
/*
let arrOne = ['Ваня', 'Федя', 'Оля',];
// ^ Массив, состоящий из 3-х элементов 
console.log(arrOne);
console.log(arrOne.length);
// ^ Прямой вывод в консоль длины массива
*/

// 4:45 Доступ к массиву
/*
Массив является объектом. Поэтому ведёт себя как объект.
Например, копируется по ссылке.
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);

let arrNew = arr;
// ^ присвоение "копирование" массива
arrNew.length = 2;
// ^ укорачивание массива (с конца, удаляется последний элемент)
console.log(arr);
// ^ вывод в консоль укороченного массива
*/
/*
Фактически массив не скопирован, но к нему
подобрано два разных "ключа".
*/

// 5:30 Изменение значения массива
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
// Меняем существующее значение
arr[0] = 'Коля';
console.log(arr);

// Добавляем новую позицию (обращение к несуществующему ключу(позиции))
arr[3] = 'Ваня';
console.log(arr);
*/

// 6:18 Методы массивов
/*
Варианты применения массивов:
1. Очередь или упорядоченная коллекция элементов (последним вошёл - последним вышел).
Очередь поддерживает два вида опреций:
1.1. Добавление элемента в конец очереди
1.2. Удаление элемента в начале, со сдвигом 
очереди (2-ой элемент становиться первым)
2. Структура данных - стек (последним вошёл - последним вышел). 
Стек поддерживает два вида операций:
2.1. Добавление элемента в конец 
2.2. Удаление последнего элемента 

Массивы в JS работают и как очередь и как стек.
Можно добавлять, удалять элементы в начале или в конце массива.
Для этого применяются следующие методы:
*/

// 7:15 Метод push
// Добавляет элемент в конец массива
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
arr.push('Вася');
console.log(arr);

arr.push('Дима', 'Катя');
console.log(arr);
*/

// 7:38 Метод shift
/*
удаляет элемент в начале,
следующий элемент становиться
первым
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
arr.shift();
console.log(arr);
*/

// Метод pop - удаляет последний элемент в массиве
/*
Другие элементы остаются на своих местах
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
arr.pop();
console.log(arr);
*/

// Метод unshift - добавляет элемент в начало массива
/*
уже имеющиеся элементы 
сдвигаются вправо
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
arr.unshift('Вася');
console.log(arr);

arr.unshift('Дима', 'Катя');
console.log(arr);
*/

// 8:38 Важно помнить!
/*
Методы push и pop выполняются
очень быстро. Методы shif и unshift
медленно.

Пример добавления элемента в начало
массива (unshift);

Перед добавлением элемента с номером 0
нужно заново пронумеровать остальные.

Операция unshift должна выполнить 3 действия:
1. Добавить элемент с индексом 0.
2. Сдвинуть все элементы вправо. Заново про-
нумеровать их, заменив 0 на 1, 1 на 2 и т.д.
3. Обновить свойство length.

Чем больше элементов содержит массив, тем 
больше времени потребуется для того, чтобы
их переместить. Больше операций с памятью.

Другой пример. 
Что бы добавить элемент в конец массива (push)
перемещения элементов не нужны. Заново 
нумеровать элементы не нужно. Достаточно
увеличить значение length.
*/

// 9:45 Удаление, добавление и изменение отдельных элементов
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
delete arr[1];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
*/
// ^ длина массива останется прежней

// 10:25 Метод splice 
/*
Позволяет добавлять, удалять и заменять элементы.
Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])
*/

// Удаление элемента
/*
let arrOne = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции "Иштван", удаляем один элемент
arrOne.splice(1,1);
// ^ первая цифра это позиция элемента, вторая
// количество элементов, которые нужно удалить
console.log(arrOne);
*/

// Удаление элемента и возвращение его в переменную
/*
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);
*/

// Замена элементов
/*
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Замена одного элемента, начиная с 0-ой позиции
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);
*/

// 12:05 Добавление элемента
/*
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Добавляются два элемента, начиная с 1-ой позиции (перед Иштван)
arrFour.splice(1, 0, 'Коля', 'Маша');
// 0 - обязательное значение, означает добавление)
console.log(arrFour);
*/

// Удаление элемента
/*
let arrFive = ['Ваня', 'Иштван', 'Оля'];
// Удаление одного элемента, начиная с последней позиции (Оля)
arrFive.splice(-1, 1);
console.log(arrFive);
*/

// 13:10 Метод slice
/*
Создаёт новый массив, в который копирует
часть, либо весь массив.
Синтаксис arr.slice([start], [end])
Не включая [end]
*/

// Массив, подлежащий копированию
//'let arrOne = ['Ваня', 'Иштван', 'Оля',];

/*
Копирование массива, начиная с 1-ой
позиции "Иштван". До позиции "Оля"
(не включая!).
*/
/*
let arrTwo = arrOne.slice(1, 2);
console.log(arrTwo);
*/
/* ^ 
в скобках указываются позиции
начала и окончания копирования
элемента(-ов) массива 
(не включая вторую, завершающую позицию)
*/

/* 
Для указания позиции копируемых 
элементов массива можно использовать
отрицательные значения.
В этом случае копирование идёт справа
налево.
*/
/*
let arrThree = arrOne.slice(-2, -1);
console.log(arrThree);
*/
/* ^
Копирование идёт начиная с 
предпоследней позиции "Иштван"
до последней "Оля" (не включая).
*/

// Копирование всего массива
/*
Значения внутри скобок не указываются.
*/
/*
let arrFour = arrOne.slice();
console.log(arrFour);
*/

// 15:23 Метод concat.
/*
Метод concat создаёт новый массив,
в который копирует данные из 
других массивов и доп. значения 
(в конец массива).
Синтаксис arr.concat(arg1, arg2...)
*/
/*
let arrOne = ['Ваня', 'Иштван', 'Оля',];
let arrTwo = arrOne.concat('Петя'); // добавление нового аргумента
console.log(arrTwo);
*/

// 16:10 Поиск в массиве
/* 
Для поиска информации в массиве используются
методы indexOf/lastIndexOf и includes 
(полные аналоги строковым методам).

1. arr.indexOf(item, from) - ищет item, 
начиная с индекса from, и возвращает
индекс (позицию) на котором был 
найдем искомый элемент 
в противном случае возвращает
- 1 (минус один).

2. arr.lastIndexOf(item, from)- тот же самый метод,
но поиск идёт справа налево.

3. arr.includes(item, from) - ищет item, начиная  
с индекса from, и возвращает true, если поиск
успешен. Или false, если не найдено ничего.
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];

// imdexOf
console.log(arr.indexOf('Иштван'));
console.log(arr.indexOf('Вася'));
// поиск Иштвана, начиная со 2-ой позиции
console.log(arr.indexOf('Иштван', 2));

// includes 
console.log(arr.includes('Иштван'));
console.log(arr.includes('Вася'));
console.log(arr.includes('Иштван', 2));
*/

// 17:50 Методы find и findIndex
/* 
Поиск объектов в массиве с определённым
условием. Возращают первый попавшийся
элемент, удовлетворяющий условию.
*/

/* 
Синтаксис
let result = arr.find(function(item, index, array) {
    1. если true - возращается текущий элемент и перебор прерывается 
    2. если все итерации оказались ложными, возвращается undefined
});
*/
/*
let arr = [
    { name: 'Вася', age: 36 },
    { name: 'Коля', age: 18 },
    { name: 'Оля', age: 'Не скажу' },
]
*/
// Функция поиска будет выполняться для каждого элемента массива
/*
У функции будут следующие аргументы:
- item - элемент массива, заключён в { }
- index - ключ элемента, его позицич
- array - весь массив, целиком
*/
/*
let resultOne = arr.find(function (item, index, array) {
   return item.age === 18;
});
*/
// Такой же поиск, но помощью стрелочной функции
// let resultOne = arr.find(item => item.age === 18);

// Вывод в консоль объекта, соответствующего условию (return item.age === 18;)
// console.log(resultOne);
 
/*
метод findIndex делает то же самое, 
но в качестве результата возращает 
не сам элемент, а его индекс 
(расположение в массиве)
*/
/*
let resultTwo = arr.findIndex(item => item.age === 18);
console.log(resultTwo);
*/

// 20:20 Метод filter
/*
Методы filter похож на метод find, но
не прекращает свою работу после 
выполнения условия. 

filter ищет все элеметы, на которые 
функция-колбэк вернёт значение true.

В результате он возвращает массив 
из всех элементов, соответствующих
указанным условиям.
*/

/* 
Синтаксис.
let result = arr.filter(function(item, index, array) {
    1. если true - элемент добавляется к результату, и перебор продолжается
    2. возращается пустой массив в случае, если ничего не найдено
}
*/
/*
Задача фильтра: найти и вывести в консоль
все объекты (массив) у которых, свойство
с именем age имеет значение большее или 
равное 18.
*/
/*
let arr = [
    { name: 'Вася', age: 36 },
    { name: 'Коля', age: 18 },
    { name: 'Оля', age: 'Не скажу' },
]

let result = arr.filter(function(item, index, array) {
    return item.age >= 18;
})    
console.log(result);
*/

// 21:20 Сортировка массива
/*
В основном используется метод sort(fn).
Сортирует массив на месте, меняя в нём
порядок элементов.
*/

// Сортировка слов (по алфавиту)
/*
let arrOne = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOne.sort());
*/

// Сортировка чисел
/*
let arrTwo = [8, 22, 1];
console.log(arrTwo.sort());
*/
/*
По умолчанию элементы сортируются как 
строки. Для строк применяется лексико-
графический порядок. Из-за этого
получается, что "8" > "22".
*/

// console.log("8" > "22");

// Правильная сортировка чисел
/*
В момент вызова метода sort в круглых
скобках может указываться имя функции,
которая будет учитываться при
выполнении сортировки.
*/

// Функция сортировки

/*
    сравнение на основе результата вычисления
    Если результатом вычисления будет отрицательное 
    число, значит a < b. 
    Если результат положительное число, значит
    a > b. 
    Если итог вычисления 0, значит оба числа
    (аргумента) равны.
    На основе вычислений определяются сортировки.
*/
/*
function compareNumeric(a, b){
    console.log(`Сравниваем ${a} и ${b}`);
    
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    
    
     // return a - b
}
*/ 

/*
Результатом выполнения метода sort с учётом
функции будет правильно отсортированный 
массив.
*/
//console.log(arrTwo.sort(compareNumeric));

/*
Ещё более лаконичный вариант
это использование стрелочной
функции внутри метода sort.
*/
/*
console.log(arrTwo.sort((a, b) => a - b));
*/

// 24:55 Сортировка массива методом reverse.
// Меняет порядок элементов в массиве на обратный
/*
let arrOne = ['Иштван', 'Ваня', 'Оля',];
console.log(arrOne.reverse());
*/

// 24:10 Преобразование массивов. Метод map.
/*
Вызывает функцию для каждого элемента массива,
возвращает новый массив с результатами выполнения
этой функции.
*/
// let arr = [ 'Ваня', 'Иштван', 'Оля',];

// новая переменная с функцией и аргументами
/*
let result = arr.map(function (item, index, array) {
    return item[0];
});
*/
// результат выполнения функции сформирует новый массив
// let result = arr.map(function (item => item[0]);
// console.log (arr); // оригинальный массив
// console.log (result); // новый массив


// 26:35 Метод split 
/*
Метод split преобразует строку
в массив по заданному разделителю.
Синтаксис: str. split(delin)
*/
/*
let str = 'Ваня,Иштван,Оля';

let arr = str.split(','); // в скобках указывается разделитель
console.log(arr);

/*
Можно ограничить кол-во элементов,
которые попадут в массив.
*/
/*
let arrTwo = str.split(',', 2);
console.log(arrTwo);
*/

// 27:28 Метод join
/*
Метод join преобразует строку
в массив с заданным разделителем.
Синтаксис: arr.join(glue) 
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
let srt = arr.join(';');
console.log(srt);

// 2-ой вариант получения строки из массива (разделитель , изменить нельзя)
let arrTwo = ['Ваня', 'Иштван', 'Оля'];
console.log(String(arrTwo));
*/

// 28:25 Array.isArray() проверка на наличие массива

/*
Массивы не являются отдельным типом данных.
Они основаны на объектах.
*/
/*
let obj = {}; // пустой объект
let arr = []; // пустой массив

console.log(typeof obj);
console.log(typeof arr);
*/
/*
Как узнать где массив, а где нет?
Проверка Array is Array
*/
/*
if(Array.isArray(arr)) {
    console.log('Это массив');
} else {
    console.log('Это не массив')
}
*/

// 29:45 Перебор элементов массива
/*
Применение цикла FOR позволяет 
получить значение и ключ массива.
*/
/*
let arr = ['Ваня', 'Дима', 'Оля',];
console.log(arr.length);
*/
// Цикл FOR, переменная i должна быть меньше длины массива
/*
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // для вывода каждого значения массива, указать i в []
}
/* 
значение переменой i будет
каждый раз увеличиваться на 1 
пока i не станет равно длине массива 
(в данном примере 3)
*/

// 31:17 Цикл FOR...OF 
/*
Используется только для
вывода значений
*/
/*
let arr = ['Ваня', 'Дима', 'Оля',];

for (let arrItem of arr) {
    console.log(arrItem);
}
*/

// 31:53 Метод перебора forEach
/*
Метод выполняет функцию для 
каждого элемента массива.
В теле функции можно выполнять 
практически любые действия.
*/
/*
arr = ['Ваня', 'Дима', 'Оля',];
*/
/*
arr.forEach(function (item, index, array) {
    console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/

// Упрощённый вариант записи - стрелочная функция.
/*
arr.forEach((item, index, array) => {
    console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/

// 33:00 Использование имени отдельной функции в методе forEach.
// Пример:
/*
let arr = ['Ваня', 'Дима', 'Оля',];
arr.forEach(show);

function show(item){
    console.log(item);
}
*/

// 33:05 Методы reduce и reduceRight
/*
Что бы перебирать массив можно использовать
методы forEach, for или for of.
Для перебора массива и возврата данных
каждого элемента используется метод map.

Методы arr.reduce и arr.reduceRight похожи на 
эти методы. Но они сложнее. Применяются для 
вычисления некого единого значения на
основе всего массива.
*/

// Синтаксис
/*
let value = arr.reduce(function(previousValue, item, index, array) {
    //...
}, [initial]);
*/

/*
Кроме уже известных аргументов item, index и array
добавляется previousValue.

previousValue - результат предыдущего вызова данной 
функции. Равен initial при первом вызове (если передан initial). 
В примере записан вторым параметром метода reduce.

item - очередной элемент массива,

index - его индекс,

array - сам массив

Функция применяется по очереди ко всем элементам
массива и "переносит" свой результат на
следующий вызов.
*/

// 34:25 Примеры использования методов reduce и reduceRight
/*
let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function(previousValue, item, index, array) {
    return item + previousValue;
}, 0);
console.log(reduceValueOne);
*/
/* 
Подробное описание примера ^

Шаг №1
previousValue = 0 (как и указано в исходной функции)
item = 1
их сумма = 1 (результат работы item + previousValue)

Шаг №2
previousValue = 1 (результат работы предыдущего шага)
item = 2 (значение второго элемента массива)
их сумма = 3 (результат работы item + previousValue)

Шаг №3
previousValue = 3 (результат работы предыдущего шага)
item = 3 (значение третьего элемента массива)
их сумма = 6 (результат работы item + previousValue)

Шаг №4
previousValue = 6 (результат работы предыдущего шага)
item = 4 (значение четвёртого элемента массива)
их сумма = 10 (результат работы item + previousValue)
*/

// 36:10 Без начального (initial) значения
/*
Если не указать начальное значение, то оно 
будет равно первому элементу массива (previousValue=Ваня)
Работа метода начнётся со второго элемента (item=Дима)
*/
/*
let arrTwo = ['Ваня', 'Дима', 'Оля',];

let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
    console.log(previousValue);
    console.log(item);
    return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);
*/

// 37:00 Методы reduse/reduceRight
/* 
Работает аналогично обычному методу reduse,
но проходит по массиву справо налево.
*/

// 37:10 Массив используем как массив
/*
Следует помнить, что массив является объектом.
Следовательно ведёт себя как объект.
Тип данных: object
*/
/*
let arr = ['Ваня', 'Дима', 'Оля',];
console.log(typeof arr);
*/
/*
В массив можно добавлять 
нечисловое свойство.
*/
/*
arr.name = "Настя";
console.log(arr);
*/
/*
По-настоящему особенными массивы делает их
внутреннее представление. Движок JavaScript
старается хранить элементы массива в 
непрерывной области памяти, один за другим.
Существуют и другие способы оптимизации,
благодаря которым массивы работают очень 
быстро.

Но все они утратят эффективность, если 
перестать работать с массивами как с 
упорядоченной коллекцией данных и
начать использовать их(массивы)как 
обычные объекты.

Примеры неправильного использования массива:
1. Добавление нечислового свойства, например: arr.test = 5
2. Создание «дыр», например: добавление arr[0],
затем arr[1000] (между ними ничего нет)
3. Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.

Всё это приведёт к снижению скорости работы массива.
Массивы тщательно настроены в движке JavaScript для работы с 
однотипными, упорядоченными данными.
Если есть необходимость в использовании произвольных ключей, лучше использовать объекты.
*/