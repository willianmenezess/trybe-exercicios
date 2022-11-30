// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const num1 = 20;
const num2 = 5;
const num3 = 27;

function maiorNum(num1, num2) {
    if (num1 > num2 && num1 > num3) {
        return "O maior numero é: " + num1;
    }else if (num2 > num1 && num2 > num3) {
        return "O maior numero é: " + num2;
    }else {
        return "O maior numero é: " + num3;
    }
}

console.log(maiorNum(num1,num2,num3));