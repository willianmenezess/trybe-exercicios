// myRemove.test.js

const { myRemove } = require('./myRemove.js');

describe('remove number from array', () => {

    test('remove number 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('remove number 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });


})
