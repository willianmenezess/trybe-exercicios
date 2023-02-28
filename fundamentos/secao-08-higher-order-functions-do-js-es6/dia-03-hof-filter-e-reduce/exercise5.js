const data = require('./database.js');

// 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  const oldBooks = () => {
    // escreva seu código aqui
    const getBooks60 = data.books.filter((book) => book.releaseYear < 1963 );
    const getName = getBooks60.map((book) => book.name);
    return getName;
  };

  console.log(oldBooks());
  