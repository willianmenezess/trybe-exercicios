import Student from './Student';
import Person from './Person';
import Employee from './Employee';

// Testando a classe Student
// const student1 = new Student('João', new Date('1995.12.17'));
// console.log(student1);
// console.log('idade:', Person.getAge(student1.birthDate));
// student1.examsGrades = [10, 9, 8, 7];
// student1.assignmentsGrades = [10, 9];
// console.log(student1);
// student1.sumGrades();
// student1.averageGrades();


// Testando a classe Person
// const person1 = new Person('João', new Date('1995.12.17'));
// console.log(person1);
// console.log('idade:', Person.getAge(person1.birthDate));


// Testando a interface Employee
const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);
