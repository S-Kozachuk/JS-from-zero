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

let currentArr = [],
	fieldValue,
	fieldError = false,
	fieldItem = document.getElementsByName('error');



// Dynamic placeholder
function placeholderChange() {
	let placeholdersArr = [
		"What's your name",
		"Your email",
		"Your phone number",
		"Tell about you"
	];
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

Array.from
	
function arrFiltering() {
	let basicFormArr = Array.from(basicForm);
	currentArr = basicFormArr.filter((item, index) =>{
		if(index < 4) {
			return item;
		}
	});
	console.log(currentArr);
};

function showCheckMessage() {
	arrFiltering();
	currentArr.forEach((elem, index) => {
		fieldValue = currentArr[index].value;
		console.log(fieldItem.length);
			if(fieldValue == "") {
				basicForm[index].parentElement.insertAdjacentHTML(
					'beforeend',
					`<div class="main-form__error" name='error'>Enter this field</div>`
				);
				fieldError = false;
			} else {
				fieldError = true;
			}
		currentArr[index].addEventListener('focus', ()=> {
			if(currentArr[index].nextElementSibling) {
				currentArr[index].nextElementSibling.remove();
			} 
		});
				
		currentArr[index].addEventListener('blur', ()=> {
			if(fieldValue !== "") {
				currentArr.nextElementSibling.remove();
			}
		});
				
	});	
};

basicForm.addEventListener('submit', (e) => {
	showCheckMessage();
	if(fieldError == false) {
		e.preventDefault();
	}
	console.log(fieldError);
});

// Removed the repeteatly show error message