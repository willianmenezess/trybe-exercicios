// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggerWord = '';

let biggerIteration = '';

for (let index = 1 ; index < array.length ; index += 1) {

    for (let secondIndex = 0 ; secondIndex < index ; secondIndex += 1) {

        if ( array[secondIndex].length > array[index].length) {
            biggerIteration = array[secondIndex];
        }else {
            biggerIteration = array[index];
        }

        if (biggerIteration.length > biggerWord.length) {
            biggerWord = biggerIteration;
        }

    }

}

console.log(biggerWord);