// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let maxNumber = 25;
let array = [];


for (index = 1 ; index <= maxNumber ; index += 1) {
    array.push(index);
}

for (let div2 of array) {
    div2 = div2/2;
    console.log(div2);
}

