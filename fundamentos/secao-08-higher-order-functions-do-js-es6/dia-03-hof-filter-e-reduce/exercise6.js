const data = require('./database.js');

// 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.
const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  // escreva seu código aqui
  const getBook = data.books.filter((book) =>
    book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.');
  return getBook[0].name;
};

console.log(authorWith3DotsOnName());