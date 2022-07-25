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

loupe.addEventListener('click', ()=> {
	searchForm.classList.add('active');
	console.log('Open');
	console.log(thisElem);
});

document.addEventListener('click', (e)=> {
	if(e.target !== loupe && e.target !== searchForm) {
		searchForm.classList.remove('active');
	}
});

/*
document.addEventListener('click', ()=> {
	searchForm.classList.remove('active');
});
*/