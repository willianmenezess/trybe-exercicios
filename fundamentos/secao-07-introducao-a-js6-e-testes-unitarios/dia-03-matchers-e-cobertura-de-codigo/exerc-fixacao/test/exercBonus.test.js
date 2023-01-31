const { searchEmployee } = require('../src/exercBonus.js');

describe('Sobre a função "searchEmployee"', () => {
    it('Testa se a função existe', () => {
      expect(typeof searchEmployee).toBe('function');
    });

    it('Busca o nome de um funcionário fornecendo numero do id e "firstName"', () => {
      expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    });
    
    it('Busca a especialidade de um funcionário fornecendo numero do id e "specialities"', () => {
      expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
    });
    
    it('Retorna o erro "ID não identificada" se o ID não existir', () => {
        // const received = searchEmployee('8579-666', 'specialities');
      expect(() => { searchEmployee('8579-666', 'specialities'); }).toThrow();
      expect(() => { received; }).toThrowError(new Error ("ID não identificado"));
    });




   



});
