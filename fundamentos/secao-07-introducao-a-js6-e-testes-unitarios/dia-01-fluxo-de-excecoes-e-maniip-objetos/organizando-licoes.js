const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const key = 'turno';
const value = 'noite'

// função que adiciona o turno em um objeto
const addShift = (lesson2, key, value) => {
    lesson2[key] = value;
    console.log(lesson2);
};
addShift(lesson2, key, value);


// função que imprime a lista de chaves de um objeto
const keysList = (object) => {
    const keysList = Object.keys(object);
    console.log(keysList);
};
keysList(lesson3);

// função que mostra o tamanho de um objeto
const objectLength = (object) => {
    arrayProperties = Object.entries(object);
    const length = arrayProperties.length
    console.log(length);
  };
  objectLength(lesson3);

// função que imprime a lista de valores de um objeto
const valuesList = (object) => {
    const valuesList = Object.values(object);
    console.log(valuesList);
};
valuesList(lesson3);

// Cria um objeto de nome allLessons, que agrupa todas as aulas através do Object.assign.
const allLessons = {};
Object.assign (allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);


// Cria uma função que retorne o número total de estudantes em todas as aulas.
const totalStudents = (object) => {
    let total = 0;

  const keys = Object.keys(object); //array com as chaves => [lesson1,lesson2, lesson3]
    
  for (index in keys) {
    total += object[keys[index]].numeroEstudantes; // incrementa a variável total a cada iteração
  }
  return total;
  // a função retorna o total de alunos após as iterações do "for/in"
};
console.log(totalStudents(allLessons));




