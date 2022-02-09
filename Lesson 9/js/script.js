// 0:35 Синтаксис
/*
Оба варианта создадут пустой объект.
Чаще используется синтаксис литерал.
*/
/*
let userInfo = new Object(); // синтаксис "конструктор объекта"
let userInfo = {}; // синтаксис "литерал объекта"
*/

// 1:04 Свойства объектов
/* 
Что бы объект не был пустым его наполняют свойствами. 
Свойства объекта это связка ключ + значение.
По-другому ключ называют идентификатором или 
именем свойства объекта.
*/

//Синтаксис свойства объектов
//ключ: значение,
/*
let userInfo = {
    name: "Вася", // Свойство объекта
    age: 30, // Последняя (висячая) запятая
};
*/
/*
Рекомендуется использовать последнюю (висячую)
запятую т.к. это позволяет менять порядок свойств 
не получая при этом ошибку.
*/

// 1:56 Вызов объекта
/*
Что бы получить весь объект либо
его значение нужно вызвать переменную,
которой присвоен данный объект
*/
/*
console.log(userInfo); // Вызов объекта целиком
console.log(userInfo.name); // Вызов только значения объекта
*/
// 2:52 Имена свойств

// Имя свойства из 2-х или более слов
/*
Имя (ключ) свойства состоящее из 2-х 
или более слов нужно заключить в кавычки ""
*/
/*
let userInfo = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
};
*/
/*
Также существует разница при получении
значения многословного имени свойства.
*/
// Вызов (получение) имени (ключа) свойства, состоящего из 1-ого слова
//console.log(userInfo.name);
// Вызов (получение) имени (ключа) свойства, состоящего из 2-х и более слов
//console.log(userInfo["likes javascript"]); 
/*
Тип кавычек значения не имеет.
Обычное (однословное) имя свойства можно вызвать с применением [], как 
и многословное.
*/
//console.log(userInfo["name"]);

// 4:08 Вычисление и передача имени свойства
/*
// Вычисление имени
let firstPart = "likes";
let userInfo = {
    name: "Вася",
    age: 30,
    // Составление нового имени свойства
    [firstPart + "javascript"]: true,
};
// Вывод вычисления в консоль
console.log(userInfo["likes javascript"]);
*/

// 4:45 Передача имени
/*
let firstPart = "likes";
let userInfo = {
    name: "Вася",
    age: 30,
    [firstPart]: true,
};

console.log(userInfo[firstPart]);
*/

// 5:18 Преимущество квадратных скобок
// let key = "name"; // Переменная с именем свойства
// console.log(userInfo[key]); // Вывод в консоль значения ключа name
/* Если использовать . вместо квадратных скобок 
вернётся значение undefined потому, 
что имени (ключа) свойства key нет.
*/

// 5:57 Имена переменных
/* В качестве имён переменных 
нельзя использовать спец. зарезервированные
слова.
Например: if, for, let 
*/

// 6:08 Зарезервированные слова в именах свойств
/*
Исключение!
Имена свойств внутри объектов являются исключением.
*/
/*
let userInfo = {
    let: "Вася",
    for: 30,
};
console.log(userInfo.let);
console.log(userInfo.for);
*/

// 6:22 Имя свойства в виде строки или символа
/*
let userInfo = {
    0:"Вася", // 0 тоже самое что "0" (строка)
};
console.log (userInfo[0]);
console.log (userInfo["0"]);
*/

// 6:40 Тип данных Symbol
/*
Symbol - отдельный тип данных,
представляющий собой уникальный 
идентификатор.
*/

// Синтаксис Symbol
// Создаётся символ id с описанием (именем) "id"
/*
let id = Symbol("id");
let userInfo = {
    name: "Вася",
    age: 30,
    [id]: "некое значение"
};
console.log(userInfo);
*/
/* 
Основное применение символов:
1. "Скрытые" свойств объектов. 
Символьное свойство не появится цикле for.. in
2. Использование системных символов, например:
Symbol.interator, Symbol.toPrimitive и т.д.
*/

// 7:24 Вложенность
/*
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    }
}

console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);
*/

