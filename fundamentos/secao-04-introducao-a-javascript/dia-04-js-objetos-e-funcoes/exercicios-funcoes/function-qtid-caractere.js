// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.


function maxCharacter(arrayCharacter) {
    let maxCharac = 0;
    let maxIndex = 0;

    for (index = 0 ; index < arrayCharacter.length; index += 1) {
        if (arrayCharacter[index].length > maxCharac) {
            maxCharac = arrayCharacter[index].length;
            maxIndex = index;
        }
    }

 return maxIndex

}




console.log(maxCharacter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
