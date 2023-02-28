const data = require('./database.js');

// 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

const oldBooksOrdered = () => {
    // escreva seu código aqui
    const get60 = data.books.filter((book) => book.releaseYear < 1963);
    const order60 = get60.sort((a, b) => a.releaseYear - b.releaseYear);

    return order60
}

console.log(oldBooksOrdered());