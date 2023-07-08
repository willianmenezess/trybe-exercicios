const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
	const { id } = req.params;
	const book = await BookService.getById(id);
	if(!book) return res.status(404).json({ message: 'Book not found' });
	res.status(200).json(book);
}

const create = async (req, res) => {
	const { title, author, pageQuantity } = req.body;
	const newBook = await BookService.create(title, author, pageQuantity);
	res.status(201).json(newBook);
}

const update = async (req, res) => {
	const { id } = req.params;
	const { title, author, pageQuantity } = req.body;
	const data = { title, author, pageQuantity };
	const updatedBook = await BookService.update(id, data);
	res.status(200).json(updatedBook);
}

const deleteBook = async (req, res) => {
	const { id } = req.params;
	const deletedBook = await BookService.deleteBook(id);
	res.status(200).json(deletedBook);
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	deleteBook,
};