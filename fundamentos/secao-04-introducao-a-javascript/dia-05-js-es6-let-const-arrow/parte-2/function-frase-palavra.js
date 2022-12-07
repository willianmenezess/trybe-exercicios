// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.


// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

// De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().



// USANDO A ESTRUTURA FOR CONVENCIONAL:

// const longestWord = (frase) => {
//     const arrayWord = frase.split(' ');
//     let biggestWord = '';
//     let maxCharacter = 0;

//     for (let index = 0 ; index < arrayWord.length ; index += 1) {
//         if (arrayWord[index].length > maxCharacter ) {
//             biggestWord = arrayWord [index];
//             maxCharacter = arrayWord[index].length;
//         }

//     }

//     return biggestWord;
// }

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));




// USANDO A ESTRUTURA FOR/OF (LIMITAÇÃO: INDEX JA ESTÁ EMBUTIDO E É DE 1 EM 1)

const longestWord = (frase) => {
    const arrayWord = frase.split(' ');
    let biggestWord = '';
    let maxCharacter = 0;
    
    for (let word of arrayWord) {
        if (word.length > maxCharacter ) {
            biggestWord = word;
            maxCharacter = word.length;
        }

    }

    return biggestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));