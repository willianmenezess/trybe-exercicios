const data = require('./database.js');

const fantasyOrScienceFiction = () => {
    // escreva seu código aqui
    return data.books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  };

  console.log(fantasyOrScienceFiction());