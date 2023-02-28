import './style.css';
import './functions';
import { fetchApiDog, fetchApiCat, fetchSurprise } from './services/exchange';

const getImg = document.getElementById('img');
const getBtnDog = document.getElementById('btn-dog');
const getBtnCat = document.getElementById('btn-cat');
const getBtnSurprise = document.getElementById('btn-surprise');

getBtnDog.addEventListener('click', (event) => {
  event.preventDefault();
  fetchApiDog()
    .then((dados) => {
    // console.log(dados);
      const { message } = dados;
      getImg.src = message;
    });
});

getBtnCat.addEventListener('click', (event) => {
  event.preventDefault();
  getImg.src = '';
  fetchApiCat()
    .then((dados) => {
    //   console.log(dados);
      const { file } = dados;
      getImg.src = file;
    });
});

getBtnSurprise.addEventListener('click', (event) => {
  event.preventDefault();
  getImg.src = '';
  fetchSurprise()
    .then((dados) => {
    //   console.log(dados);
      if (dados.file) {
        const { file } = dados;
        getImg.src = file;
      }

      if (dados.message) {
        const { message } = dados;
        getImg.src = message;
      }
    });
});
