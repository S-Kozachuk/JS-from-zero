let btn = document.querySelector('button');
let btnPush = document.querySelector('#i2');
let btnOne = document.querySelector('#btn-1');
let btnTwo = document.querySelector('#btn-2');
let input = document.querySelector('#one');
let output = document.querySelector('span');

btn.onclick = ()=>{
	console.log(input.value);
}

document.querySelector('#one').oninput = ()=>{
	console.log(input.value);
	output.innerHTML = input.value;
}

btnOne.onclick = () => {
		console.log(btnPush.value);
		let myCheckBox = btnPush;
		if (myCheckBox.checked) {
			console.log('Selected');
		} else {
			console.log('Not selected');
		}
}

btnTwo.onclick = (e)=>{
	// let textField = document.querySelector('#two');
	// console.log(textField.value);
	// textField.value = 'Test';
	e.preventDefault();
	let form = document.querySelector('form');
	console.log(form);
	console.log(form.elements.two.value);
	console.log(form.elements.three.value);
}