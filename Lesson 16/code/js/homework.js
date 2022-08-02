// lesson 16. Home work.
/*
1. Create a form and work out all events and metods for this this lesson
with it.
2. Add validation of fiiled text fields and symbols counter.
3. Prohibit the text insertion to textarea object this form.
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
/*
Make next checks:
- to an empy value (all fields),
- numbers of symbols, min-max (field name, message),
- correct email emtry (field email)
- add error messages (as string)
*/

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

document.addEventListener('click', placeholderChange())


		
