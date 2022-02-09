// Урок 7. Lesson 7.
// Домашняя работа. Home work.

// Решить задачи: Solve the task

/* 
Задача №1.
Вывести в консоль числа от 1 до 5,
используя изученные в уроке циклы.
*/
// Решение
// Цикл while
/*
let num = 1;
while (num < 6) {
    console.log(num);
    num++;
}
*/
// Цикл for
/*
for (let num = 1; num < 6; num++) {
    console.log(num);
}
*/

/*
Задача №2.
Верно ли, что последний вывод
в консоль для переменной num 
будет 0?
*/
/*
let num = 8;
while (num) {
    console.log(num);
    num--;
}
*/
/* Решение: нет, не верно. Последний
вывод в консоль будет равен 1,
т.к. 0 это false, (условие не будет)
выполнено.
*/

/*
Задача №3.
Переписать цикл с for на while.
*/
/*
for (let num = 0; num < 3; num++) {
    console.log(`Число: ${num}`);
}
*/
// Решение:
/*
let num = 0;
while (num < 3) {
    console.log(`Число: ${num}`);
    num++;
}
*/

/*
Задача №4.
Прекратить работу цикла №1, когда
size равна 1.
*/
/*
for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        console.log(size);
    }
}
*/
// Решение:

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 1) {
            break firstFor;
        }
        console.log(size);
    }
}
