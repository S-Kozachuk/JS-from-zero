document.addEventListener("DOMContentLoaded", () => {
	'use strict';

	const form = document.querySelector('form');
	const pass = document.querySelector('.formPass');
	const passConf = document.querySelector('.formPassConf');
	const check = document.querySelector('.form-check-input');
	let isSubmit = false;

	const regExpName = /^[A-z0-9][a-z0-9_-]{3,16}$/;
	const regExpEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
	const regExpPass = /^(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

	const submit = ()=> {
		alert('Data was send');
		for(let elem of form.elements) {
			if(
				!elem.classList.contains('btn') &&
				!elem.classList.contains('form-check-input')
			) {
				elem.value = "";
			}
			
			if(elem.classList.contains('form-check-input')){
				elem.checked = false;
			}
		}
	};

	const validateElem = (elem)=> {
		if (elem.name == 'username'){
			if(!regExpName.test(elem.value) && elem.value !== ''){
				elem.nextElementSibling.textContent = 'Enter the correct user name';
				if(elem.value.length < 3 || elem.value.length > 16) {
					elem.nextElementSibling.textContent = "From 3 to 16 symbols"
				}
				isSubmit = false;
			} else {
				elem.nextElementSibling.textContent = '';
				isSubmit = true;
			}
		}
		if (elem.name == 'email'){
			if(!regExpEmail.test(elem.value) && elem.value !== ''){
				elem.nextElementSibling.textContent = 'Enter the correct mail';
				if(elem.value.length < 3 || elem.value.length > 16) {
					elem.nextElementSibling.textContent = "From 3 to 16 symbols"
				}
				isSubmit = false;
			} else {
				elem.nextElementSibling.textContent = '';
				isSubmit = true;
			}
		}
		if (elem.name == 'password') {
			if(!regExpPass.test(elem.value) && elem.value !== ''){
				pass.nextElementSibling.textContent = "Enter correct password";
				passConf.nextElementSibling.textContent = "Enter correct password";
				if(elem.value.length < 8) {
					elem.nextElementSibling.textContent = "From 8 symbols"
				}
				if(pass.value !== passConf.value && passConf.value !== ''){
					elem.nextElementSibling.textContent = "Password didn't coincidence";
				}
				isSubmit = false;
			} else {
				elem.nextElementSibling.textContent = '';
				isSubmit = true;
			}
			console.log(elem.value)	
		}
		if (elem.name == 'passwordConfirmation') {
			if(pass.value !== passConf.value && passConf.value !== ''){
				pass.nextElementSibling.textContent = "Password didn't coincidence";
				passConf.nextElementSibling.textContent = "Password didn't coincidence";
				isSubmit = false;
			} else {
				pass.nextElementSibling.textContent = '';
				passConf.nextElementSibling.textContent = '';
				isSubmit = true;
			}
			console.log(elem.value)	
		}
	}
	
	for(let elem of form.elements) {
		if(!elem.classList.contains('form-check-input') && elem.tagName != 'BUTTON') {
			elem.addEventListener('blur', ()=>{
				validateElem(elem);
			});
		}
	}

	form.addEventListener('submit', (e)=> {
		e.preventDefault();
		console.dir(form);
		for(let elem of form.elements) {
			if(!elem.classList.contains('form-check-input') && elem.tagName != 'BUTTON') {
				if(elem.value == '') {
					elem.nextElementSibling.textContent = 'This field didnt fill';
					isSubmit = false;
				} else {
					elem.nextElementSibling.textContent = '';
					isSubmit = true;
				}
			}
		}
		if(isSubmit){
			if(check.checked) {
				submit();
			}
			else {
				alert('Accept the terms')
			}
			
		}
	});
});