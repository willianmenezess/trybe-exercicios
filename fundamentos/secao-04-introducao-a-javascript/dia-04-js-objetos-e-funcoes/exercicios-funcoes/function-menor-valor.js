// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

function minValue(array) {
    let minimumValue = 2;
    let minimumIndice = 0;

    for (index = 1 ; index < array.length; index += 1) {
        if (array[index] < minimumValue) {
            minimumValue = array[index];
            minimumIndice = index;
        }
    }

 return minimumIndice
}

console.log(minValue([2,4,6,7,10,0,-3]));