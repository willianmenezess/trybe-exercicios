// variáveis globais


// criação de funções
const clickBtnSubmitPdefault = () => {
const getBtnSubmit = document.getElementById('btn-submit');
	getBtnSubmit.addEventListener('click', (event) => {
		event.preventDefault();
	});
};

const authorizeImage = () => {
	
}

// EXECUÇÃO DAS FUNÇÕES
window.onload = () => {
  clickBtnSubmitPdefault();
}

