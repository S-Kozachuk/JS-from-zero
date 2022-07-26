// Home work.

/*
Написать форму поиска, открывающуюся по клику на иконку.
Закрывающуюся по клику на любое место страницы, кроме самой формы.
Также форма должна закрываться по нажатию клавиши Esc на клавиатуре.
Для поля ввода поискового запроса добавить счётчик символов.
*/

// Remove intersection document with loup image. Using a method closest
let loupe = document.querySelector('.search-img');
let searchForm = document.querySelector('.search-field');
const txtItemLimit = searchForm .getAttribute('maxlength');
const txtCounter = document.querySelector('.search-counter');
const txtCounterOut = document.querySelector('.search-counter span');
let crossIcon = document.querySelector('.search-form::before')
console.log(crossIcon)

loupe.addEventListener('click', searchFieldOpen);
document.addEventListener('click', searchFieldClose);
document.addEventListener('keydown', keyFieldClose);
searchForm.addEventListener("keyup", keyCounter);
searchForm.addEventListener("keydown", keyNoRepeat);

function searchFieldOpen() {
	searchForm.classList.add('active');
	txtCounter.classList.add('active');
	loupe.classList.add('active');
	console.log('Open');
}

function searchFieldClose(e) {
	if(e.target !== loupe && e.target !== searchForm) {
		searchForm.classList.remove('active');
		txtCounter.classList.remove('active');
		loupe.classList.remove('active');
		searchForm.value = '';
		keyCounter();
	}
}

function keyFieldClose(e) {
	if(e.code == 'Escape') {
		searchForm.classList.remove('active');
		txtCounter.classList.remove('active');
		searchForm.value = '';
	}
}

function keyCounter() {
	const txtCounterResult = txtItemLimit - searchForm.value.length;
	txtCounterOut.innerHTML = txtCounterResult;
}

function keyNoRepeat(e) {
	if(e.repeat) keyCounter();
}