// 8:35 Свойство из переменной
/*
function makeUserInfo(name, age) {
    return {
        name: name,
        age: age,
        // ... другие свойства
    };
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/

// Упрощённый вариант предыдущей записи
/*
Когда имя объекта равно переменной, которая
является его значением, можно записать только имя (ключ)
*/
/*
function makeUserInfo(name, age) {
    return {
        name, // Тоже самое что и name: name,
        age, // Тоже самое что и age: age,
        "likes javascript": true,
        // ... другие свойства
    };
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/

// 10:05 Добавление новых свойства

let userInfo = {
    name: "Вася", 
}
console.log(userInfo);

userInfo.age = 30;
console.log(userInfo);

// 11:00 Запись свойства из 2-х слов
userInfo['likes javascript'] = true;
console.log(userInfo);

// Добавление нового объекта внутрь основного объекта
userInfo.address = {
    city: "Uzhhorod",
    street: "Freedom",
};
console.log(userInfo);


// 11:45 Удаление свойств
/*
let userInfo = {
    name: "Вася",
    age: 30,
    "likes javascript": true
}
console.log(userInfo);
 
delete userInfo.age; // обращение к свойству через объект
 
console.log(userInfo);

delete userInfo ["likes javascript"];

console.log(userInfo);
*/

// 12:25 Изменение значения свойства
/*
let userInfo = {
    name: "Вася",
    age: 30,
}
console.log(userInfo)

userInfo.age = 18; // изменение значения свойства

console.log(userInfo);
*/

// 12:58 Изменение значения свойства в константе
/* 
Измененять значения свойств внутри объекта
можно даже в константе.
*/
/*
const userInfo = {
    name: "Вася",
    age: 30,
}
console.log(userInfo)

userInfo.age = 18; // изменение значения свойства

console.log(userInfo);
*/

// 13:15 Копирование объектов
/*
Важно! При копирование объекта
в другую переменную сам объект
не дублируется. Копируется только
ссылка на него.
*/
/*
let userInfo = {
    name: "Вася",
    age: 30,
}
console.log(userInfo);

let user = userInfo;

console.log(user);

user.age = 18;

console.log(userInfo);
*/

// 14:10 Дублирование объектов
/*
Для дублирования объектов удобно
использовать object.assing
*/
//Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);
/*
let userInfo = {
    name: "Вася",
    age: 30,
}
*/
// копируем, содержимое внутри {}
//let user = Object.assign({}, userInfo);
/*
{} создаём пустой объект, в него будут копироваться свойства
userInfo объект из которого будут скопированы свойства
*/
//user.age = 18;
/* 
в новом, скопированном объекте
меняем значение свойства (ключа) age
*/

//console.log(userInfo);
//console.log(user);
// выводим два разных объекта


// 15:30 Добавление новых свойств в объект
/*
let userInfo = {
    name: "Вася",
    age: 30,
}

Object.assign(userInfo, {['likes javascript']: true, city: "Uzhhorod"});
*/
/*
userInfo - объект, в который будут добавлены новые свойства.
Внутри {} указываются свойства и значения (имя(ключ): значение),
которые необходимо добавить.
*/
//console.log(userInfo);

// 16:20 Проверка существования свойства
/*
let userInfo = {
    name: "Вася",
    age: 30,
}
*/
//console.log(userInfo.age);
/*
if (userInfo.age){//true or false
    console.log(userInfo.age)
}
*/
/*
Если вызываемое свойство (age: 30,) существует (true), то выводится
его значение (в примере это число 30). Если свойства
нет(false), то не выводится ничего.
*/

// 17:15 Опциональная цепочка
/*
let userInfo = {
    name: "Вася",
    age: 30,
    //address: {
        //city: "Uzhhorod",
        //street: "Freedom"
    //}
}
*/
// Стандартный синтаксис вывода значения по цепочке
//console.log(userInfo.address.street);

/* 
Синтаксис опциональной цепочки (оператор ?.)
Каждый раз перед выводом результата в консоль 
будет проверяться наличие указанного свойства.
*/
//console.log(userInfo?.address?.street);

// 18:18 Оператор "in"
/*
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom"
    }
}
*/
/*
Условие: оператор in ищет ключ name 
внутри объекта userInfo. Если такой
ключ есть (in возвращет true), то
в консоль выводится значение ключа
name.
*/
/*
if ("name" in  userInfo) { 
    console.log(userInfo.name);
}
*/

