let btn = document.querySelector('button');
let btnOne = document.querySelector('#btn-1')
let input = document.querySelector('#one');
let output = document.querySelector('span');

btn.onclick = ()=>{
	console.log(input.value);
}

document.querySelector('#one').oninput = ()=>{
	console.log(input.value);
	output.innerHTML = input.value;
}

