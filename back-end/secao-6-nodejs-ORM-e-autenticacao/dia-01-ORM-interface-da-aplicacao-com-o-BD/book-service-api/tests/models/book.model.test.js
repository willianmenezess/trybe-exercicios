const { expect } = require('chai');
const sinon = require('sinon');

const { Book } = require('../../src/models');

describe('Realizando testes - BOOK MODEL', () => {
  it('possui a propriedade title', () => {
		const book = Book.build();
		expect(book).to.have.property('title');
	});
	it('possui a propriedade author', () => {
		const book = Book.build();
		expect(book).to.have.property('author');
	});
	it('possui a propriedade pageQuantity', () => {
		const book = Book.build();
		expect(book).to.have.property('pageQuantity');
	});
	it('possui a propriedade publisher', () => {
		const book = Book.build();
		expect(book).to.have.property('publisher');
	});
});