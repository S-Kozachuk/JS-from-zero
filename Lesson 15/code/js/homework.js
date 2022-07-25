// Home work.

/*
Написать форму поиска, открывающуюся по клику на иконку.
Закрывающуюся по клику на любое место страницы, кроме самой формы.
Также форма должна закрываться по нажатию клавиши Esc на клавиатуре.
Для поля ввода поискового запроса добавить счётчик символов.
*/

document.addEventListener('click', (e)=>{
	let searchForm = document.querySelector('.search-form');
	let status = false;
	searchForm.classList.add('active');
	// Add close area by click
	if(status){
		searchForm.classList.remove('active');
	}
})