// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const clickAhref = () => {
  HREF_LINK.addEventListener('click', (event) => {
		event.preventDefault();
	});
};
clickAhref();

const clickCheckBox = () => {
  INPUT_CHECKBOX.addEventListener('click', (event) => {
		event.preventDefault();
	});
};
clickCheckBox();

const keyPressEvent = () => {
	INPUT_TEXT.addEventListener('keypress', (event) => {
		const character = event.key;
		(character !== 'a') ? event.preventDefault() : null ;
	});
};
keyPressEvent();