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


/*
let fieldPlaceholder = fieldName.placeholder;
fieldName.addEventListener('focus', ()=> {
	fieldName.placeholder = '';
})
fieldName.addEventListener('blur', ()=> {
	fieldName.placeholder = fieldPlaceholder;
})
*/
function placeholder() {
	
	let basicFormArr = Array.from(basicForm);
	basicFormArr.forEach(elem => {
		let index = 1;
		let fieldPlaceholder = fieldName.placeholder;
		elem.addEventListener('focus', ()=> {
			elem.placeholder = '';
			index ++;
			console.log(index);
		});
		elem.addEventListener('blur', ()=> {
			elem.placeholder = fieldPlaceholder;
		});
	});
}

document.addEventListener('click', placeholder())


		
