// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.

let num = 10;
let factorial = 1;

for (let index = num; index > 0 ; index -= 1) {
    factorial = factorial * index ;
}

console.log("Factorial of 10 = " + factorial);


