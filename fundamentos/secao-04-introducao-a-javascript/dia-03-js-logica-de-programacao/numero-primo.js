// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.


let ultimoNum = 50;
let numPrimos = [2]


// Primeiro for com o numero atual que vou comparar com os anteriores:

for (let numAtual = 3; numAtual < ultimoNum; numAtual += 1) {
    let qtidNumDivisiveis = 0
    // começa com 3, pois já indiquei que 2 é numero primo pra criar o array.

    // Comparo o numero atual com todos os anteriores, tirando ele mesmo e 1. Se tiver algum numero divisivel, vá somando numa variável
    for (let numAnterior = numAtual - 1; numAnterior > 1; numAnterior -= 1) {
        if (numAtual % numAnterior === 0)
            qtidNumDivisiveis = qtidNumDivisiveis + 1;
    }

    // Se não tiver nenhum numero anterior divisível, coloca no array de numeros primos
    if (qtidNumDivisiveis === 0) {
        numPrimos.push(numAtual);
    }

}

// Imprime o array de numeros primos:
console.log(numPrimos);

let maiorNumPrimo = numPrimos[numPrimos.length-1];

// Imprime o maior numero primo:
console.log('O maior numero primo é = ' + maiorNumPrimo);



// for (let index = 0; index < numPrimos.length; index += 1) {
//     if (numPrimos[index] > maiorNumPrimo) {
//         maiorNumPrimo = numPrimos[index];
//     }
// }






