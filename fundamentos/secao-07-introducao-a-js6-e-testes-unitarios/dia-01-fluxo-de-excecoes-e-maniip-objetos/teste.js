
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const valuesList = (object) => {
  const valuesList = Object.values(object);
  console.log(valuesList);
};
valuesList(lesson3);