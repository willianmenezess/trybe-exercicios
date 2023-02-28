// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];
  
  // escreva filterPeople abaixo


  const filterPeople = (arrayPersons) => {
    const filterAustralian = arrayPersons.filter(({nationality, bornIn}) => {
        return nationality === 'Australian' && bornIn > 1900 && bornIn < 2001;
    });
    return filterAustralian;
  };

  console.log(filterPeople(people));

//    OUTRA FORMA DE RESOLVER:

//   const filterPeople = (arrayPersons) => {
//     const filterAustralian = arrayPersons.filter((person) => {
//         return person.nationality === 'Australian' && person.bornIn > 1900 && person.bornIn < 2001;
//     });
//     return filterAustralian;
//   };

//   console.log(filterPeople(people));