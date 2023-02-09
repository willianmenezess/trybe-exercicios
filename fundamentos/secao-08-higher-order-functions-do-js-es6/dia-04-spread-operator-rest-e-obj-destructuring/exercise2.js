// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.

// escreva sum abaixo
// Se preciso JUNTAR ilimitados parâmetros de entrada pra utiliza-los na função, utilizo o Rest Parameters
// (...param), dessa forma os dados inseridos de entrada serão JUNTADOS num único array chamado "numeros":
const sum = (...numeros) => numeros.reduce((acc, numero) => acc + numero);

console.log(sum(4,5,6));