// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.


function maxValue(array) {
    let maximum = 0;

    for (index = 1 ; index < array.length; index += 1) {
        if (array[index] > maximum) {
            maximum = index;
        }
    }

 return maximum
}

console.log(maxValue([2,3,6,7,10,1]));









let array = [1, 7, 2, 20, 4];