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
	
// Show error messages function
function checkFillFileds() {
	basicForm.addEventListener('submit', (e) => {
		let basicFormArr = Array.from(basicForm);
		let currentArr = [];
		console.log(basicFormArr);
		
		function arrFiltering() {
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
				console.log(fieldValue);
				let errorMessage = document.querySelector('.main-form__error');
				console.log(errorMessage);
				function showErrorMessage(){
					if(fieldValue == "" && !errorMessage) {
						console.log("Fill this field");
						basicForm[index].parentElement.insertAdjacentHTML(
							'beforeend',
							`<div class="main-form__error">Enter this field</div>`
						);
						e.preventDefault();
					}
				}
				showErrorMessage();
				currentArr[index].addEventListener('focus', ()=> {
					if(currentArr[index].nextElementSibling) {
						currentArr[index].nextElementSibling.remove();
					}
				});
				/*
				currentArr[index].addEventListener('blur', ()=> {
					if(fieldValue == "") {
						showErrorMessage();
					}
				});
				*/
			});
			
		}
		
		showCheckMessage();
	});
}
checkFillFileds();
