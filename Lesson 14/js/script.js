// Урок 14. Размеры, прокрутка, координаты в JavaScript

// Размеры окна браузера
// clientWidth и clientHeight

// Доступная ширина и высота окна
/*
Это область доступная для работы, от левого края браузера
до полосы прокрутки (при наличии).
*/
// Getting the html tag
// const mainElement = document.documentElement;
// Getting the window width
// const mainElementWidth = mainElement.clientWidth;
// Getting the window height
// const mainElementHeight = mainElement.clientHeight;

/*
^^^
В этих константах будет содержаться ширина и высота,
досупная для работы.
*/
/*
console.log(mainElement);
console.log(mainElementWidth);
console.log(mainElementHeight);
*/
// ^^^ Выводим в консоль


// 1:45 Ширина и высота окна (window) с учётом ширины полосы прокрутки
/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);
*/
/*
Чаще всего используются свойства clientWidth и clientHeight 
для объекта documentElement т.к. для работы обычно используются
именно доступны размеры окна (без полосы прокрутки). 
*/

// 2:40 Ширина и высота документа (включая прокрученную часть)
/*
let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeigh = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

console.log(scrollWidth);
console.log(scrollHeigh);
*/

// 3:50 Getting the value of scrolled pixels. Only read.
/*
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);
*/
/*
Waring!
Properties is power only read. Can't get
the own property for manage page scroll.
*/

// 5:10 Управление прокруткой страницы
/*
Метод scrollBy(x,y) прокручивает страницу
относительно её текущего положения.
*/
let btnOne = document.querySelector('.btn-one');

