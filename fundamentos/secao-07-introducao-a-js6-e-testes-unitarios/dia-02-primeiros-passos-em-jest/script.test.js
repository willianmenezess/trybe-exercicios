// script.test.js

const { myRemove, myFizzBuzz } = require('./script.js');

describe('remove number from array', () => {

    test('remove numero 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('remove numero 3 e testa se é diferente do array inicial', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('remove numero 5', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });


})

describe('Recebe número e verifica se é divisível por 3 e 5 para ser FizzBuzz', () => {

    test('Verifica se 15 é FizzBuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

})
