const { expect } = require('chai');
const sinon = require('sinon');
const { Book } = require('../../src/models');
const BookService = require('../../src/services/book.service');


describe('Realizando testes - BOOK SERVICE', () => {
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

	afterEach(() => {
		sinon.restore();
	});

	let responseService;

  describe('getAll', () => {
		it('Exibe todos os livros com sucesso', async () => {
	    sinon.stub(Book, 'findAll').resolves(booksFromModel);
		  responseService = await BookService.getAll();
			expect(responseService).to.be.an('array');
			expect(responseService).to.have.lengthOf(2);
			expect(responseService[0].title).to.be.equal('Dexter: Darkly Dreaming');
	});
		it('quando não existem livros cadastrados', async () => {
			sinon.stub(Book, 'findAll').resolves([]);
			responseService = await BookService.getAll();
			expect(responseService).to.be.an('array');
			expect(responseService).to.have.lengthOf(0);
		});
	});

	describe('getById', () => {
	  it('Exibe livro buscado por id com sucesso', async () => {
			sinon.stub(Book, 'findByPk').resolves(booksFromModel[1]);
			responseService = await BookService.getById(1);
			expect(responseService).to.be.an('object');	
			expect(responseService).to.deep.equal(booksFromModel[1]);
		});
		it('quando o livro não existe', async () => {
			sinon.stub(Book, 'findByPk').resolves(null);
			responseService = await BookService.getById(1);
			expect(responseService).to.be.equal(null);
		});
	});

	describe('create', () => {
		it('cadastro de livro com sucesso', async () => {
			const newBook = {
				title: 'Dexter: A Mão Esquerda de Deus',
				author: 'Jeff Lindsay',
				pageQuantity: 275,
				publisher: 'Planeta',
			};

			const responseCreated = {
				id: 3,
				title: 'Dexter: A Mão Esquerda de Deus',
				author: 'Jeff Lindsay',
				pageQuantity: 275,
				publisher: 'Planeta',
				createdAt: '2023-07-08T17:59:34.000Z',
				updatedAt: '2023-07-08T17:59:34.000Z'
			}
			sinon.stub(Book, 'create').resolves(responseCreated);
			responseService = await BookService.create({newBook});
			expect(responseService).to.be.an('object');
			expect(responseService).to.deep.equal(responseCreated);
		});
	});
});
