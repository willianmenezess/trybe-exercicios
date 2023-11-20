const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
	order: [['title', 'ASC']],
  });
	return books;
};

const getById = async (id) => {
	const book = await Book.findByPk(id);
	return book;
};

const create = async (title, author, pageQuantity, publisher) => {
	const newBook = await Book.create({ title, author, pageQuantity, publisher });
	return newBook;
};

const update = async (id, data) => {
	const [updatedBook] = await Book.update(
		{ ...data },
		{ where: { id } },
	);
	console.log('bookUpdated:', updatedBook);
	return {message: 'Book updated!'};
}

const deleteBook = async (id) => {
	const bookdelete = await Book.destroy({ where: { id } });
	console.log('bookDelete:', bookdelete);
	return {message: 'Book deleted!'};
};

const getByAuthor = async (author) => {
	const book = await Book.findAll({ 
		where: { author }, 
		order: [['title', 'ASC']] });
	return book;
}

module.exports = {
	getAll,
	getById,
	create,
	update,
	deleteBook,
	getByAuthor,
};