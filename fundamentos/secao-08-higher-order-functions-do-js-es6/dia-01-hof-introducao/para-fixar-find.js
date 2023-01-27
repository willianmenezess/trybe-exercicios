// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const find = numbers.find((numero) => numero % 3 === 0 && numero % 5 === 0);

console.log(find);

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui

const findMusic = (id) => {
const music = musicas.find((musica) => musica.id === id);
return music
}
console.log(findMusic('31031685'));