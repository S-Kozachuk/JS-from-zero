// Lesson 15. Method addEventListener, dlegation, events.

// 00:15 
/*
Событие это сигнал браузера о том, что что-то произошло:
клик мышью, прокрутка (scroll), нажатие клавиши на клавиатуре или загрузка страницы, а также многие др.события.
Из можно отслеживать, и когда они (события) возникают - выполнять нужное нам действие.
*/

// 00:30
/*
Отлавливать возникновение события можно с помощью
специального обработчика.

Для любого события можно назначить обработчик.
Обработчик это функция, срабатывающая при наступлении
определённого события. То на какие события будет срабатывать
обработчик определяет веб-разработчик.

Именно благодаря обработчикам JS может реагировать на
действия пользователя.

Существует несколько способов назначить событию обработчик.
*/

// 0:53 1-й способ. Использование атрибута html.
/*
В html-коде для любого объекта (например, кнопки) можно использовать
атрибут. В данном примере это onclick.
При нажатии на кнопку выполниться код. В результате в консоль выведется
сообщение (см. html-код).
*/

// 1:26 2-ой способ. Использование DOM - объекта.
/*
Метод html-атрибута достаточно прост. Но более профессионально
использовать методы, размещаемые в отдельном JS-файле (т.е. здесь).
*/

// Added oblect button in const with button class
// const button = document.querySelector('.button');
//  used oclick event handler

// 1-st code variant (with events handler .onclick)
/*
button.onclick = function () {
    console.log('Click');
}
*/
// 2-nd code variant (as single fucntion)
// Fucntion is calling if onclick event
/*
function showConsole() {
    console.log('Click!');
}
button.onclick = showConsole;
*/
// No used a circle brackets


// 3:05
/*
Главный недостаток описанных ранее способов назначения
обработчика - невозможность повесить несколько обработчиков
на одно и тоже событие.
Каждое последующее назначение обработчика перезапишет предыдущее:
*/
/*
const button = document.querySelector('.button');

button.onclick = function () {
    console.log('Click!');
}

button.onclick = function () {
    console.log('Clack!');
}
*/
// Outoput on window
/*
button.onclick = function (){
	alert('Victory!');
}
*/

// 3:45 Events handler addEventListener/removeEventListener
/* 
Существует основной способ назначения обработчиков при
помощи специальных методов addEventListener и removeEventListener.
Эти методы не перезаписывают друг друга.

Syntax: 
element.addEventListener(event, handler[, options]);
*/

/*
const button = document.querySelector('.button');

button.addEventListener("click", function (e) {
     console.log('Click');
});
button.addEventListener("click", function (e) {
     console.log('Push!');
}, {once: true});
*/

// 5:15 Move handler to separate function
/*
const button = document.querySelector('.button');

function showConsole() {
    console.log("Click");
}

button.addEventListener("click", showConsole);
*/

// 5:50 Method removeEventListener - prupose and application 
/*
Когда мы добавляем обработчик, используя метод addEventListener
на какой-либо объект мы как-будто вешаем на него "прослушку"
или детектор движения. Далее при возникновении указанного
события выполняется функция.

Проблема в том, что такая "прослушка" работает постоянно, излишне
нагружая браузер. Как следствие браузер тратит больше ресурсов
на пользовательском ПК.

Соответственно, если необходимости в "отлавливании" события уже
нет, будет правильнее отключить "прослушку".
Именно для этого и применяется метод removeEventListener.
Метод добавляется внутрь функции после выполнения основного кода.
*/
/*
const button = document.querySelector('.button');

function showConsole() {
    console.log('Press!');
    button.removeEventListener("click", showConsole);
}

button.addEventListener("click", showConsole);
*/

