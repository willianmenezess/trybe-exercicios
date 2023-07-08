const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
	return books;
};

const getById = async (id) => {
	const book = await Book.findByPk(id);
	return book;
};

const create = async (title, author, pageQuantity) => {
	const newBook = await Book.create({ title, author, pageQuantity });
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

module.exports = {
	getAll,
	getById,
	create,
	update,
	deleteBook,
};