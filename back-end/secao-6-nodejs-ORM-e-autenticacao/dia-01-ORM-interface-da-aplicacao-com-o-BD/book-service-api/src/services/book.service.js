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
	console.log(updatedBook);
	return {message: 'Book updated!'};
}

module.exports = {
	getAll,
	getById,
	create,
	update,
};