// 7:25 Method addEventListener - options (parameters)
/*
У метода addEventListener есть некоторые параметры.
Существует два способа записи (синтаксиса).
1. После вызова функции сослаться на объект с параметрами.
Объект это константа, в которую записаны параметры.
Пример: 

2. Записать параметры напрямую в тело метода addEventListener,
после вызова функции. Используются фигурные скобки.
Пример (параметры записаны в строку):
button.addEventListener("click", showConsole, {"capture": false});
*/
// First record method
/*
const options ={
    "capture": false, // фаза, на которой должен сработать обработчик 
    "once": false, // если true, тогда обработчик будет 
    // автоматически удалён после выполнения.
    "passive": false // если true, то указывает, что обработчик
    // никогда не вызовет preventDefault()
}
*/
/*
const button = document.querySelector('.button');

function showConsole() {
    console.log('Click');
}

button.addEventListener("click", showConsole, options);
*/

// 9:16 
/*
Метод addEventListener может показаться сложнее, чем onclick.
Но разработчики чаще используют именно его потому, что он 
обладает возможностью "прослушивания" нескольких событий.
Кроме этого существуют события, которые можно "отловить"
только с помощью этого метода.
*/

// 9:40 Event object
/*
Для правильной обработки события могут понадобиться
некоторые детали (подробности) того, что произошло.
Например, не просто "нажатие клавиши" или "клик",
а такие параметры как координаты указателя мыши или данные о том,
какая именно нажата клавиша.

Когда происходит событие, браузер создаёт объект события, записывает
в него детали (параметры) и передаёт его в качестве аргумента функции - обработчику.
*/


// const button = document.querySelector('.button');

// function showConsole (event) {
    // Event type
    // console.log (event.type);
    // Object which handler was triggered
    // console.log (event.target);
    // Object which handler was assigned
    // console.log (event.currentTarget);
    // Coursor position in X axis
    // console.log (event.clientX);
    // Coursor position in Y axis
	// conole.log (event.clientY);
    
    // Все детали события
    // console.log(event);
// }

// button.addEventListener("click", showConsole);
// button.addEventListener('mouseenter', showConsole);

// 12:49 Ascent and dive

const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');


// Ascent
/*
Когда на элементе происходит событие, обработчики сначала срабатывают на нём, 
затем на его родителе, затем выше и так далее, по цепочке предков.
*/
/*
block.addEventListener("click", function (event) {
    console.log('Click on block!'); 
});

blockInner.addEventListener("click", function (e) {
	console.log('Click on 2-nd level block!');
	e.stopPropagation();
});

blockInnerInner.addEventListener("click", function (e) {
	console.log('Click on 3-td level block!');
	
});
*/


// 15:40 Diving
// Before something is ascent, it must a diving
/*
block.addEventListener("click", function (event) {
    console.log('Click on block!');
    //console.log(event.target);
});

blockInner.addEventListener("click", function (event) {
    console.log('Click on 2-nd level block');
}, { "capture": true});

blockInnerInner.addEventListener("click", function (event) {
    console.log('Click on 3-rd level block!');
});
*/

/*
В современной разработке стадия погружения применяется крайне редко.
Как правило события обрабатываются во время всплытия.
*/

// 17:42 Events delegation
/*
Всплытие и перехват событий позволяет реализовать 
один из самых важных приёмов разработки - делегирование.
*/
// 1-st variant, standard.
/*
Навешивание обработчика на каждый объект (in this example - on button)
*/
/*
const button = document.querySelectorAll('.button');
const buttonW = document.getElementById('button2');
console.log(button);
console.log(buttonW);

function showConsole() {
    console.log('Hurray!');
}

button.forEach(item => {
    item.addEventListener("click", showConsole);
});

function removeAdd () {
	button.forEach(button => 
		button.removeEventListener('click',showConsole))
	console.log('Listener was remove')
}

buttonW.addEventListener('click', removeAdd);
*/

// 2-nd variant, delegation (to common parent)
/*
const lesson = document.querySelector('.lesson');

function showConsole() {
    console.log('Hurray!');
}

lesson.addEventListener("click", function (event) {
    if (event.target.closest('.button')) {
        showConsole();
    }
}); 
*/

