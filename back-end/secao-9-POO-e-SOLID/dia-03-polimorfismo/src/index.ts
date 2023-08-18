import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();
clube.adicionarQuadra(quadraFutebol);
const dataReserva = new Date();
// reservando a quadra de futebol, que está na posição 0 do array de quadras
const reservarQuadraFutebol = clube.buscarQuadra<QuadraFutebol>(0).reservar(dataReserva);