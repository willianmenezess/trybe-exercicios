import Quadra from './Quadra';
import ITenis from './interfaces/ITenis';
import normas from './normas/normasDeUso';
import IAgenda from './interfaces/IAgenda';

export default class QuadraTenis extends Quadra {
	protected tenisData: ITenis = normas.tenis;
	public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
		return {
			protocolo: Math.random().toString(36).substring(2, 15),
			data: horaReserva,
			regras: this.tenisData as unknown as ITenis,
		};
	}
};