// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'banana', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['abacaxi', 'morango', 'mamão'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const allFruits = [...fruit, ...additional];
  return allFruits
};

console.log(fruitSalad(specialFruit, additionalItens));