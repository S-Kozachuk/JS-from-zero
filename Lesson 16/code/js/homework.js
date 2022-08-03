// lesson 16. Home work.
/*
1. Create a form and work out all events and metods for this this lesson
with it.
2. Add validation of fiiled text fields and symbols counter.
3. Prohibit the text insertion to textarea object this form.
*/

/*
Make next checks:
- to an empy value (all fields),
- numbers of symbols, min-max (field name, message),
- correct email emtry (field email)
- add error messages (as string)
*/

const basicForm = document.forms.basic,
		 fieldName = basicForm.field_1,
		fieldEmail = basicForm.field_2,
		fieldPhone = basicForm.field_3,
	  fieldMessage = basicForm.field_4,
	  choiceGender = basicForm.choiceGender,
	   choiceHabit = basicForm.checkHabits,
		experience = basicForm.selectAge;

// Remove placeholder to click on fieild (focus)
// Basic variant (for 2-th fields)
/*
let namelPlaceholder = fieldName.placeholder;
fieldName.addEventListener('focus', ()=> {
	fieldName.placeholder = '';
});
fieldName.addEventListener('blur', ()=> {
	fieldName.placeholder = namelPlaceholder;
});

let emailPlaceholderE = fieldEmail.placeholder;
fieldEmail.addEventListener('focus', ()=> {
	fieldEmail.placeholder = '';
});
fieldEmail.addEventListener('blur', ()=> {
	fieldEmail.placeholder = emailPlaceholderE;
});
*/
// 2-nd variant (dynamics)
function placeholderChange() {
	let placeholdersArr = [
		"What's your name",
		"Your email",
		"Your phone number",
		"Tell about you"
	];
	//console.log(placeholdersArr);
	let basicFormArr = Array.from(basicForm);
	basicFormArr.forEach((elem, index) => {
		elem.addEventListener('focus', ()=> {
			elem.placeholder = '';
			// console.log(index);
		});
		elem.addEventListener('blur', ()=> {
			elem.placeholder = placeholdersArr[index];
		});
	});
}
setTimeout(placeholderChange, 3000);
	
// Show error message fuction
// 1-st variant (check the all fields)
/*
function checkFillFileds() {
	basicForm.addEventListener('submit', (e)=>{
		let basicFormArr = Array.from(basicForm);
		console.log(basicFormArr);
		let fieldValue = [];
		for(i=0;i<4;i++) {
			fieldValue = basicForm[i].value;
			console.log(fieldValue);
			if(fieldValue == "") {
				console.log("Fill this field");
				basicForm[i].parentElement.insertAdjacentHTML(
					'beforeend',
					`<div class="main-form__error">Enter this field</div>`
				);
				e.preventDefault();
			};
		};
	});
}
checkFillFileds();
*/

// 2-nd variant (check only select fields(after filtering))
// forEach cycle version, callback (nonworking)
/*
function checkFillFileds() {
	basicForm.addEventListener('submit', (e) => {
		let basicFormArr = Array.from(basicForm);
		console.log(basicFormArr);
		
		function arrFiltering(h) {
			let currentArr = basicFormArr.filter((item, index) =>{
				if(index !== 4 && index !== 5 && index !== 6 && index !== 9) {
					return item;
				}
			});
			console.log(currentArr);
		};
		
		function showCheckMessage(h) {
			arrFiltering(h);
			let fieldValue = [];
			h.forEach((elem,index) => {
				fieldValue = basicForm[index].value;
				if(fieldValue == "") {
					console.log("Fill this field");
					basicForm[index].parentElement.insertAdjacentHTML(
						'beforeend',
						`<div class="main-form__error">Enter this field</div>`
					);
					e.preventDefault();
				}
			});
		}

		showCheckMessage(arrFiltering);
	});
}
checkFillFileds();
*/

function checkFillFileds() {
	basicForm.addEventListener('submit', (e) => {
		let basicFormArr = Array.from(basicForm);
		console.log(basicFormArr);
		let currentArr = basicFormArr.filter((item, index) =>{
			if(index < 4) {
				return item;
			}
		});
		console.log(currentArr);
		let fieldValue = [];
		currentArr.forEach((elem,index) => {
			fieldValue = currentArr[index].value;
			if(fieldValue == "") {
				console.log("Fill this field");
				basicForm[index].parentElement.insertAdjacentHTML(
					'beforeend',
					`<div class="main-form__error">Enter this field</div>`
				);
				e.preventDefault();
			}
		});
	});
}
checkFillFileds();
