export default class Subject {
	private _name: string;
	constructor(name: string){
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	set name(name: string) {
		if (name.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
		this._name = name;
	}
}

// teste da classe Subject
const matematia = new Subject('Matemática');
const historia = new Subject('História');
const filosofia = new Subject('Filosofia');

console.log('matemática:', matematia);
console.log('história:', historia);
console.log('filosofia:', filosofia);
