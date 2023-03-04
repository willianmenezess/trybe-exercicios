import './style.css'
import validator from 'validator';

const getInput = document.getElementById('value');
const getSelect = document.getElementById('option');
const getBtn = document.getElementById('btn');
const getP = document.getElementById('saída')

getBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const objeto = {
        email: validator.isEmail(getInput.value),
        cpf: validator.isTaxID(getInput.value,'pt-BR'),
        horário: validator.isTime(getInput.value)
    }
    getP.innerHTML = `A validação retorna ${objeto[getSelect.value]}`;

    // console.log(getInput.value);
    // console.log(getSelect.value);
    // console.log(validator.isTaxID('willianmenezes','pt-BR'));
    // console.log(validator.isTime('23:58',['hour24']));
});