// 21:25 Drop-down menu (delegation)

const menuBody = document.querySelector('.menu');
document.addEventListener("click", menu);

function menu(event) {
    if (event.target.closest('.menu__button')) {
        menuBody.classList.toggle	('_active');
    }
    if (!event.target.closest('.menu')) {
        menuBody.classList.remove('_active');
    }
}


// 25:25 Default browser action 
/*
Many browser events automatic entail actions

Example:
- click (press) to link initialize follow to new URL 
- clicking to «Send» button in form - sending the entered data to server
- clicking & keeping mouse button over text and her moving in this condition
intiliazing her highlighting


If event processed independently in JS, 
then this browser action don't need.
It can be canceled
*/
/*
const link = document.querySelector('.link');
link.addEventListener("click", function (event) {
    console.log('My action');
    // canceling browser action (follow link)
    event.preventDefault();
});
*/

/*
27:20
Если вместо метода addEventListener используется
конструкция onclick, то для того, чтобы отменить стандартные
действия браузера нужно дописать оператор return false (< значение)
*/
/*
const link = document.querySelector('.link');
link.onclick = function () {
    console.log('Our action');
    // canceling browser action (follow link)
     return false;
}
*/

// 27:30 Parameter passive
/*
Необязательный параметр passive со значением true. 
Применяется для метода addEventListener. Значение 
true сигнализирует браузеру о том, что данный 
обработчик не собирается выполнять preventDefault.

Что такое preventDefault?
preventDefault это метод, отменяющий стандартные (по умолчанию)
действия браузера.

Иногда это может быть очень полезно. Есть некоторые события, 
например touchmove на мобильных устройствах (когда пользователь перемещает палец по экрану),
которое по умолчанию начинает прокрутку. Но мы можем отменить это действие
используя метод preventDefault в обработчике.

Поэтому, когда браузер обнаружит такое событие (например touchmove), он
должен сначала запустить все обработчики. Затем, если метод preventDefault
нигде не вызовется, браузер может начать прокрутку.

Запуск обработчиков может вызвать нежелательные задержки в пользовательском
интерфейсе (UI).

Параметр passive со значением true (passive: true) сообщает браузеру, что 
обработчик не собирается выполнять прокрутку. Тогда браузер начинает её 
немедленно, обеспечивая максимально плавный интерфейс, параллельно обрабатывая
событие.

В некоторых браузерах (например в Firefox и Chrome) параметр passive по умолчанию 
имеет значение true для событий touchstart и touchmove.
*/
/*
const link = document.querySelector('.link');

link.addEventListener("click", function (event) {
	console.log('My action');
    // canceling browser action (follow link)
    event.preventDefault();
}, { "passive": true });
*/

// 28:50 Basic mouse events
// Types mouse events

// Mouse events separation two categories: simple and comprehensive

/*
Simple events.
Наиболее часто используемые простые события:
mousedown / mouseup - кнопка мыши нажата / отпущена над элементом,
mouseover / mouseout - курсор мыши появляется и уходит с него,
mousemove - каждое движение мыши над элементом генерирует это событие,
contextmenu - вызывается при попытке открытия контекстного меню (обычно
нажатием правой кнопки мыши). Это не совсем событие т.к. может вызываться 
специальной клавишей на клавиатуре.
*/ 

/*
Комплексные события.
click - вызывается при mousedown, а затем mouseup над одним
и тем же элементом, при условии использования основной кнопки мыши.
dblclick - вызывается двойным кликом по элементу.

Комплексные события состоят из простых. Поэтому, в теории можно 
обойтись без них. Но работать с ними очень удобно.
*/

