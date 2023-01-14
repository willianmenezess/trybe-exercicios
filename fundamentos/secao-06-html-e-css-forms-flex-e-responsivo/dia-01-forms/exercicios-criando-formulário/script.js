// variáveis globais
const getFullName = document.getElementById('name-input');
const getEmail = document.getElementById('email-input');
const getTextArea = document.getElementById('informations');


// criação de funções

const limitCharacter = () => {
  const invalidName = getFullName.value.length > 40 || getFullName.value.length < 10;
  const invalidEmail = getEmail.value.length > 50 || invalidEmail.value.legth < 10;
  const invalidText = getTextArea.value.length > 500;
  if (invalidText || invalidEmail || invalidName) {
		return false;
	} else {
		return true;
	}
};

const clickBtnSubmitPdefault = () => {
const getBtnSubmit = document.getElementById('btn-submit');
	getBtnSubmit.addEventListener('click', () => {
		// event.preventDefault();
		const verification = limitCharacter();
		if (verification === false) {
			alert ('Dados Inválidos');
		} else {
			alert ('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
		}
	});
};

// EXECUÇÃO DAS FUNÇÕES
window.onload = () => {
  clickBtnSubmitPdefault();
};

