class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = []; // 4 notas de provas
  private _assignmentsGrades: number[] = []; // 2 notas de trabalhos

  constructor(
    enrollment: string,
    name: string,
  ) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if(value.length < 6) throw new Error('A matrícula deve conter mais de 6 caracteres');
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) throw new Error('O nome deve conter mais de 3 caracteres');
    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if(value.length > 4) throw new Error('O Estudante só pode conter 4 notas das provas');
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if(value.length > 2) throw new Error('O Estudante só pode conter 2 notas dos trabalhos');
    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._assignmentsGrades].reduce((acc, curr) => acc + curr, 0);
  }

  averageExamsGrades(): number {
    return Math.round(this.sumGrades() / this._examsGrades.length);
  }
}

// Testando a classe Student
const student1 = new Student('123456', 'João');
console.log(student1);
student1.enrollment = '1234567';
student1.name = 'João da Silva';
console.log(student1);