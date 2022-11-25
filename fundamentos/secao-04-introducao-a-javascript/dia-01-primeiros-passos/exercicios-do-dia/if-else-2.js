// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const a = 4;
const b = 7; 
const c = 12;

if ( a > b && a > c) {
    console.log ("O maior numero é o: " + a);
} else if ( b > a && b > c) {
    console.log ("O maior numero é o: " + b);
} else if (c > a && c > b) {
    console.log ("O maior numero é o: " + c);
} else {
    console.log ("O maior numero é igual a: " + c)
}

