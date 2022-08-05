document.querySelector('button').onclick = ()=>{
	console.log(document.querySelector('#one').value);
	document.querySelector('button').style.backgroundColor = document.querySelector('#one').value
}