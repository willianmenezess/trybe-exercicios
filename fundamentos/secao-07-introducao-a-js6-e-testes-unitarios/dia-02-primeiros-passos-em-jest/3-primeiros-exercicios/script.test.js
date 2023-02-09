// script.test.js

const { myRemove, myFizzBuzz, mapString, encode, decode } = require('./script.js');

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

describe('Testa as funções encode e decode, transformando vogais em números e vice-versa', () => {

    it('Testa se encode e decode são funções.', () => {
        expect(typeof encode === 'function' && typeof decode === 'function').toBe(true);
    });

    it('Testa se encode converte a,e,i,o,u em 1,2,3,4,5', () => {
        expect(encode('aeiou')).toEqual('12345');
    });

    it('Testa se decode converte 1,2,3,4,5 em a,e,i,o,u', () => {
        expect(decode('12345')).toEqual('aeiou');
    });

    it('Testa se decode converte 1,2,3,4,5 em a,e,i,o,u, mas não outros números', () => {
        expect(decode('12345678')).toEqual('aeiou678');
    });

    it('Testa se encode converte a,e,i,o,u em 1,2,3,4,5 respectivamente, mas não outras letras do alfabeto', () => {
        expect(encode('aeiouxyz')).toEqual('12345xyz');
    });

    it('Testa se o retorno da função tem o número de caracteres definido', () => {
        expect(decode('palmeiras').length).toEqual(9);
    });
})
