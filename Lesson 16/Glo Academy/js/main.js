document.addEventListener("DOMContentLoaded", () => {
	'use strict';

	const form = document.querySelector('form');
	const pass = document.querySelector('.formPass');
	const passConf = document.querySelector('.formPassConf');
	const check = document.querySelector('.form-check-input');
	let isSubmit = false;

	const regExpName = /^[a-z0-9_-]{3,16}$/;
	const regExpEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
	const regExpPass = /^(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

	const submith = ()=>{
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

	form.addEventListener('submit', (e)=> {
		e.preventDefault();
		console.dir(form);
		for(let elem of form.elements) {
			if(!elem.classList.contains('form-check-input') && elem.tagName != 'BUTTON') {
				if(elem.value == '') {
					console.log(elem);
				}
			}
		}
	});
});