// 30:30 Example of using mouse events. Clicking mouse buttons.
/*
const link = document.querySelector('.button');

link.addEventListener("mousedown", function (event) {
    console.log(`Clicked button ${event.which}`);
});

link.addEventListener("click", function (event) {
    console.log('Clicked the main mouse button');
});

link.addEventListener("contextmenu", function (event) {
    console.log('Called the context menu (right mouse button)');
});
*/
/*
Дополнительный параметр объекта события which.
Возвращает цифру, соответствующую номеру нажатой кнопки мыши:

event.which = 1 - Нажата основная кнопка мыши (по умолчанию - левая)
event.which = 2 - Нажата средняя кнопка мыши (колесо прокрутки)
event.which = 3 - Нажата не основная кнопка мыши (по умолчанию - правая)
*/

// 32:30 Mouse moves. Coordinates clientX/Y, pageX/Y
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mousemove", function (event) {
    blockForMouse.innerHTML = 
    `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});
*/

// 33:45 Mouse hover. Events mouseover/mouseout.
/*
Событие mouseover происходит в момент, когда курсор оказывается над элементом.
А событие mouseout - в момент, когда курсор уходит с элемента.
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function () {
    blockForMouse.innerHTML = `Cursor over the element`;
});

blockForMouse.addEventListener("mouseout", function () {
    blockForMouse.innerHTML = `Cursor has left of the element`;
});
*/

// 34:50 Events0 mouseover/mouseout and relatedTarget
/*
Эти события являются особенными, потому что у них есть свойство 
relatedTarget. Оно дополняет target.
Когда мышь переходит с одного элемента на другой, то один из них будет
target, а другой relatedTarget.

Для события mouseover:
event.target - это элемент, на который перешёл курсор.
event.relatedTarget - это элемент с которого курсор ушёл (relatedTarget -> target).

Для события mouseout наоборот:
event.target - это элемент, с которого курсор ушёл.
event.relatedTarget - это элемент, на который курсор перешёл (target -> relatedTarget).
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});

blockForMouse.addEventListener("mouseout", function (event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});
*/

// 36:15 Effect "ascent" at events mouseover and mouseout
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
    console.log(`Cursor over the elements`);
});

blockForMouse.addEventListener("mouseout", function (event) {
    console.log(`Cursor has left of the element`);
});
*/

// 37:15 Events mouseenter and mouseleave
/*
Важные отличия 
1) Переходы внутри элемента, на его потомки и с них, не считаются.
2) События mouseenter / mouse leave не всплывают
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseenter", function (event) {
    console.log (`Cursor over the element`);
});

blockForMouse.addEventListener("mouseleave", function (event) {
    console.log (`Cursor has left of the document`);
});
*/

// 38:25 Delegation events of mouse hover
/*
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function (event) {
    let target = event.target.closest('span');
    // switching not to a <span> - ignore
    if (!target) return;
    target.style.cssText = 'background-color: #77608d;';
});

blockForMouse.addEventListener("mouseout", function (event) {
    let target = event.target.closest('span');
    // swithing not to a <span> - ignore
    if (!target) return;
    target.style.cssText = '';
});
*/

// 40:40 Changing events on mouseenter and mouseleave
/*
При использовании событий mouseenter и mouseleave 
переходы внутри элемента на дочерние объекты и обратно не считаются и не учитываются.
Отслеживаются только события, соответствующие переходу за пределы
объекта и наоборот: извне в объект. Это значит, что
события mouseenter и mouseleave не "всплывают". Из этого следует, что приведённый
ниже код работать не будет.
*/
/*
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseenter", function (event) {
    let target = event.target.closest('span');
    // переход не на <span> - игнорировать
    if (!target) return;
    target.style.cssText = 'background-color: #77608d;';
});
blockForMouse.addEventListener("mouseleave", function (event) {
    let target = event.target.closest('span');
    // переход не на <span> - игнорировать
    if (!target) return;
    target.style.cssText = '';
});
*/

// 41:10 Drag`n`Drop (dragging)
/*
const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener('mousedown', function (event) {
    
    let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
    let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;
    
    let gragItemSizes = {
        width: gragItem.offsetWidth,
        height: gragItem.offsetHeight
    }

    let gragFieldSizes = {
        left: gragField.getBoundingClientRect().left + scrollX,
        top: gragField.getBoundingClientRect().top + scrollY,
        right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
        bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
    }
    
    gragItem.style.position = 'absolute';
    gragItem.style.zIndex = 1000;
    document.body.append(gragItem);
    
    moveItem(event.pageX, event.pageY);
    
    function moveItem(pageX, pageY) {
        let currentX = pageX - coordsItemX;
        let currentY = pageY - coordsItemY;
        
        if (
			currentX + gragItemSizes.width <= gragFieldSizes.right && 
			currentX >= gragFieldSizes.left
		) {
			gragItem.style.left = `${currentX}px`;
		} else {
			if (currentX + gragItemSizes.width > gragFieldSizes.right) {
				gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
			}
			if (currentX < gragFieldSizes.left) {
				gragItem.style.Left = `${gragFieldSizes.left}px`;
			}
		}
		if (
			currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
			currentY >= gragFieldSizes.top
		) {
			gragItem.style.top = `${currentY}px`; 
		} else {
			if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
				gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
			}
			if (currentY < gragFieldSizes.top) {
				gragItem.style.top = `${gragFieldSizes.top}px`;
			}
		}
    }

	let currentDroppable = null;

	function onDragItem(event) {
		moveItem(event.pageX, event.pageY);

		gragItem.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		gragItem.hidden = false;

		if (!elemBelow) return;
		let droppableBelow = elemBelow.closest('.drag-field__point');

		if (currentDroppable !== droppableBelow) {
			if (currentDroppable) {
				currentDroppable.classList.remove('_active');
				gragItem.classList.remove('_active');
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) {
				currentDroppable.classList.add('_active');
				gragItem.classList.add('_active');
			}		
		}
	}
	document.addEventListener('mousemove', onDragItem);

	document.addEventListener('mouseup', function (){
		document.removeEventListener('mousemove', onDragItem);
	}, {'once': true});
});

gragItem.addEventListener('dragstart', function (event) {
	event.preventDefault();
});
*/

// 41:53 События клавиатуры
/*
Основные события:
    keydown - происходит при нажатии клавиши
    keyup - происходит при отпускании клавиши
*/

// Свойства события event.code и event.key
/*
document.addEventListener("keydown", function (event) {
    console.log (`Нажата клавиша ${event.code} (${event.key})`);
});

document.addEventListener("keyup", function (event) {
    console.log (`Клавиша отпущена ${event.code} (${event.key})`);
});
*/

// 43:25
/*
При переключении раскладки при нажатии на клавишу, например G 
мы получим другой символ. Именно он станет новым значением event.key,
при этом event.code останется с таким же значением (KeyG).
*/

// 43:55 Отслеживание сочетания клавиш
/*
В примере ниже фукция отслеживает нажатие сочетания клавиш 
Z и Ctrl или Meta (для ОС Mac). Выбранная раскладка (язык)
значения не имеет, потому что используется свойство event.code.
*/
/*
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        console.log('Отмена действия!');
    }
}); 
*/

// 44:55 Автоповтор
/*
При нажатии у удержании клавиши возникает автоповтор: событие keydown 
срабатывает снова и снова. Когда клавишу отпускают,
срабатывает событие keyup. 
Из этого следует, что ситуация при которой событие keydown происходит много раз,
а событие keyup сорабатывает только однажды абсолютно нормальна.
Для таких событий, вызванных автоповтором у объекта события свойство
event.repeat имеет значение true.
*/
/*
document.addEventListener('keydown', function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
    console.log(event.repeat);
}); 
*/

// 45:44 Закрепление изученного на примере
/*
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);

txtItem.addEventListener("keydown", function (event) {
	if(event.repeat) txtSetCounter();
});


function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}
*/

// 48:37 Модернизация выпадающего меню (21:25, 299 строка).
/*
const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
    if (event.target.closest('.menu__button')) {
        menuBody.classList.toggle('_active');
    }
    if (!event.target.closest('.menu')) {
        menuBody.classList.remove('_active');
    }
}

document.addEventListener('keyup', function (event) {
   // Получение кода клавиши Escape (нажать на клавиатуре)
    if(event.code==='Escape'){
        menuBody.classList.remove('_active');
    }
});
*/

// 49:40 Событие при прокрутке (scroll)
/*
Количество прокрученных пикселей по вертикали scrollY или pageYOffset (устарел).
Количество прокрученных пикселей по горизонтали scrollX или pageXOffset (устарел).
*/
/*
window.addEventListener('scroll', function (event) {
    console.log(`${scrollY}px`);
});
*/

// 50:40 Предотвращение прокрутки
/*
Прокрутку нельзя предотвратить используя метод event.preventDefault() в 
обработчике scroll, из-за того что он срабатывает после того, как
прокрутка уже произошла.

Можно предотвратить прокрутку, используя event.preventDefault() на событии,
которое вызывает прокрутку. Например на событии keydown для клавиш 
pageUp и pageDown.

Способов инмциализации прокрутки много. Наиболее надёжный - использовать CSS 
(свойство overflow, значение hidden).

*/

// 51:15 Применение события прокрутки (scroll)
/*
Событие прокрутки (scroll) позволяет реагировать на прокрутку страницы или
элемента. Благодаря этому можно реализовать множествл полезных сценариев.

Например:
- показать/скрыть дополнительные элементы управления или информации,
основываясь на том, в какой части документа находится пользователь 
(анимация при прокрутке или "ленивая" подгрузка).
- подгрузить данные, когда пользователь прокручивает страницу вниз, до конца.
Бесконечная прокрутка.

Наиболее интересным решением подобных задач будет использование метода
intersectionObserver. Он позволяет веб-приложениям асинхронно следить за 
изменением пересечения элемента с его родителем или областью видимости
документа.
*/

// 52:20 События загрузки страницы
/*
1. DOMContentLoaded - сработает, после полной загрузки браузером HTML. 
Значит, что полностью построено DOM-дерево. Но внешние ресурсы, например изображения
и файлы стилей могут быть всё ещё не загружены.
2. load - означает, что браузер загрузил HTML и все внешние ресурсы (картинки, стили и т.д.)
3. beforeunload / unload - срабатывают, когда пользователь покидает страницу (сайт)
*/

/*
document.readyState - свойство, отслеживающее состояние загрузки.

Имеет три возможных значения:
"loading" - документ загружается;
"interactive" - документ был полностью прочитан;
"complete" - документ был полностью прочитан и 
все ресурсы (например изображения) были загружены.
*/

// 53:25 Пример работы событий загрузки страницы
/*
В данном примере используются (навешиваются) 
сразу несколько событий.
*/
// Событие DOMContentLoaded срабатывает на объекте document
//document.addEventListener("DOMContentLoaded", readyDom);

// Событие Load срабатывает на объекте window
//window.addEventListener("load", readyLoad);
/*
function readyDom() {
    const image = document.querySelector(".image");
    console.log(document.readyState);
    console.log('DOM загружен!');
    console.log(image.offsetWidth);
}
function readyLoad() {
    console.log(document.readyState);
    const image = document.querySelector(".image");
    console.log('Страница загружена!');
    console.log(image.offsetWidth);
}
*/

// 55:30 Событие beforeunLoad срабатывает на объекте window
/*
window.addEventListener("beforeunload", beforeUnLoad);

function beforeUnLoad(event) {
    // Отменить стандартное поведение браузера
    event.preventDefault();
    // Chrome требует установки возвратного (пустого) значения 
    event.returnValue = '';
}
*/

// 57:00 Событие unload срабатывает на объекте window
/*
Позволяет выполнять действия после того, как пользователь покинул
страницу (вкладку) в браузере.
Например отправка статистики в фоновом режиме.
Подробнее: https://w3c.github.io/beacon
*/
/*
window.addEventListener("unload", function (e) {
    //navigator.sendBeacon(url, data)
});
*/

