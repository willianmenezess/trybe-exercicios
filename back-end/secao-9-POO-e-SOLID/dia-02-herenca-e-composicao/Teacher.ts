import Person from './Person';
import Subject from './Subject';
import Employee from './Employee';

export default class Teacher extends Person implements Employee {
	private _salary: number;
	private _subject: Subject;
	private _registration = String();
	private _admissionDate: Date;

	constructor (name: string, birthDate: Date, salary: number, subject: Subject) {
		super(name, birthDate);
		this._salary = salary;
		this._subject = subject;
		this._registration = this.generateRegistration();
		this._admissionDate = new Date();
	}

	get salary(): number {
		return this._salary;
	}

	set salary(value: number) {
		if (value < 0) throw new Error('O salário não pode ser negativo.');
		this._salary = value;
	}

	get subject(): Subject {
		return this._subject;
	}

	set subject(value: Subject) {
		this._subject = value;
	}

	get registration(): string {
		return this._registration;
	}

	set registration(value: string) {
		if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
		this._registration = value;
	}

	get admissionDate(): Date {
		return this._admissionDate;
	}	

	set admissionDate(value: Date) {
		if (value > new Date()) throw new Error('A data de admissão não pode ser maior que a data atual.');
		this._admissionDate = value;
	}

	generateRegistration(): string {
		const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
		return `TEA${randomStr}`;
	}

}