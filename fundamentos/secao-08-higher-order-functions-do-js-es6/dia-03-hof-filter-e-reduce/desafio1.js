const data2 = require('./database2.js');

// 1 - Calcule a quantidade total da população de todos os países.
const expectedResult = 120797034;

const getPopulation = () => {
 // retorne o seu código aqui
    const sum = data2.countries.reduce((acc, countrie) => acc + countrie.population, 0);
    return sum;
}
console.log(getPopulation());
