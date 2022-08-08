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

	
})