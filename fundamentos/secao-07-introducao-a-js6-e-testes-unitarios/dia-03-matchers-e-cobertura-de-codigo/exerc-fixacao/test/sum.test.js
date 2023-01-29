const sum = require('../src/sum.js');

describe('a função sum', () => {
    it('retorna a soma do parâmetro a com b', () => {
      expect(sum(10, 20)).toBe(30);
      expect(sum(0, 0)).toBe(0);
    });

    it('lança um erro quando os parâmetros não são números', () => {
      expect(() => {sum('5', 4); }).toThrow();
      expect(() => {sum('5', 4); }).toThrow('parameters must be numbers');
      
    });
});
