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
/*
let btnOne = document.querySelector('.btn-one');

function setScrollBy() {
    window.scrollBy(0, 50);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

btnOne.addEventListener('click',()=> {
	setScrollBy();
});
*/
// ^^^ Прокрутка на 50 px вниз (по вертикали)

// 6:55 Метод scrollTo (pageX, pageY)
/*
Прокручивает страницу на абсолютные координаты
(pageX, pageY) относительно 0-ых значений.
Также можно использовать метод window.scroll(),
они идентичны.
*/
/*
let btnTwo = document.querySelector('.btn-two');

function setScrollTo() {
    window.scrollTo(0, 50);
    const windowScrollTo = window.pageYOffset;
    console.log(windowScrollTo);
}

btnTwo.addEventListener('click',()=>{
	setScrollTo();
});


let btnThree = document.querySelector('.btn-three');

function setScrollToOptions(){
    window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth"
        // ^^^ тип прокрутки, варианты значений: smooth, instant, auto (по умолчанию)
    });
	const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

btnThree.addEventListener('click',()=>{
	setScrollToOptions();
})
*/

// Опции не работают в браузере Safari


// 9:35 Метод scrollIntoView
/*
Вызов elem.scrollIntoView(top) прокручивает страницу, что бы elem оказался вверху. 
У него есть один аргумент:
- если top = true(по умолчанию), то страница будет прокручена,
что бы elem появился в верхней части окна. Параметр можюно не указывать
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, что бы elem
появился внизу.
Нижний край элемента совмещён с нижним краем окна.

Didn't work in Safari browser
*/
/*
const btnFour = document.querySelector('.btn-four');
const btnFive = document.querySelector('.btn-five');
const btnSix = document.querySelector('.btn-six');
*/
// Default value (true)
/*
function setScrollIntoView() {
    const lessonSelected = document.querySelector('.lesson__selected');
    lessonSelected.scrollIntoView();
}

btnFour.addEventListener('click',()=>{
	setScrollIntoView();
});
*/

// False value
/*
function setScrollIntoView(top) {
    const lessonSelected = document.querySelector('.lesson__selected');
    lessonSelected.scrollIntoView(top);
}

btnFive.addEventListener('click',()=>{
	setScrollIntoView(false);
});
*/
// Additional record (with parameters)
/*
function setScrollIntoViewOptions() {
    const lessonSelected = document.querySelector('.lesson__selected');
    lessonSelected.scrollIntoView({
    	// Value: "start", "center", "end" или "nearest". By default "start"
		block: "center",
		// Value: "start", "center", "end" или "nearest". By default "nearest"
		inline: "nearest",
		// Value: "auto" or "smooth". By default "auto".
		behavior: "smooth"
    });
}

btnSix.addEventListener('click',()=>{
	setScrollIntoViewOptions();
})
*/


// 12:35 Block scroll of browser window
/*
const scrollLock = document.querySelector('.btn-lock');

function setEnableDisableScroll() {
    // document.body.style.overflow = "hidden";
    document.body.classList.toggle('scroll-lock');
}

scrollLock.addEventListener('click',()=>{
	setEnableDisableScroll();
})
*/
/*
Важно!
Для прокрутки страницы из JavaScript её DOM должен быть полностью построен.
Например, если попытаться прокрутить страницу из скрипта, размещённого 
в <head>, это не сработает.
Поэтому скрипты нужно подключать в самой нижней части html-документа.
*/

// 14:05 Single elements on page

// 14:40 Metrics of elements on page
// Get an object
/*
const block = document.querySelector('.lesson__block');
console.log(block);
*/

// Object position
// Properties: offsetParent, offsetLeft и offsetTop
// Getting the parent element relative to which the object is positioned
// const elementOffsetParent = block.offsetParent;

/*
This wil be a closest parent, satisfying the following conditions:
1. Is CSS-positioned
(the CSS-property position is equal to absolute, relative, fixed or sticky)
2. or tags <td>, <th>, <table> 
3. or <body>
*/
// console.log(elementOffsetParent);

/*
Situation, in which offsetParent is null:
1. For hidden elements
(with display property: none or when it is not in the document).
2. For <body> and <html> elements.
3. For elements with "position: fixed" property.
*/

// 17:35 Property: offsetParent, offsetLeft и offsetTop
// Getting the element position relative to the ancestor
/*
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log (elementOffsetLeft);
console.log (elementOffsetTop);
*/

// 19:00 Overall object dimensions.
// Getting an object
// const block = document.querySelector('.lesson__block');

// Getting an object dimensions (with border and indents)
/*
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log (elementOffsetWidth);
console.log (elementOffsetHeight);
*/
// For not displayed objects metrics is equal zero


// 20:00 Indents from internal element part to external (frame width)
// clinetTop and clientLeft properties
/*
const block = document.querySelector('.lesson__block');
const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);
*/

// 21:00 Object measurement without frame and scrolling line"
// clientWidth и clientHeight
/*
const block = document.querySelector('.lesson__block');
const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);
*/
/*
What is the total width (offsetWidth) of the object?
offsetWidth(500px) - left frame (20px) + right frame (20px) + scroll bar (17px) = 443px
*/

// 22:20 Object dimensions with invisible area
// scrollWidth and scrollHeight
/*
Properties scrollWidth and scrollHeight returned objects, including
scrollable (invisible) area. Otherwise, they work the same way clientWidth 
and clientHeight properties.
*/
/*
const block = document.querySelector('.lesson__block');
const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);
*/


// 23:00 Scrolled area dimensions
// Properties scrollLeft и scrollTop
/*
const block = document.querySelector('.lesson__block');
block.scrollTop = 65;
const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);
*/


// 24:00 Object scrolling control
/*
Control object methods scrollBy, scrollTo & scrollIntoView 
are working for objects with scroll bar.
*/

// Getting an object to const
/*
const block = document.querySelector('.lesson__block');
const scrollBtn = document.querySelector('.btn-seven');

function setElementScrollBy() {
    block.scrollBy({
        top: 20,
        left: 0,
        behavior: "smooth"
    });
}

scrollBtn.addEventListener('click',()=>{
	setElementScrollBy();
});
*/

// 25:10 Coordinates
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


// 26:20 Coordinates relative browser window (1-st coordinate system)
// Method getBoundingClientRect

// Getting an object
//const item = document.querySelector('.lesson__item');
// Getting coordinates relative browser window
/*
const getItemCoords = item.getBoundingClientRect();
console.log(getItemCoords);
*/

// 28:35 Getting a specific coordinate relative browser window in const
/*
const getItemLeftCoord = item.getBoundingClientRect().top;
console.log(getItemLeftCoord);
*/

// 30:00 Coordinates relative document. 2-nd coordinate system
// getBoundingClientRect

// Getting an object
const item = document.querySelector('.lesson__item');

// Getting a coordinates relative browser window
const getItemTopCoord = item.getBoundingClientRect().top;

// Getting a specific coordinate relative document 

const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);



// 31:30 Получение объекта по координатам
// document.elementFromPoint(x, y);
/*
const elem = document.elementFromPoint(400, 100);

console.log(elem);
*/


