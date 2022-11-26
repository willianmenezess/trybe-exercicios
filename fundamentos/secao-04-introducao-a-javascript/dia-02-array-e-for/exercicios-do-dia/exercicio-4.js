// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0; 

for (var index = 0 ; index < numbers.length ; index += 1) {
    sum = sum + numbers[index];
}

arithmeticAverage = (sum) / (numbers.length);

if ( arithmeticAverage > 20) {
    console.log ('valor maior que 20');
}else {
    console.log ('valor menor ou igual a 20');
}

