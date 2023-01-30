// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
// De olho na dica 👀: faça com que o array de nomes seja um array de letras.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const countA = () => {
    // retorne seu código aqui
    const letters = names.join('').toLowerCase().split('');
    const sumA = letters.reduce((acc, letter) => (letter === 'a') ? acc +=1 : acc, 0)
    return sumA;
}

// console.log(countA());
const letters = names.join('').toLowerCase().split('');
console.log(countA());