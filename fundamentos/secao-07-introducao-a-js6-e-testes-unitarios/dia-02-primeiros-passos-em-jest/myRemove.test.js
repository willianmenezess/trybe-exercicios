// myRemove.test.js

const { myRemove } = require('./myRemove.js');

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
