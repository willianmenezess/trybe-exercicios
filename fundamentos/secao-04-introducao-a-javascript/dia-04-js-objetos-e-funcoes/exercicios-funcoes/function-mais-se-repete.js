// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function moreRepeated(array) {

    let moreRepetitions = 0;
    let valueMoreRepetitions = 0;

    for (index = 0; index < array.length; index += 1) {
        let repetitions = 0;


        for (index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index] === array[index2]) {
                repetitions = repetitions + 1;
            }
        }

        if (repetitions > moreRepetitions) {
            moreRepetitions = repetitions;
            valueMoreRepetitions = array[index];
        }

    }

    return (valueMoreRepetitions);
}

console.log(moreRepeated([2, 3, 2, 5, 8, 2, 3]));

