// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const num1 = 20;
const num2 = 5;

function maiorNum(num1, num2) {
    if (num1 > num2) {
        return "O maior numero é: " + num1;
    }else {
        return "O maior numero é: " + num2;
    }
}

console.log(maiorNum(num1,num2));
