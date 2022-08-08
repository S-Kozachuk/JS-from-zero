document.addEventListener("DOMContentLoaded", () => {
	'use strict';

	const form = document.querySelector('form');
	const pass = document.querySelector('.formPass');
	const passConf = document.querySelector('.formPassConf');
	const check = document.querySelector('.form-check-input');
	let isSubmit = false;

	const regExpName = /^[a-z0-9_-]{3,16}$/;
	const regExpEmail = /^
})