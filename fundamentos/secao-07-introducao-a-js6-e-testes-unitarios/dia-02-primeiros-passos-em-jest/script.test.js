// script.test.js

const { myRemove, myFizzBuzz } = require('./script.js');

describe('remove number from array.', () => {

    it('remove numero 3.', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('remove numero 3 e testa se é diferente do array inicial.', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('remove numero 5.', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });


})

describe('Recebe número e verifica se é divisível por 3 e 5 para ser FizzBuzz', () => {

    it('Verifica se um número, divisível por 3 e 5, é FizzBuzz.', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Verifica se um número, divisível apenas por 3, é Fizz.', () => {
        expect(myFizzBuzz(12)).toBe('fizz');
    });

    it('Verifica se um número, divisível apenas por 5, é Buzz.', () => {
        expect(myFizzBuzz(20)).toBe('buzz');
    });

    it('Verifica se um número não é divisível por 3 e 5, não sendo FizzBuzz, nem fizz e nem buzz.', () => {
        expect(myFizzBuzz(8)).toBe(8);
    });
    
    it('Verifica se o valor de entrada não é um número', () => {
        expect(myFizzBuzz('palmeiras')).toBe(false);
    });
})
