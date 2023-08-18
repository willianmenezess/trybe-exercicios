import Quadra from './Quadra';
import IFutebol from './interfaces/IFutebol';
import IAgenda from './interfaces/IAgenda';
import normas from './normas/normasDeUso';

export default class QuadraFutebol extends Quadra {
	public futebolData: IFutebol = normas.futebol;
	public reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {
		return {
			protocolo: Math.random().toString(36).substring(2, 15),
			data: horaReserva,
			regras: this.futebolData as unknown as IFutebol,
		};
	}
  
};