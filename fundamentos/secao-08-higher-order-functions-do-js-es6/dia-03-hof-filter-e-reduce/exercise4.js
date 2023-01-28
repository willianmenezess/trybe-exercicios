const data = require('./database.js');

// 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  const fantasyOrScienceFictionAuthors = () => {
    // escreva seu código aqui
    const getBooks = data.books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    const getNames = getBooks.map((book) => book.author.name);
    return getNames.sort();
  };

  console.log(fantasyOrScienceFictionAuthors());