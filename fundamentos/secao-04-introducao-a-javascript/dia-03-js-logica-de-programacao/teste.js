// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 


let n = 6;
let symbol = '*';
let lineAsteris = '';

for (let index = 1 ; index <= n ; index += 1){
    lineAsteris = lineAsteris + symbol;
}

for (let index2 = 1 ; index2 <= n ; index2 +=1){
    console.log(lineAsteris);
}