function setScrollBy() {
    window.scrollBy(0, 50);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

btnOne.addEventListener('click',()=> {
	setScrollBy();
});

// ^^^ Прокрутка на 50 px вниз (по вертикали)

// 6:55 Метод scrollTo (pageX, pageY)
/*
Прокручивает страницу на абсолютные координаты
(pageX, pageY) относительно 0-ых значений.
Также можно использовать метод window.scroll(),
они идентичны.
*/
/*
function setScrollTo() {
    window.scrollTo(0, 50);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

function setScrollToOptions(){
    window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth"
        // ^^^ тип пркрутки, варианты значений: smooth, instant, auto (по умолчанию)
    });
}
*/
// Опции не работают в браузере Safari


// 9:35 Метод scrollIntoView
/*
Вызов elem.scrollIntoView(top) прокручивает страницу,
что бы elem оказался вверху. 
У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена,
что бы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.

- если top = false, то страница будет прокручена, что бы elem
появился внизу.
Нижний край элемента совмещён с нижним краем окна.
*/
/*
function setScrollIntoView(top) {
    const lessonSelected = document.querySelector('.lessonSelected');
    lessonSelected.scrollIntoView(top);
}
*/
// Расширенный вариант записи (с параметрами)
/*
function setScrollIntoViewOptions(top) {
    const lessonSelected = document.querySelector('.lessonSelected');
    lessonSelected.scrollIntoView({
    // Значения: "start", "center", "end" или "nearest". По умолчанию ""
    });
}
*/

// 12:35 Запрет прокрутки окна браузера
/*
function setEnableDisableScroll() {
    //document.body.style.overflow = "hidden";
    document.body.classList.toggle('scroll-lock');
}
*/
/*
Важно!
Для прокрутки страницы из JavaScript её
DOM должен быть полностью построен.
Например, если попытаться прокрутить
страницу из скрипта, размещённого 
в <head>, это не сработает.
Поэтому скрипты нужно подключать в самой нижней
части html-документа.
*/


// 14:40 Метрики элементов на странице
//Получаем объект
//const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

/*
Получаем родительский элемент
относительно которого позиционирован 
наш объект 
*/
//const elementOffsetParent = block.offsetParent;

/*
Это будет ближайщий предок, который 
удовлетворяет следующим условиям:

1. Является CSS-позиционированным
(CSS-свойство position равно absolute, relative, fixed или sticky)
2. или теги <td>, <th>, <table> 
3. или <body>
*/

//comsole.log(elementOffsetParent);

/*
Ситуации в которых offsetParent равно null:
1. Для скрытых элементов
(с - свойством display: none или когда его нет в документе).
2. Для элементов <body> и <html>.
3. Для элементов с position: fixed.
*/

// 17:35 Свойства offsetParent, offsetLeft и offsetTop
//Получение позиции элемента относительно предка (offsetParent)
/*
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log (elementOffsetLeft);
console.log (elementOffsetTop);
*/

// 19:00 Получение общих размеров.
// Получаем объект
//const block = document.querySelector('.lesson__block');

// Получение размеров объекта (включая рамку и отступы)
/*
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log (elementOffsetWidth);
console.log (elementOffsetHeight);
*/
// ! Метрики для не отображаемых объектов равны нулю


// 20:00 Отступы внутренней части элемента от внешней
// clinetTop и clientLeft
/*
const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);
*/

// 21:00 Размеры объекта без рамок и полосы прокрутки
// clientWidth и clientHeight
/*
const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);
*/
/*
Из чего состоит общая ширина (offsetWidth) объекта?
offsetWidth(500px) - рамка слева(20px) + рамка справа(20px) + полоса прокрутки(17px) = 443px
*/

// 22:20 Размеры объекта c учётом невидимой области
// scrollWidth и scrollHeight
/*
Методы scrollWidth и scrollHeigh возвращают размеры объекта,
включающие в себя прокручиваемую (невидимую) область.
В остальном данные методы работают так же как clientWidth и clientHeight.
Т.е. возвращают размеры объекта без учёта рамок и полосы прокрутки.
*/
/*
const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);
*/

// 23:00 Размеры прокрученной области
// scrollLeft и scrollTop
/*
const elementScrollWidth = block.scrollLeft;
const elementScrollHeight = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);
*/

// block.scrollTop = 150;
// ^^^ кроме чтения можно задавать нужное значение


// 24:00 Управление прокруткой объекта
/*
Методы управления прокруткой scrollBy, scrollTo
и scrollIntoView работают и для объекта с полосой прокрутки.
*/

// Получение объекта
//const block = document.querySelector('.lesson__block');
/*
function setElementScrollBy() {
    block.scrollBy({
        top: 20,
        left: 0,
        behavior: "smooth"
    })
}
*/

// 25:10 Координаты
/*
Большинство существующих методов JavaScript работают
в одной из 2-х указанных ниже систем координат:

1. Относительно окна браузера
(как position:fixed, отсчёт идёт от верхего левого угла окна браузера).
Принято обозначать clientX/clientY.

2. Относительно документа
(работает как position: absolute относительно <body>, отсчёт идёт от верхнего
левого угла документа).
Принято обозначать pageX/pageY.

Когда, страница полностью прокручена в самое начало, то верхний левый угол окна
совпадает с верхним левым углом документа. При этом обе системы координат 
тоже совпадают.

Но, при прокрутке координаты элементов относительно окна изменяются. При этом
координаты относительно документа остаются такими же.
*/


// 26:20 Координаты относительно окна браузера.
// Метод getBoundingClientRect

// Получение объекта
//const item = document.querySelector('.lesson__item');
// Получение координат относительно окна браузера
/*
const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);
*/


// 28:35 Получение конкретной координаты относительно окна браузера
/*
const getItemLeftCoord = item.getBoundingClientRect().left;

console.log(getItemLeftCoord);
*/


// 30:00 Координаты относительно документа
// getBoundingClientRect

// Получаем объект
//const item = document.querySelector('.lesson__item');

// Получение координаты относительно окна браузера
//const getItemTopCoords = item.getBoundingClientRect().top;

// Получение конкретной координаты относительно документа
/*
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);
*/


// 31:30 Получение объекта по координатам
// document.elementFromPoint(x, y);
/*
const elem = document.elementFromPoint(400, 100);

console.log(elem);
*/