// 19:20 Когда применяется оператор in?
/*
В большинстве случаев работает сравнение с 
undefined или опциональная цепочка.
Однако, есть особый случай, когда свойство
существует, но содержит значение undefined.
Здесь необходимо использовать оператор "in".
*/
/*
let userInfo = {
    name: undefined, // значение
    // .... следующие свойства
}
*/
/*
стандартная проверка на undefined
вернёт false, хотя значение 
undefined существует.
/*
if (userInfo.name) {// false
    console.log(userInfo.name)
}
*/
/*
При использовании оператора in
вернётся значение true, результат
будет выведен в консоль.
*/
/*
if ("name" in userInfo) {// true
    console.log(userInfo.name)
}
*/

// 20:26 Цикл for in
/* 
Используется для перебора 
всех свойств объектов.
Этот цикл оьличается от ранее 
изученного цикла for
*/
// Синтаксис
/*
for(let key in object) {
    // тело цикла выполняется для каждого свойства объекта
}
*/

// 21:05 Пример
/*
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    }
}
// Вывод в консоль всех имён, значений и свойств
for (let key in userInfo) {
    // ключи (имена свойств)
    console.log(key); // name, age, address
    // значения ключей
    console.log(userInfo[key]); // Вася, 30, Object {}
}
// Вывод значений объекта (address), вложенного в родительский объект (userInfo)
for (let key in userInfo.address) {
    // ключи (имена свойств)
    console.log(key); // city, street
    // значения ключей
    console.log(userInfo.address[key]); // Uzhorod, Freedom
}
*/

// 22:35 Методы объекта
/*
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhorod",
        street: "Freedom",
    },
*/
/*
    showInfo: function() {
        console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street},`);
    }
*/    
/*
    showInfo() {
        // тело функции
        console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street},`);
    }
}
*/
// Вызов функции
// userInfo.showInfo();
/*
Результат выполнения функции - данные из объекта,
собранные в строку.
*/

//24:00 Методы объекта, this
/*
Словом "this" можно заменить текущий объект
*/
/*
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhorod",
        street: "Freedom",
    },
    showInfo() {
       // console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street},`);
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}.`)
    }
}
userInfo.showInfo();
*/

// 24:30 Другой пример использования this
/*
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhorod",
        street: "Freedom",
    },
    showInfo() {
*/
        /* 
        В примере ниже "this" обращается (пытается обратиться) к функции showInfo.
        Возникает ошибка потому, что тело функции (включая this) находится внутри функции show.
        Появилась дополнительная вложенность. Теперь родителем для тела функции будет функция show(),
        а не showInfo().
        */
        /*
        function show() {
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}.`)
        }
        */
        /* 
        У стрелочной функции нет своего "this". Поэтому и вложенности как-будто нет.
        Используется значение из внешнего метода userInfo.snowInfo()
        Что бы устранить ошибку нужно переписать функцию, использую
        стрелочный синтаксис. Так как стрелочная функция игнорирует "this", будут
        использоваться родительские объекты из переменной userInfo.
        */
        /*
        let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}.`)
    show ();
  }
}
userInfo.showInfo();
*/

// 25:50 Преимущества "this"
/* Использование "this" надёжнее, чем использование 
непосредственно имени переменной, которой присвоен объект.
*/
// Пример
/*
let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhorod",
        street: "Freedom",
    },
    showInfo() {
       // В этом случае повторно обратиться к переменной userInfo не получиться (т.к. она обнулена, см. строку 595)
       // console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street},`);
       */
       /*
       При использовании "this" функция будет корректно работать,
       потому, что нет привязки к конкретной переменной. 
       Есть привязка к конкретному объекту (name, age, city)
       */
       // При использовании "this" такой проблемы нет.
       /*
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}.`)
    }
}
userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();
*/

// 27:05 Функция-конструктор
/*
Обычный синтаксис создания объекта {... } позволяет
создать только один объект. Не редко нужно создать
множество однотипных объектов (пользователи, элементы
меню и т.д.).

Это возможно при помощи функции-конструктора и
оператора "new".

Функции-конструкторы это обычные функции.
Но есть два правила:
1. Имя функции-конструктора должно начинаться 
с большой буквы.
2. Функция—конструктор должна вызываться
с помощью оператора "new".
*/

// Пример функции-конструктора
/*
function UserInfo(name) {
    // this = {}; Создаётся пустой объект (неявно)
    this.name = name;
    this.age = 30;
    // return this; Возвращается объект (неявно)
}
console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));
*/  