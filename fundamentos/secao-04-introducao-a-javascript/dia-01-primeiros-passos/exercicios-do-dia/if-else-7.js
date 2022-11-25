// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.


const num1 = 8;
const num2 = 2;
const num3 = 10;

let isOdd = true;

if ( num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0 ) {
    console.log( isOdd );
}else {
    console.log( !isOdd );
}
