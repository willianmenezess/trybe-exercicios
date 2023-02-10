
// Importa o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';
import './style.css'

// cria const para a imagem, o nome e o botão do html (p/ acessá-los)

const img = document.getElementById('image');
const nameP = document.getElementById('name');
const button = document.getElementById('button');

// aqui vc insere o token de acesso obtido no site da API
const ACCESS_TOKEN = '10230756994167687';

// Essa é a URL base da API. Note que, ao final, ela insere o
// token de acesso. Dessa forma, não precisaremos alterar a URL
// caso o token mude
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

// A API possui 731 heroínas e heróis cadastrados. Porém, para
// simularmos um erro na API por não encontrar o id informado,
// vamos colocar que a quantidade máxima de ids é superior ao
// correto.

const MAX_HEROES = 1000;

// Função simples para retornar um valor inteiro aleatório
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
    // prevent defaut para evitar que recarregue a página
    event.preventDefault()
    const id = randomId();

    // Faremos o fetch utilizando nossa URL e o id gerado acima
    fetch(`${BASE_URL}/${id}`)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            nameP.innerHTML = data.name;
            img.src = data.image.url;
        })
        // se houver erro, tratamos com o catch
        .catch((error) => {
            Swal.fire({
                title: 'Heroi não encontrado',
                text: error.message,
                icon: 'error',
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> OK!',
            })
        });
});