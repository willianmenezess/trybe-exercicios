// printMessageTest.test.js
const { info, printMessage } = require('../src/printMessage.js');

describe('Exercício de teste seção 7.3', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });

  // implemente seus testes aqui
  it('verifica se o return tem a msg "Boas Vindas,"', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
  });
  
  it('verifica se mansagem de erro é lançada caso objeto seja inválido', () => {
    const info = 'palmeiras'
    expect(() => { printMessage(info); }).toThrow();
    expect(() => { printMessage(info); }).toThrow(new Error('objeto inválido'));
  });

});

