// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().


// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);

//COLOCOU-SE UMA FUNÇÃO DE RETORNO B-A DENTRO DE SORT, PRA ORDENAR CORRETAMENTE E N PELO PADRAO UNICODE

const longestWord = (frase) => frase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
    

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));