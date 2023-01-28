const data2 = require('./database2.js');

// 2 - Calcule a área total de todos os países.
const expectedResult = 4311757;

const getTotalArea = () => {
// retorne seu código aqui
    const area = data2.countries.reduce((acc, countrie) => acc + countrie.area, 0);
    return area;
};
console.log(getTotalArea());