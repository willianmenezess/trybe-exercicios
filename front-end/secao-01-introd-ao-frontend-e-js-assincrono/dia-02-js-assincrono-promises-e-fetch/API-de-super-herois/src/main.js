import './style.css';
import Swal from 'sweetalert2';
import { fetchDados } from './services/exchange';
import { getRandomNumber } from './functions';

const getImg = document.getElementById('image');
const getName = document.getElementById('name');
const getBtn = document.getElementById('button');

getBtn.addEventListener('click', (event) => {
  const aleatoryId = getRandomNumber();
  event.preventDefault();
  fetchDados(aleatoryId, '10230756994167687')
    .then((dados) => {
      const { name, image } = dados;
      // console.log(name);
      // console.log(image);
      getName.innerHTML = name;
      getImg.src = image.url;
    })
    .catch((error) => {
      Swal.fire({
        title: 'Herói não encontrado',
        text: error.message,
        icon: 'error',
      });
    });
});
