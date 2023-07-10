const { expect } = require('chai');
const sinon = require('sinon');
const { Book } = require('../../src/models');
const BookService = require('../../src/services/book.service');


describe('BookService', () => {
	const booksFromModel = [
		{
			id: 2,
			title: 'Dexter: Darkly Dreaming',
			author: 'Jeff Lindsay',
			pageQuantity: 288,
			publisher: null,
			createdAt: '2023-07-08T17:59:34.000Z',
			updatedAt: '2023-07-08T17:59:34.000Z'
		},
		{
			id: 1,
			title: 'The Lord of the Rings',
			author: 'J. R. R. Tolkien',
			pageQuantity: 1178,
			publisher: null,
			createdAt: '2023-07-08T17:59:34.000Z',
			updatedAt: '2023-07-08T17:59:34.000Z'
		}
	];

  describe('getAll', () => {
		it('Exibe todos os livros com sucesso', async () => {
	    sinon.stub(Book, 'findAll').resolves(booksFromModel);
		  const books = await BookService.getAll();
			expect(books).to.be.an('array');
			expect(books).to.have.lengthOf(2);
			expect(books[0].title).to.be.equal('Dexter: Darkly Dreaming');
	});
});
});