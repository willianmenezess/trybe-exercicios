const {info, printMessage} = require('../src/printMessage.js');

describe('a função printMessage', () => {
    it('retorna que o objeto passado como parâmetro possui a propriedade "personagem"', () => {
      expect(info).toHaveProperty('personagem');
      expect(info.personagem).toEqual('Margarida');
    });

});
