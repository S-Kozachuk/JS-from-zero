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

// Gender & habits choice manipulation 
choiceGender[1].checked = true;
choiceHabit[0].checked = true;
choiceHabit[1].value = 'test';
		

		
