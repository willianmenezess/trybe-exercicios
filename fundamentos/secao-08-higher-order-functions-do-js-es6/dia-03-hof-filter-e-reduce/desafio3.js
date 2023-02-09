const data2 = require('./database2.js');

// 3 - Encontre o país com o maior nome.
// De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.

const expectedResult = {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  }
  
  const longestName = () => {
    // retorne seu código aqui
    const compareName = data2.countries.reduce((acc, countrie) => (acc.name.length > countrie.name.length) ? acc : countrie);
    return compareName;
  };

console.log(longestName());