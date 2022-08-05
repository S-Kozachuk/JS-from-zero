let btn = document.querySelector('button');
let input = document.querySelector('#one')

btn.onclick = ()=>{
	console.log(input.value);
}

document.querySelector('#one').oninput = ()=>{
	console.log(input.value);
}