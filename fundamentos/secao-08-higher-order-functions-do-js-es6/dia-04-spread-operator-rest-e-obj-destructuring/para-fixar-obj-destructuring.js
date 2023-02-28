
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const allInfos = {...user, ...jobInfos};

// console.log(name, age, nationality, profession, squad);

const printPhrase = (allInfos) => {
    const {name, age, nationality, profession, squad, squadInitials} = allInfos;
   return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
};

console.log(printPhrase(allInfos));
  