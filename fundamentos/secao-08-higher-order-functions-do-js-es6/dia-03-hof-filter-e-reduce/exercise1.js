const data = require('./database.js');

// 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.
const fantasyOrScienceFiction = () => {
    // escreva seu código aqui
    return data.books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  };

  console.log(fantasyOrScienceFiction());