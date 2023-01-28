const data = require('./database.js');

// 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.
const expectedResult = [ 'Fundação', 'Duna' ];

const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
  const getBooks = data.books.filter((book) => book.author.birthYear === birthYear);
  const arrayNames = getBooks.map((book) => book.name);
  return arrayNames;
};

const result = booksByAuthorBirthYear(1920);
console.log(result);